import { motion } from 'motion/react';
import { CheckCircle2, FileUp, Mail, ShieldCheck } from 'lucide-react';
import type { FC, FormEvent, HTMLInputTypeAttribute } from 'react';

const inputClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-white/35 outline-none transition focus:border-brand-gold focus:bg-white/[0.07] focus:ring-2 focus:ring-brand-gold/20';

const labelClass = 'mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold-bright';

const maxFilesPerField = 5;
const maxFileBytes = 10 * 1024 * 1024;

type TextField = {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  autoComplete?: string;
};

type FileFieldConfig = {
  label: string;
  name: string;
  helper: string;
};

const textFields: TextField[] = [
  { label: 'Email', name: 'email', type: 'email', autoComplete: 'email' },
  { label: 'Email Address', name: 'email_address', type: 'email', autoComplete: 'email' },
  { label: 'Full name with surname', name: 'full_name', type: 'text', autoComplete: 'name' },
  { label: 'Date of birth', name: 'date_of_birth', type: 'date' },
  { label: 'Nationality', name: 'nationality', type: 'text', autoComplete: 'country-name' },
  { label: 'National ID Card Number', name: 'national_id_card_number', type: 'text' },
  { label: 'Passport Number', name: 'passport_number', type: 'text' },
  { label: 'Company Address', name: 'company_address', type: 'text' },
  { label: 'Currently Address', name: 'current_address', type: 'text', autoComplete: 'street-address' },
  { label: 'WhatsApp Number (with country code)', name: 'whatsapp_number', type: 'tel', autoComplete: 'tel' },
  { label: 'Currently Working Country Phone Number', name: 'current_country_phone', type: 'tel' },
  { label: 'Currently Work Country', name: 'currently_work_country', type: 'text', autoComplete: 'country-name' },
  { label: 'Currently Company Name', name: 'current_company_name', type: 'text', autoComplete: 'organization' },
  { label: 'Currently Job Position', name: 'current_job_position', type: 'text', autoComplete: 'organization-title' },
];

const fileFields: FileFieldConfig[] = [
  {
    label: 'TRC',
    name: 'trc_files',
    helper: 'Upload your TRC both sides (front and back). Up to 5 files.',
  },
  {
    label: 'Passport',
    name: 'passport_files',
    helper: 'Upload scans of all passport pages, including stamps, visas, and profile page. Up to 5 files.',
  },
  {
    label: 'Nationality ID Card',
    name: 'nationality_id_card_files',
    helper: 'Upload your nationality card both sides (front and back). Up to 5 files.',
  },
];

function validateUploads(event: FormEvent<HTMLFormElement>) {
  const fileInputs = Array.from(event.currentTarget.querySelectorAll('input[type="file"]')) as HTMLInputElement[];

  for (const input of fileInputs) {
    const files = Array.from(input.files ?? []);
    if (files.length > maxFilesPerField) {
      event.preventDefault();
      window.alert(`Please upload no more than ${maxFilesPerField} files for ${input.dataset.label}.`);
      return;
    }

    const oversized = files.find((file) => file.size > maxFileBytes);
    if (oversized) {
      event.preventDefault();
      window.alert(`${oversized.name} is larger than 10 MB. Please compress it or upload a smaller file.`);
      return;
    }
  }
}

const Field: FC<{ field: TextField }> = ({ field }) => {
  const { label, name, type, autoComplete } = field;

  return (
    <label>
      <span className={labelClass}>
        {label} <span className="text-brand-gold">*</span>
      </span>
      <input
        required
        className={inputClass}
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={type === 'date' ? undefined : label}
      />
    </label>
  );
};

const FileField: FC<{ field: FileFieldConfig }> = ({ field }) => {
  const { label, name, helper } = field;

  return (
    <label className="block rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.025] p-5 transition hover:border-brand-gold/40 hover:bg-white/[0.04]">
      <span className={labelClass}>
        {label} <span className="text-brand-gold">*</span>
      </span>
      <span className="mb-4 flex items-start gap-3 text-sm leading-relaxed text-white/50">
        <FileUp className="mt-0.5 shrink-0 text-brand-gold" size={18} />
        {helper} Max 10 MB per file.
      </span>
      <input
        required
        multiple
        type="file"
        name={name}
        data-label={label}
        accept=".pdf,.jpg,.jpeg,.png,.webp"
        className="w-full cursor-pointer rounded-2xl border border-white/10 bg-brand-navy/70 p-3 text-sm text-white file:mr-4 file:rounded-xl file:border-0 file:bg-gold file:px-4 file:py-2 file:text-sm file:font-bold file:text-brand-navy hover:border-brand-gold/30"
      />
    </label>
  );
};

export default function VisaClientForm() {
  return (
    <section id="visa-form" className="section-padding relative overflow-hidden bg-brand-accent/20">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold"
          >
            Client Details Form
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold md:text-6xl"
          >
            NN Europe Visa Consultant <span className="text-gold italic">Poland Process</span>
          </motion.h2>
          <p className="text-lg leading-relaxed text-white/55">
            Fill this form carefully and upload the requested documents. Your response will be sent to
            <span className="font-semibold text-brand-gold-bright"> navinnimesh25@gmail.com</span>.
          </p>
        </div>

        <motion.form
          action="https://formsubmit.co/navinnimesh25@gmail.com"
          method="POST"
          encType="multipart/form-data"
          onSubmit={validateUploads}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-brand-navy/80 p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)] backdrop-blur-2xl md:rounded-[3rem] md:p-10"
        >
          <input type="hidden" name="_subject" value="New NN Europe Visa Consultant Form Submission" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://nn-europe-consultant.vercel.app/thank-you.html" />

          <div className="mb-8 grid gap-4 rounded-[1.5rem] border border-brand-gold/20 bg-brand-gold/[0.07] p-5 text-sm text-white/70 md:grid-cols-2 md:p-6">
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 shrink-0 text-brand-gold" size={20} />
              <p>Only submit documents if you agree to share them for visa consultation review.</p>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-brand-gold" size={20} />
              <p>After the first live submission, FormSubmit may ask the recipient email to confirm activation. Keep uploads compressed for email delivery.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {textFields.map((field) => (
              <Field key={field.name} field={field} />
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {fileFields.map((field) => (
              <FileField key={field.name} field={field} />
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <fieldset className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
              <legend className={labelClass}>Marital Status *</legend>
              <div className="flex flex-wrap gap-4 text-white/70">
                {['Married', 'Single'].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input required type="radio" name="marital_status" value={option} className="accent-brand-gold" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
              <legend className={labelClass}>Gender *</legend>
              <div className="flex flex-wrap gap-4 text-white/70">
                {['Male', 'Female'].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input required type="radio" name="gender" value={option} className="accent-brand-gold" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <label className="mt-8 flex gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 text-sm font-semibold leading-relaxed text-white/70">
            <input required type="checkbox" name="terms_and_conditions" value="Totally agree" className="mt-1 shrink-0 accent-brand-gold" />
            <span>
              Terms and Conditions: <span className="text-brand-gold-bright">Totally agree</span>. I confirm the information is correct and agree to be contacted about my visa consultation request.
            </span>
          </label>

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gold px-8 py-5 text-lg font-bold text-brand-navy shadow-xl shadow-brand-gold/20 transition hover:scale-[1.01] hover:shadow-brand-gold/30 active:scale-[0.99]"
          >
            Submit Client Form <CheckCircle2 size={22} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
