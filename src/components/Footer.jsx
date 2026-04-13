function Footer() {
  return (
    <footer className="mt-20 border-t border-sky-200 bg-gradient-to-r from-sky-100 via-blue-50 to-cyan-100 py-10">
      <div className="page-shell grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-2 text-base font-semibold">Thalachira Dental Care</h4>
          <p>Gentle, modern, and trusted family dentistry with a smile-first approach.</p>
        </div>
        <div>
          <h4 className="mb-2 text-base font-semibold">Quick Links</h4>
          <p>Home · About Us · Services · Contact Us</p>
        </div>
        <div>
          <h4 className="mb-2 text-base font-semibold">Visit Us</h4>
          <p>Open Mon-Sat · 9:00 AM - 7:00 PM</p>
          <p>Thalachira, Kerala (replace with exact address)</p>
        </div>
        <div>
          <h4 className="mb-2 text-base font-semibold">Contact</h4>
          <p>+91 XXXXX XXXXX (replace)</p>
          <p>hello@thalachiradentalcare.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
