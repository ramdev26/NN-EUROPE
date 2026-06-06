import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const TO_EMAIL = process.env.VISA_FORM_TO_EMAIL ?? 'navinnimesh25@gmail.com';
const FROM_EMAIL =
  process.env.VISA_FORM_FROM_EMAIL ?? 'NN Europe Consultant <onboarding@resend.dev>';

type UploadedFile = {
  field: string;
  fileName: string;
  url: string;
};

type VisaFormPayload = {
  email?: string;
  email_address?: string;
  full_name?: string;
  date_of_birth?: string;
  nationality?: string;
  national_id_card_number?: string;
  passport_number?: string;
  company_address?: string;
  current_address?: string;
  whatsapp_number?: string;
  current_country_phone?: string;
  currently_work_country?: string;
  current_company_name?: string;
  current_job_position?: string;
  marital_status?: string;
  gender?: string;
  terms_and_conditions?: string;
  files?: UploadedFile[];
};

const fieldLabels: Record<string, string> = {
  email: 'Email',
  email_address: 'Email Address',
  full_name: 'Full name with surname',
  date_of_birth: 'Date of birth',
  nationality: 'Nationality',
  national_id_card_number: 'National ID Card Number',
  passport_number: 'Passport Number',
  company_address: 'Company Address',
  current_address: 'Current Address',
  whatsapp_number: 'WhatsApp Number',
  current_country_phone: 'Currently Working Country Phone Number',
  currently_work_country: 'Currently Work Country',
  current_company_name: 'Currently Company Name',
  current_job_position: 'Currently Job Position',
  marital_status: 'Marital Status',
  gender: 'Gender',
  terms_and_conditions: 'Terms and Conditions',
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function buildHtmlEmail(data: VisaFormPayload) {
  const rows = Object.entries(fieldLabels)
    .map(([key, label]) => {
      const value = data[key as keyof VisaFormPayload];
      if (!value || typeof value !== 'string') return '';
      return `<tr><td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${escapeHtml(label)}</td><td style="padding:10px 14px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`;
    })
    .filter(Boolean)
    .join('');

  const fileRows = (data.files ?? [])
    .map(
      (file) =>
        `<tr><td style="padding:10px 14px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${escapeHtml(file.field)} - ${escapeHtml(file.fileName)}</td><td style="padding:10px 14px;border:1px solid #e5e7eb;"><a href="${escapeHtml(file.url)}">Download file</a></td></tr>`,
    )
    .join('');

  return `
    <div style="font-family:Inter,Arial,sans-serif;color:#111827;line-height:1.5;">
      <h2 style="margin:0 0 16px;">New NN Europe Visa Consultant Form Submission</h2>
      <p style="margin:0 0 20px;color:#4b5563;">A new client details form was submitted from the landing page.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tbody>
          ${rows}
          ${fileRows}
        </tbody>
      </table>
    </div>
  `;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: 'Email service is not configured.' });
  }

  const data = request.body as VisaFormPayload;

  if (!data.full_name?.trim()) {
    return response.status(400).json({ error: 'Full name is required.' });
  }

  const replyTo = data.email?.trim() || data.email_address?.trim();
  if (!replyTo) {
    return response.status(400).json({ error: 'Email is required.' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo,
      subject: 'New NN Europe Visa Consultant Form Submission',
      html: buildHtmlEmail(data),
    });

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send visa form email:', error);
    return response.status(500).json({ error: 'Failed to send your submission. Please try again.' });
  }
}
