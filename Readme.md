# Fresh Sweep

Fresh Sweep is a modern web application designed for cleaning service providers. It allows users to book appointments, call directly, and submit inquiries through a built-in form powered by EmailJS for seamless communication.

## Features

- **Appointment Booking**: Users can schedule cleaning appointments at their convenience.
- **Direct Call**: Quick access to contact the service provider via phone.
- **Inquiry Form**: Users can submit their questions or requests through a responsive form.
- **Email Integration**: Powered by EmailJS to handle form submissions and send automated emails.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Styling**: Engaging user interface with hover effects and transitions.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Form Handling**: [EmailJS](https://www.emailjs.com/)
- **Hosting**: [Vercel](https://vercel.com/) (or your preferred hosting provider)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zahooruddin-dev/Clean-Dream
   cd fresh-sweep
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Configuration

1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Add your EmailJS service ID, template ID, and public key to the project:
   ```javascript
   const emailjsConfig = {
       serviceId: "your_service_id",
       templateId: "your_template_id",
       publicKey: "your_public_key"
   };
   ```
   Place this configuration in the appropriate file (e.g., `emailConfig.js`).

## Usage

1. Navigate to the application in your browser.
2. Use the **Book Appointment** section to schedule services.
3. Click on the **Call Now** button to directly contact the service provider.
4. Fill out the **Inquiry Form** and submit to send a message.

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build` directory to your hosting provider (e.g., Vercel, Netlify).

## Screenshots

_Add screenshots of your application here for a visual overview._

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please reach out:
- **Email**: mzkhan886@gmail.com


---

Thank you for using Fresh Sweep!
