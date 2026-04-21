// apparels-products.jsx - Apparel Products Showcase Component
import React, { useEffect, useState } from 'react';
import Base from './base1.jsx';
import './aproducts.css';

const ApparelsProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
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
      '.apparels-products-container .apparels-section-heading, .apparels-products-container .apparels-card, .apparels-products-container .apparels-category-card, .apparels-products-container .capability-card'
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

  // Apparel Product Data with Categories
  const productCategories = [
    {
      name: "Sweaters",
      description: "Premium quality sweaters for all seasons",
      icon: "🧥",
      bgColor: "#f0f7ff",
      products: [
        { 
          id: 1,
          name: 'Classic Crew Neck', 
          code: 'SW-001',
          image: process.env.PUBLIC_URL + '/images/crewneck.jpg', 
          description: 'Timeless crew neck sweater made from premium cotton blend for everyday comfort.',
          specifications: ['Fabric: Cotton-Polyester Blend', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        },
        { 
          id: 2,
          name: 'V-Neck Pullover', 
          code: 'SW-002',
          image: process.env.PUBLIC_URL + '/images/vneck.jpg', 
          description: 'Elegant V-neck pullover perfect for casual and semi-formal occasions.',
          specifications: ['Fabric: Merino Wool Blend', 'Sizes: S-XXL', 'Colors: 8+ options', 'Weight: 260 GSM']
        },
        { 
          id: 3,
          name: 'Cardigan', 
          code: 'SW-003',
          image: process.env.PUBLIC_URL + '/images/cardigan.jpg', 
          description: 'Versatile cardigan with button closure, ideal for layering.',
          specifications: ['Fabric: Acrylic-Wool Blend', 'Sizes: S-XXL', 'Colors: 12+ options', 'Features: Button closure']
        }
      ]
    },
    {
      name: "Vests",
      description: "Stylish and functional vests",
      icon: "👕",
      bgColor: "#f0fff4",
      products: [
        { 
          id: 4,
          name: 'Waistcoat Vest', 
          code: 'VS-004',
          image: process.env.PUBLIC_URL + '/images/Waistcoat.jpg', 
          description: 'Lightweight waistcoat vest with excellent insulation for cold weather.',
          specifications: ['Filling: Polyester Fiber', 'Sizes: S-XXL', 'Colors: 6+ options', 'Features: Zipper closure']
        },
        { 
          id: 5,
          name: 'Knit Vests', 
          code: 'VS-005',
          image: process.env.PUBLIC_URL + '/images/KnitVests.jpg', 
          description: 'Classic Knit Vests with diamond pattern for a sophisticated look.',
          specifications: ['Fabric: Nylon/Polyester', 'Sizes: S-XXL', 'Colors: 5+ options', 'Features: Snap buttons']
        }
      ]
    },
    {
      name: "Sweaters",
      description: "Comfortable everyday sweatshirts",
      icon: "👚",
      bgColor: "#fff8f0",
      products: [
        { 
          id: 6,
          name: 'Button sweater', 
          code: 'SS-006',
          image: process.env.PUBLIC_URL + '/images/Buttonsweater.jpg', 
          description: 'Classic sweater with adjustable button.',
          specifications: ['Fabric: 80% Cotton, 20% Polyester', 'Sizes: S-XXL', 'Colors: 12+ options', 'Weight: 300 GSM']
        },
        { 
          id: 7,
          name: 'Fair Isle sweater', 
          code: 'SS-007',
          image: process.env.PUBLIC_URL + '/images/Fairsweater.jpg', 
          description: 'Soft and comfortable fair isle sweater for daily wear.',
          specifications: ['Fabric: 100% Cotton', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        },
    { 
          id: 8,
          name: 'Versatile Sweater', 
          code: 'SS-008',
          image: process.env.PUBLIC_URL + '/images/VersatileSweater.jpg', 
          description: 'Soft and comfortable versatile sweater for daily wear.',
          specifications: ['Fabric: 100% Cotton', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        },

        { 
          id: 9,
          name: 'Striped Pattern Sweater', 
          code: 'SS-009',
          image: process.env.PUBLIC_URL + '/images/StripedSweater.jpg', 
          description: 'Soft, comfortable and easy to wear for any occasion.',
          specifications: ['Fabric: 100% Cotton', 'Sizes: S-XXL', 'Colors: 10+ options', 'Weight: 280 GSM']
        }
      ]
    },
    {
      name: "Knitwear",
      description: "Fine knitwear collection",
      icon: "🧶",
      bgColor: "#f0f0ff",
      products: [
        { 
          id: 10,
          name: 'Fine Gauge Knit', 
          code: 'KW-010',
          image: process.env.PUBLIC_URL + '/images/fineknit.jpg', 
          description: 'Elegant fine gauge knit sweater with intricate pattern details.',
          specifications: ['Fabric: 100% Merino Wool', 'Sizes: S-XXL', 'Colors: 10+ options', 'Gauge: 12gg']
        },
        { 
          id: 11,
          name: 'Chunky Knit', 
          code: 'KW-011',
          image: process.env.PUBLIC_URL + '/images/chunkyknit.jpg', 
          description: 'Heavyweight chunky knit sweater for maximum warmth and style.',
          specifications: ['Fabric: Acrylic Blend', 'Sizes: S-XXL', 'Colors: 8+ options', 'Gauge: 3gg']
        },
        { 
          id: 12,
          name: 'Cable Knit', 
          code: 'KW-012',
          image: process.env.PUBLIC_URL + '/images/cableknit.jpg', 
          description: 'Classic cable knit sweater with timeless design elements.',
          specifications: ['Fabric: Cotton-Acrylic Blend', 'Sizes: S-XXL', 'Colors: 6+ options', 'Pattern: Cable design']
        }
      ]
    }
  ];

  // Get all products for search
  const getAllProducts = () => {
    let allProducts = [];
    productCategories.forEach(category => {
      category.products.forEach(product => {
        allProducts.push({
          ...product,
          categoryName: category.name,
          categoryIcon: category.icon
        });
      });
    });
    return allProducts;
  };

  // Filter products based on category and search
  const getFilteredProducts = () => {
    let filtered = getAllProducts();
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.categoryName === activeCategory);
    }
    
    if (searchTerm.trim()) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 350, height = 280) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Inter, sans-serif' font-size='16' fill='%2364748b' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  // Hero Slider Images for Apparel Products page
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/sweater.jpg', title: 'Premium Knitwear Collection', subtitle: 'Crafted with excellence for global fashion brands' },
    { url: process.env.PUBLIC_URL + '/images/vests1.jpg', title: 'Quality Vests & Outerwear', subtitle: 'Superior craftsmanship for every season' },
    { url: process.env.PUBLIC_URL + '/images/sweater1.jpg', title: 'Custom Manufacturing', subtitle: 'Tailored solutions for your unique requirements' },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Base>
      <div className="apparels-products-container">
        {/* Hero Slider Section */}
        <div className='apparels-hero-wrapper'>
          <div className="apparels-hero-slider-section">
            <div className="apparels-slider-container apparels-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`apparels-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="apparels-slide-overlay"></div>
                  <div className="apparels-slide-caption">
                    <h1 className="apparels-hero-title">{image.title}</h1>
                    <p className="apparels-hero-subtitle">{image.subtitle}</p>
                  </div>
                </div>
              ))}
              
              <button className="apparels-slider-arrow apparels-prev" onClick={prevSlide}>❮</button>
              <button className="apparels-slider-arrow apparels-next" onClick={nextSlide}>❯</button>
              
              <div className="apparels-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`apparels-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Header */}
        <div className="apparels-header-section">
          <h1 className="apparels-main-title">Our Apparel Collection</h1>
          <p className="apparels-main-subtitle">
            Discover our comprehensive range of high-quality knitwear, sweaters, vests, and garment accessories
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="apparels-filter-section">
          <div className="apparels-search-bar">
            <input 
              type="text" 
              placeholder="Search products by name, code, or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="apparels-search-input"
            />
            <span className="apparels-search-icon">🔍</span>
          </div>
          
          <div className="apparels-category-filters">
            <button 
              className={`apparels-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Products
            </button>
            {productCategories.map((category, index) => (
              <button 
                key={index}
                className={`apparels-filter-btn ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="apparels-grid-section">
          {filteredProducts.length > 0 ? (
            <div className="apparels-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="apparels-card">
                  <div className="apparels-card-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 350, 280);
                      }}
                    />
                    <span className="apparels-card-code">{product.code}</span>
                    <div className="apparels-card-category-badge">
                      {product.categoryIcon} {product.categoryName}
                    </div>
                  </div>
                  <div className="apparels-card-content">
                    <h3 className="apparels-card-title">{product.name}</h3>
                    <p className="apparels-card-description">{product.description}</p>
                    
                    <div className="apparels-specs">
                      <h4>Specifications:</h4>
                      <ul>
                        {product.specifications.map((spec, idx) => (
                          <li key={idx}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="apparels-inquiry-btn">Request Quote</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="apparels-no-results">
              <p>No products found matching your search criteria.</p>
              <button onClick={() => {setActiveCategory('all'); setSearchTerm('');}}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Manufacturing Capabilities */}
        <div className="apparels-capabilities-section">
          <div className="capabilities-container">
            <h2 className="apparels-section-heading">Manufacturing Capabilities</h2>
            <div className="apparels-capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon-wrapper">
                  <div className="capability-icon">🏭</div>
                </div>
                <h3>State-of-the-art Facility</h3>
                <p>Modern manufacturing unit with advanced machinery and quality control systems</p>
                <div className="capability-features">
                  <span>✓ 50,000+ sq ft</span>
                  <span>✓ 200+ knitting machines</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-icon-wrapper">
                  <div className="capability-icon">🔬</div>
                </div>
                <h3>Quality Testing Lab</h3>
                <p>In-house testing facility ensuring all products meet international standards</p>
                <div className="capability-features">
                  <span>✓ ISO Certified</span>
                  <span>✓ 100+ tests daily</span>
                </div>
              </div>
              <div className="capability-card">
                <div className="capability-icon-wrapper">
                  <div className="capability-icon">🎨</div>
                </div>
                <h3>Custom Solutions</h3>
                <p>Custom colors, sizes, and designs to meet your unique requirements</p>
                <div className="capability-features">
                  <span>✓ Any color</span>
                  <span>✓ Any size</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Capacity Highlight */}
        <div className="apparels-capacity-highlight">
          <div className="capacity-highlight-container">
            <h2>Production Excellence</h2>
            <div className="capacity-stats">
              <div className="capacity-stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Knitting Machines</span>
              </div>
              <div className="capacity-stat">
                <span className="stat-number">4,400+</span>
                <span className="stat-label">Pieces/Day</span>
              </div>
              <div className="capacity-stat">
                <span className="stat-number">132K+</span>
                <span className="stat-label">Pieces/Month</span>
              </div>
              <div className="capacity-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Global Partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="apparels-cta-section">
          <h2>Ready to Source Premium Apparel?</h2>
          <p>Contact our sales team for quotes, samples, and technical specifications</p>
          <button className="apparels-cta-btn">Contact Us Today</button>
        </div>
      </div>
    </Base>
  );
};

export default ApparelsProducts;