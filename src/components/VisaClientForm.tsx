import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, FileText, FileUp, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
    if (window.location.hash !== '#visa-form') {
      window.history.pushState(null, '', '#visa-form');
    }
  };

  const closeForm = () => {
    setIsOpen(false);
    if (window.location.hash === '#visa-form') {
      window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`);
    }
  };

  useEffect(() => {
    const syncModalWithHash = () => {
      if (window.location.hash === '#visa-form') {
        setIsOpen(true);
      }
    };

    syncModalWithHash();
    window.addEventListener('hashchange', syncModalWithHash);
    return () => window.removeEventListener('hashchange', syncModalWithHash);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeForm();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="visa-form" className="section-padding relative overflow-hidden bg-brand-accent/20">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy/80 p-6 shadow-[0_35px_100px_-35px_rgba(0,0,0,0.85)] backdrop-blur-2xl md:rounded-[3rem] md:p-10 lg:p-12"
          >
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-gold/10 blur-[90px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-gold-bright">
                  <FileText size={15} />
                  Client Details Form
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  NN Europe Visa Consultant <span className="text-gold italic">Poland Process</span>
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                  Open the form, add your client details, and upload the requested TRC, passport, and national ID documents in one guided flow.
                </p>
              </div>

              <button
                type="button"
                onClick={openForm}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gold px-8 py-5 text-lg font-bold text-brand-navy shadow-xl shadow-brand-gold/20 transition hover:scale-[1.01] hover:shadow-brand-gold/30 active:scale-[0.99] lg:w-auto"
              >
                Open Client Form <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 flex items-end justify-center bg-brand-navy p-0 sm:items-center sm:p-5"
              style={{ zIndex: 9999 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="visa-form-title"
            >
              <button
                type="button"
                className="absolute inset-0 cursor-default"
                aria-label="Close form"
                onClick={closeForm}
              />

              <motion.div
                initial={{ opacity: 0, y: 42, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-t-[2rem] border border-white/10 bg-[#070b16] shadow-[0_40px_120px_rgba(0,0,0,0.9)] sm:max-h-[86vh] sm:rounded-[2.5rem]"
              >
                <div className="border-b border-white/10 bg-[#070b16] px-5 py-4 sm:px-8 sm:py-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold">Poland Process</p>
                      <h3 id="visa-form-title" className="mt-1 text-xl font-bold text-white sm:text-2xl">
                        Client Details Form
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={closeForm}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-brand-gold/40 hover:text-brand-gold"
                      aria-label="Close client details form"
                    >
                      <X size={22} />
                    </button>
                  </div>
                </div>

                <div className="max-h-[calc(88vh-5.5rem)] overflow-y-auto bg-[#070b16] px-5 py-6 sm:max-h-[calc(86vh-5.75rem)] sm:px-8 sm:py-8">
                  <form
                    action="https://formsubmit.co/navinnimesh25@gmail.com"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={validateUploads}
                    className="mx-auto max-w-5xl"
                  >
                    <input type="hidden" name="_subject" value="New NN Europe Visa Consultant Form Submission" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://nn-europe-consultant.vercel.app/thank-you.html" />

                    <div className="mb-7 grid gap-4 rounded-[1.5rem] border border-brand-gold/20 bg-brand-gold/[0.07] p-5 text-sm text-white/70 md:grid-cols-2 md:p-6">
                      <div className="flex gap-3">
                        <ShieldCheck className="mt-0.5 shrink-0 text-brand-gold" size={20} />
                        <p>Only submit documents if you agree to share them for visa consultation review.</p>
                      </div>
                      <div className="flex gap-3">
                        <FileText className="mt-0.5 shrink-0 text-brand-gold" size={20} />
                        <p>Keep documents compressed and readable. Each upload field accepts up to 5 files, 10 MB per file.</p>
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
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
