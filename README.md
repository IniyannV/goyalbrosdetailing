# Goyal Bros. Detailing

Single-page React website for a mobile interior car detailing business serving Coppell, TX.

## Run locally

```bash
npm install
npm run dev
```

## EmailJS setup

Create a `.env` file in the project root with:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Use these template variables in EmailJS:

- `full_name`
- `email_address`
- `phone_number`
- `car_type`
- `preferred_date`
- `preferred_time`
- `additional_notes`
- `to_email`
- `message`

Point the destination email to `goyalbrosdetailing@gmail.com`.

## Logo

Drop the final logo file into `public/logo.png` and it will be picked up automatically.
