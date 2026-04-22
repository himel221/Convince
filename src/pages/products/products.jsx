// Products.jsx - Main Products Showcase Component with Navigation
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Base from '../base.jsx';
import './products.css';

const Products = () => {
  const navigate = useNavigate();
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
      '.products-container .products-section-heading, ' +
      '.products-container .products-category-card, ' +
      '.products-container .products-item-card, ' +
      '.products-container .products-stats-card'
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

  // Navigation handlers
  const handleCategoryClick = (categoryId) => {
    switch(categoryId) {
      case 'apparels':
        navigate('/aproducts');
        break;
      case 'zipper':
        navigate('/zproducts');
        break;
      case 'dyeing':
        navigate('/dproducts');
        break;
      case 'software':
        navigate('/sproducts');
        break;
      default:
        break;
    }
    window.scrollTo(0, 0);
  };

  // Handle Request Quote - Opens Gmail compose window directly
  const handleRequestQuote = (productName, productCode, categoryName) => {
    const companyEmail = "cal@convincebd.biz";
    const subject = `Quote Request: ${productName} (${productCode})`;
    const body = `Dear Convince Group Team,

I would like to request a quote for the following product:

Product Name: ${productName}
Product Code: ${productCode}
Category: ${categoryName}

Please provide me with the following details:
- Price per unit
- Minimum Order Quantity (MOQ)
- Available colors/sizes
- Delivery timeline
- Shipping terms

Looking forward to your response.

Best regards,
[Your Name]
[Your Company Name]
[Your Contact Number]`;

    // Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Handle general quote request (for CTA buttons)
  const handleGeneralQuoteRequest = () => {
    const companyEmail = "cal@convincebd.biz";
    const subject = "Quote Request - Convince Group Products";
    const body = `Dear Convince Group Team,

I am interested in your products and would like to request a quote.

Please contact me with more information about:
- Product catalog
- Pricing
- Minimum Order Quantities
- Delivery terms

Looking forward to your response.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Handle sales inquiry (for CTA buttons)
  const handleSalesInquiry = () => {
    const companyEmail = "cal@convincebd.biz";
    const subject = "Sales Inquiry - Convince Group";
    const body = `Dear Sales Team,

I would like to discuss potential business opportunities with Convince Group.

Please contact me to discuss:
- Product requirements
- Custom manufacturing options
- Partnership opportunities

I look forward to hearing from you.

Best regards,
[Your Name]
[Your Company]
[Your Phone Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  // Product Data
  const productCategories = [
    {
      id: 'apparels',
      name: 'Apparels Products',
      icon: '👕',
      color: '#2563eb',
      bgColor: '#eff6ff',
      description: 'Premium quality knitwear, sweaters, and vests for global fashion brands',
      navigateTo: '/aproducts',
      products: [
        { id: 1, name: 'Sweaters', code: 'AP-SW-01', description: 'Premium quality sweaters in various styles - crew neck, V-neck, cardigan, and more', features: ['Cotton-Polyester Blend', 'S-XXL sizes', '10+ colors', '280 GSM'] },
        { id: 2, name: 'Vests', code: 'AP-VS-02', description: 'Stylish and functional vests including puffer vests and quilted vests', features: ['Polyester Fiber filling', 'S-XXL sizes', '6+ colors', 'Zipper/Snap closure'] },
        { id: 3, name: 'Knitwears', code: 'AP-KW-03', description: 'Fine knitwear collection including fine gauge, chunky knit, and cable knit', features: ['Merino Wool/Acrylic', 'S-XXL sizes', '8+ colors', '3gg to 12gg'] },
        { id: 4, name: 'Sweatshirts', code: 'AP-SS-04', description: 'Comfortable everyday sweatshirts - hooded and crewneck styles', features: ['80% Cotton, 20% Polyester', 'S-XXL sizes', '12+ colors', '300 GSM'] }
      ]
    },
    {
      id: 'zipper',
      name: 'Zipper Products',
      icon: '🔗',
      color: '#059669',
      bgColor: '#ecfdf5',
      description: 'Complete range of high-quality zippers and accessories for all garment types',
      navigateTo: '/zproducts',
      products: [
        { id: 6, name: 'Vislon Zipper', code: 'ZP-VZ-01', description: 'Heavy-duty plastic zippers perfect for outdoor wear, luggage, and industrial applications', features: ['Size: #5 to #15', '20+ standard colors', 'Customizable length', 'Engineered Plastic'] },
        { id: 7, name: 'Nylon Zipper', code: 'ZP-NZ-02', description: 'Smooth and durable nylon zippers ideal for lightweight garments, jackets, and bags', features: ['Size: #3 to #10', 'All colors available', 'Customizable length', 'Premium Nylon'] },
        { id: 8, name: 'Metal Zipper', code: 'ZP-MZ-03', description: 'Premium metal zippers for denim, leather goods, and high-end fashion items', features: ['Size: #3 to #10', 'Brass/Copper/Nickel finishes', 'Customizable length', 'Zinc/Copper Alloy'] },
        { id: 9, name: 'Elastic', code: 'ZP-EL-04', description: 'High-quality elastic bands for waistbands, cuffs, and sportswear applications', features: ['Width: 1/4" to 4"', 'White/Black/Beige', '100 yards/roll', 'Natural Rubber/Polyester'] },
        { id: 10, name: 'Gum Tape', code: 'ZP-GT-05', description: 'Adhesive gum tape for temporary bonding and garment assembly', features: ['Width: 1/2" to 2"', '50 yards/roll', 'Beige color', 'Strong temporary bond'] },
        { id: 11, name: 'Twill Tape', code: 'ZP-TT-06', description: 'Durable twill tape for reinforcement, drawstrings, and trim applications', features: ['Width: 1/4" to 1"', 'Multiple colors', '50 yards/roll', 'Cotton/Polyester blend'] },
        { id: 12, name: 'Draw String', code: 'ZP-DS-07', description: 'Round and flat drawstrings for hoodies, bags, and waistbands', features: ['Diameter: 2mm to 6mm', 'All colors available', 'Customizable length', 'Polyester/Cotton'] },
        { id: 13, name: 'Draw Cord', code: 'ZP-DC-08', description: 'Heavy-duty draw cords for outdoor gear, backpacks, and sportswear', features: ['Diameter: 3mm to 8mm', 'Standard colors', 'Customizable length', 'Nylon/Polyester'] }
      ]
    },
    {
      id: 'dyeing',
      name: 'Dyeing Products',
      icon: '🎨',
      color: '#d97706',
      bgColor: '#fffbeb',
      description: 'Professional dyeing solutions for yarn, fabric, and garments',
      navigateTo: '/dproducts',
      products: [
        { id: 14, name: 'Yarn Dyeing', code: 'DY-YD-01', description: 'Premium yarn dyeing services for all types of textile yarns', features: ['All fiber types', '100+ colors', 'Eco-friendly dyes', 'Color fastness guaranteed'] },
        { id: 15, name: 'Garments Dyeing', code: 'DY-GD-02', description: 'Complete garment dyeing solutions for finished apparel', features: ['All garment types', 'Custom colors', 'Soft hand feel', 'Wash-resistant'] },
        { id: 16, name: 'Reactive Dyeing', code: 'DY-RD-03', description: 'High-quality reactive dyeing for cotton and cellulosic fibers', features: ['Excellent color fastness', 'Bright shades', 'Eco-friendly process', 'Cotton/Linen/Viscose'] },
        { id: 17, name: 'Disperse Dyeing', code: 'DY-DD-04', description: 'Professional disperse dyeing for polyester and synthetic fabrics', features: ['High temperature process', 'Excellent sublimation', 'Synthetic fabrics', 'Wide color range'] },
        { id: 18, name: 'Fabric Dyeing', code: 'DY-FD-05', description: 'Bulk fabric dyeing services for woven and knit fabrics', features: ['All fabric types', 'Consistent quality', 'Large batch capacity', 'Quick turnaround'] },
        { id: 19, name: 'Pigment Dyeing', code: 'DY-PD-06', description: 'Versatile pigment dyeing for unique color effects and finishes', features: ['All fiber types', 'Unique color effects', 'Soft finish', 'Cost-effective'] }
      ]
    },
    {
      id: 'software',
      name: 'Software Products',
      icon: '💻',
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      description: 'Innovative software solutions for business management and operations',
      navigateTo: '/sproducts',
      products: [
        { id: 20, name: 'HR Payroll', code: 'SW-HR-01', description: 'Complete HR management and payroll processing system', features: ['Employee management', 'Salary processing', 'Tax calculation', 'Leave management', 'Attendance tracking'] },
        { id: 21, name: 'Diagnostic Software', code: 'SW-DS-02', description: 'Comprehensive diagnostic lab management software', features: ['Patient management', 'Test tracking', 'Report generation', 'Billing system', 'Inventory control'] },
        { id: 22, name: 'RTGSA', code: 'SW-RT-03', description: 'Real-time garment sourcing and allocation system', features: ['Order management', 'Supplier allocation', 'Real-time tracking', 'Report analytics'] },
        { id: 23, name: 'Distributor Finance', code: 'SW-DF-04', description: 'Distributor financial management and loan tracking system', features: ['Loan management', 'Collection tracking', 'Commission calculation', 'Financial reporting'] },
        { id: 24, name: 'ERP System', code: 'SW-ER-05', description: 'Complete Enterprise Resource Planning solution', features: ['Inventory management', 'Accounting', 'Sales & Purchase', 'CRM', 'Production planning'] },
        { id: 25, name: 'Hospital Management', code: 'SW-HM-06', description: 'Comprehensive hospital management information system', features: ['Patient registration', 'Appointment scheduling', 'Pharmacy management', 'Billing', 'Electronic medical records'] }
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
          categoryIcon: category.icon,
          categoryColor: category.color,
          categoryId: category.id
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

  const displayedProducts = getFilteredProducts();

  return (
    <Base>
      <div className="products-container">
        {/* Hero Section */}
        <div className="products-hero-section">
          <div className="products-hero-overlay"></div>
          <div className="products-hero-content">
            <h1 className="products-hero-title">Our Products</h1>
            <p className="products-hero-subtitle">Comprehensive range of quality products and solutions</p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="products-filter-section">
          <div className="products-search-bar">
            <input 
              type="text" 
              placeholder="Search products by name, code, or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="products-search-input"
            />
            <span className="products-search-icon">🔍</span>
          </div>
          
          <div className="products-category-filters">
            <button 
              className={`products-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button 
                key={category.id}
                className={`products-filter-btn ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
                style={{ '--category-color': category.color }}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Overview Cards - Clickable to navigate */}
        <div className="products-categories-section">
          <div className="products-categories-grid">
            {productCategories.map((category) => (
              <div 
                key={category.id} 
                className="products-category-card"
                onClick={() => handleCategoryClick(category.id)}
                style={{ background: category.bgColor, borderColor: category.color, cursor: 'pointer' }}
              >
                <div className="products-category-icon" style={{ background: category.color }}>
                  {category.icon}
                </div>
                <h3 className="products-category-name">{category.name}</h3>
                <p className="products-category-description">{category.description}</p>
                <div className="products-category-stats">
                  <span className="products-category-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid Section */}
        <div className="products-grid-section">
          <h2 className="products-section-heading">
            {activeCategory === 'all' ? 'All Products' : activeCategory}
          </h2>
          <p className="products-grid-subtitle">
            {displayedProducts.length} products found
          </p>
          
          {displayedProducts.length > 0 ? (
            <div className="products-grid">
              {displayedProducts.map((product, index) => (
                <div key={product.id} className="products-item-card" style={{ '--animation-delay': `${index * 0.05}s` }}>
                  <div className="products-item-header">
                    <div className="products-item-icon" style={{ background: product.categoryColor }}>
                      {product.categoryIcon}
                    </div>
                    <span className="products-item-code">{product.code}</span>
                  </div>
                  <div className="products-item-content">
                    <h3 className="products-item-name">{product.name}</h3>
                    <p className="products-item-description">{product.description}</p>
                    <div className="products-item-features">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <span key={idx} className="products-feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                  <div className="products-item-footer">
                    <span 
                      className="products-category-badge" 
                      style={{ background: product.categoryColor + '20', color: product.categoryColor, cursor: 'pointer' }}
                      onClick={() => handleCategoryClick(product.categoryId)}
                    >
                      {product.categoryIcon} {product.categoryName}
                    </span>
                    <button 
                      className="products-inquiry-btn"
                      onClick={() => handleRequestQuote(product.name, product.code, product.categoryName)}
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="products-no-results">
              <p>No products found matching your search criteria.</p>
              <button onClick={() => {setActiveCategory('all'); setSearchTerm('');}}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Statistics Section */}
        <div className="products-stats-section">
          <div className="products-stats-grid">
            <div className="products-stats-card">
              <div className="products-stats-icon">🏭</div>
              <div className="products-stats-number">4</div>
              <div className="products-stats-label">Product Categories</div>
            </div>
            <div className="products-stats-card">
              <div className="products-stats-icon">📦</div>
              <div className="products-stats-number">25+</div>
              <div className="products-stats-label">Total Products</div>
            </div>
            <div className="products-stats-card">
              <div className="products-stats-icon">🌍</div>
              <div className="products-stats-number">15+</div>
              <div className="products-stats-label">Countries Served</div>
            </div>
            <div className="products-stats-card">
              <div className="products-stats-icon">⭐</div>
              <div className="products-stats-number">99%</div>
              <div className="products-stats-label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="products-cta-section">
          <h2>Need Custom Solutions?</h2>
          <p>Contact us for custom manufacturing, bulk orders, and technical specifications</p>
          <div className="products-cta-buttons">
            <button 
              className="products-cta-btn products-cta-primary"
              onClick={handleGeneralQuoteRequest}
            >
              Request a Quote
            </button>
            <button 
              className="products-cta-btn products-cta-secondary"
              onClick={handleSalesInquiry}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Products;