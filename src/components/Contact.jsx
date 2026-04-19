import { useState } from 'react';
import emailjs from '@emailjs/browser';
import useReveal from '../hooks/useReveal';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  carType: 'Sedan',
  preferredDate: '',
  preferredTime: '',
  notes: '',
};

function Contact() {
  const { ref, isVisible } = useReveal();
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    type: 'idle',
    message: '',
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const minDate = new Date().toISOString().split('T')[0];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: '' });

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'EmailJS is not configured yet. Add your EmailJS keys to the project before accepting appointments.',
      });
      return;
    }

    const templateParams = {
      full_name: formData.fullName,
      email_address: formData.email,
      phone_number: formData.phone,
      car_type: formData.carType,
      preferred_date: formData.preferredDate,
      preferred_time: formData.preferredTime,
      additional_notes: formData.notes || 'None provided',
      to_email: 'goyalbrosdetailing@gmail.com',
      message: [
        'New appointment request',
        `Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Car Type: ${formData.carType}`,
        `Preferred Date: ${formData.preferredDate}`,
        `Preferred Time: ${formData.preferredTime}`,
        `Additional Notes: ${formData.notes || 'None provided'}`,
      ].join('\n'),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      setFormData(initialForm);
      setStatus({
        type: 'success',
        message: "Thanks! We'll confirm your appointment shortly.",
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Something went wrong while sending your request. Please try again or call us directly.',
      });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`section reveal ${isVisible ? 'revealed' : ''}`}
    >
      <div className="section-inner contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">Contact &amp; booking</p>
          <h2>Request your appointment</h2>
          <p>
            Tell us a little about your vehicle and your preferred time. We'll
            follow up shortly to confirm the details.
          </p>

          <div className="contact-phone-card">
            <span className="contact-phone-label">Call or text</span>
            <a href="tel:4699969778" className="contact-phone-number">
              (469) 996-9778
            </a>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Car Type
            <select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              required
            >
              <option value="Sedan">Sedan</option>
              <option value="SUV/Truck">SUV/Truck</option>
              <option value="Van/XL">Van/XL</option>
            </select>
          </label>

          <div className="form-row">
            <label>
              Preferred Date
              <input
                type="date"
                name="preferredDate"
                min={minDate}
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Preferred Time
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Additional Notes
            <textarea
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Optional details about your vehicle or location"
            />
          </label>

          <button
            type="submit"
            className="button-primary button-submit"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? 'Sending...' : 'Request Appointment'}
          </button>

          {status.message ? (
            <p className={`form-message ${status.type}`}>{status.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
