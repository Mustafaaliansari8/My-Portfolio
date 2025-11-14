# EmailJS Setup Instructions

Follow these steps to receive form submissions in your email:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (imustafaali04@gmail.com)
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
You have a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template
5. Copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: xxxxxxxxxxxxxxx)

## Step 5: Update Contact.tsx
Open `components/Contact.tsx` and replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID
- `YOUR_PUBLIC_KEY` with your Public Key

Example:
```javascript
await emailjs.send(
  'service_abc123',      // Your Service ID
  'template_xyz789',     // Your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'abcdefghijklmno'     // Your Public Key
)
```

## Done!
Now when someone submits the contact form, you'll receive an email at imustafaali04@gmail.com with their name, email, and message.

## Testing
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox (and spam folder)
