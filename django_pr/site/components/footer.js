class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a202c;
          color: white;
          padding: 4rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
        .footer-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .footer-section h3:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: var(--primary, #8B5A2B);
        }
        .footer-section p {
          color: #a0aec0;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .contact-info {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .contact-info i {
          margin-right: 1rem;
          color: var(--primary, #8B5A2B);
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s;
        }
        .social-links a:hover {
          background: var(--primary, #8B5A2B);
          transform: translateY(-3px);
        }
        .quick-links ul {
          list-style: none;
          padding: 0;
        }
        .quick-links li {
          margin-bottom: 0.75rem;
        }
        .quick-links a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.3s;
        }
        .quick-links a:hover {
          color: var(--primary, #8B5A2B);
        }
        .newsletter input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: none;
          border-radius: 0.25rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        .newsletter input::placeholder {
          color: #a0aec0;
        }
        .newsletter button {
          background: var(--primary, #8B5A2B);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .newsletter button:hover {
          background: var(--primary-dark, #764B2A);
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #a0aec0;
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section about">
            <h3>About Us</h3>
            <p>Gourmet Haven offers an unforgettable dining experience with exquisite cuisine, elegant ambiance, and impeccable service.</p>
            <div class="contact-info">
              <i data-feather="phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="contact-info">
              <i data-feather="mail"></i>
              <span>reservations@gourmethaven.com</span>
            </div>
            <div class="contact-info">
              <i data-feather="map-pin"></i>
              <span>123 Gourmet Street, Foodville 10001</span>
            </div>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
            </div>
          </div>
          <div class="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu.html">Menu</a></li>
              <li><a href="/reservation.html">Reservations</a></li>
              <li><a href="/account.html">My Account</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="footer-section hours">
            <h3>Opening Hours</h3>
            <p><strong>Monday - Friday:</strong> 11:00 AM - 11:00 PM</p>
            <p><strong>Saturday - Sunday:</strong> 10:00 AM - 12:00 AM</p>
            <p>Kitchen closes one hour before closing time</p>
          </div>
          <div class="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates, special offers, and culinary inspiration.</p>
            <input type="email" placeholder="Your Email Address">
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Gourmet Haven. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);