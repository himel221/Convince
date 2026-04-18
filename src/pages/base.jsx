import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './base.css';

const Base = ({ children }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Section - Sticky */}
      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo-container">
          <div className="logo-wrapper">
            <img 
              src={process.env.PUBLIC_URL + '/images/cg.png'}
              alt='Convince Group Logo'
              className='company-logo'
            />
            <div className="company-name-wrapper">
              <span className="company-name">Convince</span>
              <span className="company-suffix">Group</span>
            </div>
          </div>
        </Link>

        <div className='header-menu'>
          <Link to="/home">
            <ul className={isActive('/home') ? 'active' : ''}>Home</ul>
          </Link>
          <Link to="/about">
            <ul className={isActive('/about') ? 'active' : ''}>About Us</ul>
          </Link>
          <div 
            className="menu-item"
            onMouseEnter={() => handleMouseEnter('companies')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/companies">
              <ul className={isActive('/companies') ? 'active' : ''}>Companies</ul>
            </Link>
            {activeDropdown === 'companies' && (
              <div className="dropdown-menu">
                <Link to="/apparels" className="dropdown-item">Convince Apparels Ltd.</Link>
                <Link to="/zippers" className="dropdown-item">Convince Zipper & Accessories Ltd.</Link>
                <Link to="/dyeing" className="dropdown-item">Convince Dyeing Industries Ltd.</Link>
                <Link to="/computer" className="dropdown-item">Convince Computer Ltd.</Link>
              </div>
            )}
          </div>
          <div 
            className="menu-item"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/products">
              <ul className={isActive('/products') ? 'active' : ''}>Products</ul>
            </Link>
            {activeDropdown === 'products' && (
              <div className="dropdown-menu">
                <Link to="/products/apparel" className="dropdown-item">Apparel Products</Link>
                <Link to="/products/zipper" className="dropdown-item">Zipper & Accessories</Link>
                <Link to="/products/dyeing" className="dropdown-item">Dyeing Products</Link>
                <Link to="/products/computer" className="dropdown-item">Computer Products</Link>
              </div>
            )}
          </div>
          <Link to="/contact">
            <ul className={isActive('/contact') ? 'active' : ''}>Contact Us</ul>
          </Link>
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="header-spacer"></div>

      <div className='content'>
        {children}
      </div>

      {/* Footer Section - with Social Links */}
      <footer className='footer'>
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src={process.env.PUBLIC_URL + '/images/sweater1.jpg'}
                alt='Convince Group'
                className='footer-logo-img'
              />
              <h3>Convince Group</h3>
            </div>
            <p className="company-description">
              A diversified industrial conglomerate in Bangladesh, focused on ready-made garments (RMG) manufacturing, garments accessories and packaging, yarn dyeing and information and communications technology (ICT)
            </p>
            
            {/* Follow Us Section - Professional Design */}
            <div className="follow-us-section">
              <h4 className="follow-us-title">Follow Us</h4>
              <div className="social-links">
                <a href="https://facebook.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/convincegroup" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com/convincegroup" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="footer-section">
            <h4>Our Companies</h4>
            <ul className="footer-links">
              <li><Link to="/apparels">Convince Apparels</Link></li>
              <li><Link to="/zipper">Convince Zipper</Link></li>
              <li><Link to="/dyeing">Convince Dyeing</Link></li>
              <li><Link to="/computer">Convince Computer</Link></li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="footer-section">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="/products/apparels">Apparel Products</Link></li>
              <li><Link to="/products/zippers">Zippers & Accessories</Link></li>
              <li><Link to="/products/dyeing">Dyeing Services</Link></li>
              <li><Link to="/products/software">Software Solutions</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Plot 68-71, Block K, Road 4<br />Rupnagar C/A, Dhaka 1216, Bangladesh</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div className="contact-phone">
                  <span>+880 1234-567890</span>
                  <span>+880 0987-654321</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="contact-email">
                  <span>info@convincegroup.com</span>
                  <span>support@convincegroup.com</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
              <h4>Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>Copyright © {new Date().getFullYear()} Convince Group. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/terms">Terms of Use</Link>
              <span className="separator">|</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


export default Base;
