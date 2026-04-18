import React, { useState, useEffect } from 'react';
import Base from '../base.jsx';
import './home.css';

const Home = () => {
  // Scroll Animation 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    const sections = document.querySelectorAll(
      '.about, .card-container .card, .chairman-container, .product-card-moving, .stats-card, .stats-section, .news-card'
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const images = [
    { url: process.env.PUBLIC_URL + '/images/sweater1.jpg', title: "CONVINCE APPARELS LTD" },
    { url: process.env.PUBLIC_URL + '/images/zipper.jpg', title: "CONVINCE ZIPPER & ACCESSORIES LTD" },
    { url: process.env.PUBLIC_URL + '/images/dyeing.jpg', title: "CONVINCE DYEING INDS. LTD" },
    { url: process.env.PUBLIC_URL + '/images/CCL.jpg', title: "CONVINCE COMPUTER LTD" },
  ];

  // Navigation handlers for company pages - Opens in new tab with full URL
  const navigateToCompany = (companyPath) => {
    // Get the current origin (domain) and construct the full URL
    const fullUrl = window.location.origin + companyPath;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  // Product Data with Categories
  const productCategories = [
    {
      name: "APPAREL PRODUCTS",
      images: [
        { url: process.env.PUBLIC_URL + '/images/vests.jpg', name: 'VESTS' },
        { url: process.env.PUBLIC_URL + '/images/pullovers.jpg', name: 'PULLOVERS' },
        { url: process.env.PUBLIC_URL + '/images/sweater.jpg', name: 'ORIENTED SWEATERS' },
        { url: process.env.PUBLIC_URL + '/images/ponchos.jpg', name: 'PONCHOS' },
      ]
    },
    {
      name: "ZIPPER & ACCESSORIES PRODUCTS",
      images: [
        { url: process.env.PUBLIC_URL + '/images/nylon.jpg', name: 'NYLON' },
        { url: process.env.PUBLIC_URL + '/images/metal zippers.jpg', name: 'METAL ZIPPERS' },
        { url: process.env.PUBLIC_URL + '/images/vislon.jpg', name: 'VISLON' },
        { url: process.env.PUBLIC_URL + '/images/nylon-fabrics.jpg', name: 'NYLON FABRICS' },
      ]
    },
    {
      name: "DYEING PRODUCTS",
      images: [
        { url: process.env.PUBLIC_URL + '/images/DYEING!.jpg', name: 'FABRIC DYEING' },
        { url: process.env.PUBLIC_URL + '/images/yarn.jpg', name: 'YARN DYEING' },
        { url: process.env.PUBLIC_URL + '/images/germents.jpg', name: 'GARMENT DYEING' },
        { url: process.env.PUBLIC_URL + '/images/Dyeing1.jpg', name: 'DYEING FABRIC' },
      ]
    },
    {
      name: "COMPUTER PRODUCTS",
      images: [
        { url: process.env.PUBLIC_URL + '/images/ACM.jpg', name: 'ACCESS CONTROL MODULE' },
        { url: process.env.PUBLIC_URL + '/images/HRM.jpg', name: 'HR MANAGEMENT MODULE' },
        { url: process.env.PUBLIC_URL + '/images/PAYROLL.jpg', name: 'PAYROLL MANAGEMENT MODULE' },
        { url: process.env.PUBLIC_URL + '/images/GRATUITY.jpg', name: 'GRATUITY MODULE' },
      ]
    }
  ];

  // News & Events Data
  const newsEvents = [
    {
      id: 1,
      title: "BAYLA Ceremony",
      image: process.env.PUBLIC_URL + '/images/growth.jpg',
      link: "/news/annual-awards-2025",
      
    },
    {
      id: 2,
      title: "Interview on News24",
      image: process.env.PUBLIC_URL + '/images/news24.jpg',
      link: "/news/new-dyeing-facility",
      
    },
    {
      id: 3,
      title: "BGAPMEA Meeting",
      image: process.env.PUBLIC_URL + '/images/meeting.jpg',
      link: "/news/textile-expo-2025",
      
    },
    {
      id: 4,
      title: "Garmentech 2020",
      image: process.env.PUBLIC_URL + '/images/tech.jpg',
      link: "/news/sustainability-initiative",
      
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('exit');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setAnimationClass('enter');
      }, 500);
      
      setTimeout(() => {
        setAnimationClass('');
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setAnimationClass('exit');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass('enter');
    }, 500);
    
    setTimeout(() => {
      setAnimationClass('');
    }, 1000);
  };

  const prevSlide = () => {
    setAnimationClass('exit');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setAnimationClass('enter');
    }, 500);
    
    setTimeout(() => {
      setAnimationClass('');
    }, 1000);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    
    setAnimationClass('exit');
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass('enter');
    }, 500);
    
    setTimeout(() => {
      setAnimationClass('');
    }, 1000);
  };

  // News click handler - opens in new tab
  const handleNewsClick = (link) => {
    const fullUrl = window.location.origin + link;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  // all product for moving animation
  const getAllProducts = () => {
    let allProducts = [];
    productCategories.forEach(category => {
      category.images.forEach(product => {
        allProducts.push({
          ...product,
          category: category.name
        });
      });
    });
    return allProducts;
  };

  const allProducts = getAllProducts();

  return (
    <Base>
      {/* Hero Slider Section */}
      <div className='content'>
        <div className="slider-container">
          <div className="slider-wrapper">
            {images.map((item, index) => (
              <div 
                key={index} 
                className={`slide ${index === currentIndex ? 'active' : ''} 
                  ${index === currentIndex ? animationClass : ''}`}
              >
                <div className="image-wrapper">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="slide-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="slide-content">
                  <h2 className="slide-title">{item.title}</h2>
                </div>
              </div>
            ))}
            
            <button className="slider-button prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="slider-button next" onClick={nextSlide}>
              &#10095;
            </button>

            <div className="slider-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Companies Section with Clickable Cards - Opens in New Tab */}
      <section className="company-cards-section">
        <h2 className="about">Our Companies</h2>
        <div className="card-container">
          <div 
            className="card clickable-card" 
            onClick={() => navigateToCompany('/apparels')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && navigateToCompany('/apparels')}
          >
          <img  src={process.env.PUBLIC_URL + '/images/sweater1.jpg'} alt="Apparel Ltd" style={{height:150, width:250}}
/>
            <h3>CONVINCE APPARELS LIMITED</h3>
            <p>Leading manufacturer of high-quality apparel and fashion garments for the global fashion industry.</p>
            <div className="card-footer">
              <span className="learn-more">Learn More →</span>
            </div>
          </div>
          
          <div 
            className="card clickable-card" 
            onClick={() => navigateToCompany('/zippers')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && navigateToCompany('zippers')}
          >
            <img src={process.env.PUBLIC_URL + '/images/zipper.jpg'} alt="Zipper Ltd" style={{height:150, width:250}}/>
            <h3>CONVINCE ZIPPER & ACCESSORIES LIMITED</h3>
            <p>Specializing in innovative zipper solutions for various applications, including apparel and luggage.</p>
            <div className="card-footer">
              <span className="learn-more">Learn More →</span>
            </div>
          </div>
          
          <div 
            className="card clickable-card" 
            onClick={() => navigateToCompany('/dyeing')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && navigateToCompany('dyeing')}
          >
            <img src={process.env.PUBLIC_URL + '/images/dyeing.jpg'} alt="Dyeing Ltd" style={{height:150, width:250}}/>
            <h3>CONVINCE DYEING INDS. LIMITED</h3>
            <p>Providing high-quality dyeing services for textiles, ensuring vibrant colors and excellent fabric care.</p>
            <div className="card-footer">
              <span className="learn-more">Learn More →</span>
            </div>
          </div>
          
          <div 
            className="card clickable-card" 
            onClick={() => navigateToCompany('/computer')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && navigateToCompany('computer')}
          >
            <img src={process.env.PUBLIC_URL + '/images/CCL.jpg'} alt="Computer Ltd" style={{height:150, width:250}}/>
            <h3>CONVINCE COMPUTER LIMITED</h3>
            <p>Offering a wide range of computer products and services, including hardware, software, and IT solutions.</p>
            <div className="card-footer">
              <span className="learn-more">Learn More →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Moving Products Section - Right to Left */}
      <section className="products-section">
        <h2 className="about">Our Products</h2>
        <div className="product-slider-container">
          <div className="product-grid-moving">
            {/* প্রথম সেট - সব প্রোডাক্ট */}
            {allProducts.map((product, index) => (
              <div key={index} className="product-card-moving">
                <div className="product-image-wrapper">
                  <img 
                    src={product.url} 
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                </div>
              </div>
            ))}
            
            {/* ডুপ্লিকেট সেট - সিমলেস লুপের জন্য */}
            {allProducts.map((product, index) => (
              <div key={`duplicate-${index}`} className="product-card-moving">
                <div className="product-image-wrapper">
                  <img 
                    src={product.url} 
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AT a Glance */}
      <h2 className="about">At A Glance</h2>
      <div className="stats-gridd">
        <div className="stats-card">
          <div className="stats-icon">🏆</div>
          <div className="stats-number">35+</div>
          <div className="stats-label">YEARS OF EXCELLENCE</div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">🏭</div>
          <div className="stats-number">4</div>
          <div className="stats-label">STRATEGIC UNITS</div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">🌍</div>
          <div className="stats-number">25+</div>
          <div className="stats-label">EXPORT COUNTRIES</div>
        </div>
        
        <div className="stats-card">
          <div className="stats-icon">👥</div>
          <div className="stats-number">8000+</div>
          <div className="stats-label">Skilled Employees</div>
        </div>
      </div>

      {/* Chairman Message Section - Left-Right Layout */}
      <h2 className="about">Message from Managing Director</h2>
      <div className="chairman-container">
        {/* Left Side - Chairman Card */}
        <div className="chairman-card">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B2Eieb1y-98NDXDRNLSfFicgTSO24lCtag&s" 
            alt="Chairman" 
            className="chairman-image"
          />
          <h3>Rafez Alam Chowdhury</h3>
          <div className="chairman-title">Managing Director</div>
        </div>

        {/* Right Side - Message Card */}
        <div className="chairman-message-card">
          <div className="quote-icon">"</div>
          <div className="message-content">
            <p className="message-text">
              As we navigate through an era of unprecedented technological advancement and
               global change, our commitment to excellence remains unwavering. At Convince
                Group, we believe that true success comes from creating lasting value for
                 our clients, our people, and the communities we serve.
            </p>
            <p className="message-text">
             Our journey over the past decade has been remarkable, marked by continuous growth,
              innovation, and the trust of our valued clients. I am immensely proud of our team's
               dedication and the impact we've made together. As we look to the future, we remain 
               committed to pushing boundaries, embracing challenges, and turning possibilities into
                realities.
            </p>
            <div className="message-footer">
              <div className="signature">RAFEZ ALAM CHOWDHURY</div>
              <div className="signature-title">Managing Director, Convince Group</div>
            </div>
          </div>
        </div>
      </div>

      {/* News & Events Section - Moving Right to Left */}
       <h2 className="about">News & Events</h2>
      
      <div className="news-section">
        <div className="news-slider-container">
          <div className="news-grid-moving">
            {/* First set - all news items */}
            {newsEvents.map((news) => (
              <div 
                key={news.id} 
                className="news-card"
                onClick={() => handleNewsClick(news.link)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleNewsClick(news.link)}
              >
                <div className="news-image-wrapper">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="news-image"
                  />
                  <div className="news-overlay">
                    <span className="news-read-more">Read More →</span>
                  </div>
                </div>
                <div className="news-info">
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-date">{news.date}</p>
                </div>
              </div>
            ))}
            
            {/* Duplicate set - for seamless loop */}
            {newsEvents.map((news) => (
              <div 
                key={`duplicate-${news.id}`} 
                className="news-card"
                onClick={() => handleNewsClick(news.link)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleNewsClick(news.link)}
              >
                <div className="news-image-wrapper">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="news-image"
                  />
                  <div className="news-overlay">
                    <span className="news-read-more">Read More →</span>
                  </div>
                </div>
                <div className="news-info">
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-date">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;