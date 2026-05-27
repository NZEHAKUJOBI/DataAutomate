import { useState } from 'react';
import { Mail, Phone, CheckCircle, BarChart3 } from 'lucide-react';
import './Contact.css';

const destinationEmail = 'Ifeanyi@dataautomate.io';
const formEndpoint = `https://formsubmit.co/${destinationEmail}`;

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: destinationEmail },
  { icon: <Phone size={18} />, label: 'Phone', value: '+234 806 453 7631' },
  // { icon: <MapPin size={18} />, label: 'Head Office', value: 'London · New York · Lagos · Singapore' },
];

type FormState = { name: string; company: string; email: string; industry: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', company: '', email: '', industry: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSending(true);

    try {
      const payload = new FormData();
      payload.append('name', form.name);
      payload.append('company', form.company);
      payload.append('email', form.email);
      payload.append('industry', form.industry);
      payload.append('message', form.message);
      payload.append('_subject', `New DataAutomate demo request from ${form.name}`);
      payload.append('_template', 'table');
      payload.append('_captcha', 'false');
      payload.append('_autoresponse', 'Thanks for reaching out to DataAutomate. We received your request and will contact you soon.');

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Something went wrong while sending your message.');
      }

      setSubmitted(true);
      setForm({ name: '', company: '', email: '', industry: '', message: '' });
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to send your message right now.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__bg" aria-hidden />
      <div className="container contact__inner">
        <div className="contact__left">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-heading">
            Ready to <span className="gradient-text">Automate Your Data</span>?
          </h2>
          <p className="contact__subtitle">
            Talk to our team and get a personalised demo of DataAutomate built around
            your industry, your data sources, and your business goals.
          </p>

          <div className="contact__info-list">
            {contactInfo.map((c) => (
              <div key={c.label} className="contact__info-item">
                <div className="contact__info-icon">{c.icon}</div>
                <div>
                  <div className="contact__info-label">{c.label}</div>
                  <div className="contact__info-value">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact__trust">
            <div className="contact__trust-badge">
              <CheckCircle size={14} />
              <span>No credit card required</span>
            </div>
            <div className="contact__trust-badge">
              <CheckCircle size={14} />
              <span>Free 30-day trial</span>
            </div>
            <div className="contact__trust-badge">
              <CheckCircle size={14} />
              <span>SOC 2 certified</span>
            </div>
          </div>
        </div>

        <div className="contact__right">
          {submitted ? (
            <div className="contact__success card">
              <div className="contact__success-icon">
                <CheckCircle size={40} />
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will contact you within one business day with a personalised demo.</p>
              <button className="contact__success-btn" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form card" onSubmit={handleSubmit}>
              <div className="contact__form-header">
                <BarChart3 size={20} className="contact__form-logo" />
                <span>Request a Demo</span>
              </div>

              <input type="hidden" name="_next" value={window.location.href} />

              <div className="contact__field">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" value={form.name} onChange={handleChange} required />
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="company">Company *</label>
                  <input id="company" name="company" type="text" placeholder="Acme Corp" value={form.company} onChange={handleChange} required />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Work Email *</label>
                  <input id="email" name="email" type="email" placeholder="you@acme.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="industry">Industry</label>
                <select id="industry" name="industry" value={form.industry} onChange={handleChange}>
                  <option value="">Select your industry...</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="logistics">Logistics & Supply Chain</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail & E-Commerce</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Tell us about your data challenge</label>
                <textarea id="message" name="message" placeholder="What systems are you trying to unify?" rows={4} value={form.message} onChange={handleChange} />
              </div>

              {error ? <p className="contact__form-error">{error}</p> : null}

              <button type="submit" className="contact__submit">
                {sending ? 'Sending...' : 'Request Free Demo'}
              </button>

              <p className="contact__form-footer">
                By submitting you agree to our Privacy Policy. We never share your data.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
