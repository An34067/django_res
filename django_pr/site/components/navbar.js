class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .logo {
          color: var(--primary, #8B5A2B);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-link {
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nav-link:hover {
          color: var(--primary, #8B5A2B);
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary, #8B5A2B);
          transition: width 0.3s;
        }
        .nav-link:hover:after {
          width: 100%;
        }
        .active {
          color: var(--primary, #8B5A2B);
        }
        .active:after {
          width: 100%;
        }
        .cta-button {
          background: var(--primary, #8B5A2B);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          transition: all 0.3s;
        }
        .cta-button:hover {
          background: var(--primary-dark, #764B2A);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #4a5568;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">Gourmet Haven</a>
        <button class="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/menu.html" class="nav-link">Menu</a></li>
          <li><a href="/reservation.html" class="nav-link">Reservations</a></li>
          <li><a href="/account.html" class="nav-link">Account</a></li>
          <li><a href="/reservation.html" class="cta-button">Book a Table</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);