import React, { useEffect, useState } from 'react';
import Base3 from './base3.jsx';
import './dyeing.css';

const Dyeing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      '.dyeing-container .dyeing-section-heading, .dyeing-container .dyeing-client-card, .dyeing-container .dyeing-product-card, .dyeing-container .dyeing-about-heading, .dyeing-container .dyeing-about-paragraph, .dyeing-container .dyeing-stat-card, .dyeing-container .dyeing-about-image, .dyeing-container .dyeing-testimonial-card, .dyeing-container .dyeing-hero-slide, .dyeing-container .dyeing-capacity-card'
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

  // Board of Directors Data
  const directors = [
    {
      name: "Mr. Rafez Alam Chowdhury",
      designation: "Chairman & Managing Director",
      image: process.env.PUBLIC_URL + '/images/rafez.jpg',
      description: "With over 30 years of experience in the textile dyeing industry, leading the company with vision and innovation towards sustainable excellence."
    },
    {
      name: "Mr. Farzhad Ahmed",
      designation: "Executive Director",
      image: process.env.PUBLIC_URL + '/images/farzad.jpg',
      description: "czal@convincebd.biz, farzhad@convincebd.biz"
    },
    {
      name: "Mr. Rashik Alam Chowdhury",
      designation: "Executive Director",
      image: process.env.PUBLIC_URL + '/images/rashik.jpg',
      description: "rashik@tamishna.com, linkedin.com/in/rashik-chowdhury-84a5a4137"
    }
  ];

  // Production Capacity Data for Dyeing
  const productionCapacity = [
    { product: "Fabric Dyeing", capacity: "50,000 kg/day", icon: "🎨" },
    { product: "Yarn Dyeing", capacity: "30,000 kg/day", icon: "🧵" },
    { product: "Garment Dyeing", capacity: "20,000 pcs/day", icon: "👕" },
    { product: "Reactive Dyeing", capacity: "40,000 kg/day", icon: "🌈" },
    { product: "Disperse Dyeing", capacity: "35,000 kg/day", icon: "✨" },
    { product: "Pigment Dyeing", capacity: "25,000 kg/day", icon: "🎨" },
    { product: "Vat Dyeing", capacity: "20,000 kg/day", icon: "💎" },
    { product: "Sulfur Dyeing", capacity: "15,000 kg/day", icon: "⚫" },
    { product: "Digital Printing", capacity: "10,000 mtr/day", icon: "🖨️" },
    { product: "Screen Printing", capacity: "25,000 mtr/day", icon: "🖼️" },
    { product: "Fabric Finishing", capacity: "60,000 mtr/day", icon: "✨" },
    { product: "Quality Testing", capacity: "100% inspection", icon: "🔬" },
  ];

  // Hero Slider Images for Dyeing
  const heroImages = [
    { url: process.env.PUBLIC_URL + '/images/dyeing.jpg' },
    { url: process.env.PUBLIC_URL + '/images/DYEING!.jpg' },
    { url: process.env.PUBLIC_URL + '/images/Dyeing1.jpg' },
    { url: process.env.PUBLIC_URL + '/images/dyeingfebric.jpg' },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Product Data for Dyeing
  const productCategories = [
    {
      name: "DYEING SERVICES",
      images: [
        { url: process.env.PUBLIC_URL + '/images/fabric-dyeing.jpg', name: 'FABRIC DYEING' },
        { url: process.env.PUBLIC_URL + '/images/yarn-dyeing.jpg', name: 'YARN DYEING' },
        { url: process.env.PUBLIC_URL + '/images/garment-dyeing.jpg', name: 'GARMENT DYEING' },
        { url: process.env.PUBLIC_URL + '/images/reactive-dyeing.jpg', name: 'REACTIVE DYEING' },
        { url: process.env.PUBLIC_URL + '/images/disperse-dyeing.jpg', name: 'DISPERSE DYEING' },
        { url: process.env.PUBLIC_URL + '/images/pigment-dyeing.jpg', name: 'PIGMENT DYEING' },
        { url: process.env.PUBLIC_URL + '/images/digital-printing.jpg', name: 'DIGITAL PRINTING' },
      ]
    },
  ];

  // Function to get all products
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

  // Clients Data for Dyeing
  const clients = [
    { 
      name: "ZARA", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg", 
      country: "Spain",
    },
    { 
      name: "H&M", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg", 
      country: "Sweden" 
    },
    { 
      name: "UNIQLO", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/250px-UNIQLO_logo.svg.png", 
      country: "Japan" 
    },
    { 
      name: "GAP", 
      logo: "https://pbs.twimg.com/profile_images/1676666013100961792/aJwP6UzV_400x400.jpg", 
      country: "USA" 
    },
    { 
      name: "LEVI'S", 
      logo: "data:image/png;base64,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", 
      country: "USA" 
    },
    { 
      name: "ADIDAS", 
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACtCAMAAACuuZJAAAAAgVBMVEX///8AAABVVVXu7u5/f38oKCinp6fa2toVFRWqqqr6+vobGxuVlZUGBgbx8fH19fUODg6ysrIxMTEWFhbi4uLLy8siIiIqKip3d3e9vb2Tk5PS0tKIiIhubm5ISEi3t7c5OTldXV2dnZ1BQUFoaGh8fHxLS0s1NTXFxcVZWVliYmLHaAAgAAANNElEQVR4nO1de2OyPg99vKI4BDfAedvUXR6fff8P+AoITdIUm59oma/5b1vRntIm6clp9+fPwx72MLe2P7jugSNLtp1n33UnXFi86xxt77obt7ewH2TIO6Oe657c2sZp52Qb1125rR0XeWWB57o3N7T4swPtzXV/bmbhOupge3fdpRvZLO1QS/8vAlzyoQE/2tp1t65vZJFXFsWue3Zl85d0kVf26bpv1zVmkStLXPfuiua91QDvdLau+3c1621qgR9t7LqL17GaRV7ZJHTdy2vYYn4W+NH6rrvZvHnfNsCPqfy9BbjeJrBD3un8c93XRs3fj2yBH+2euCq7RV7Zs+v+NmcHEfDOXXFV9VmMbi9T1z1uzDxrF3eyV9c9bs7O5nDE7oir6kkcfGbfrnvcnD0Jod8RV+XLwlunM78frmohfe1L1z1uziwz+Mqi+ynGiAPcHXFVr0LonZXrHjdm04kQ+ofrHjdne+lrvyOu6q8Qeno/XJV4B3dHxZiuEPodcVWxNMDtXPf4v5tPXtuXEPrv5aoWc8I1hdIA99dNxy+1nH0mXNNQ+tp/I1fVe80XNuWatuewEvuFXNX+5dR3wjUl0tf+27iqxXPVdco17YTQfxdXFSN4hGuKz1ccsXXdgPgvVqofKyNcU18I/fdwVWMtfhGuKawTVXD2S7iqhPPghGsaS1/7kxssIsOLvDLKNbG6sRprP1elqx9LI8LflRB664XDdcIowjX9SLG3mqvi1Y+lEa6pJw1wLeaqzgqjZrj9WgidPt8asxBGEeGvPxBCb6lw2EozQbimmRB6K7kqS2EUFf5K1QbtEw6ftqYW9oMfXEm5qh++A86s2ppaGBH+StUG7RIOg62phW3xw2K1wVbvgCubSqnlIX5+KXycPu/SpFwTEf6K1QYtEg6LuSYi/BWrDb7c4ORsJ+w6LaZI1QYtKsaIU3Ei/BWrDVrEVYlTcVJMEQe4hRucjIlTcXJIfSpIC7jnXZo4FSfFFLGcrkVc1aXCX6naoEWH3C8V/ooDXIu4qkuFv2K1QXu4qkuFv2K1QYu4qkuFv2I5XXu4Kl+0fevoxRip2qBFXNWlwl+xnK5FXJXUU9FiijTAtYirEnsqIvwVy+ncCYffaWwV66JIgPonfd4RV+V1NSct9lQkQInVBttbgUUoc90ArXiLdVEkQInVBg64qpKBpaczpFwVEf6K1QY356qUboA6aTFXRQKUeNrc9pA70g1QTyctG9MAJVUb3JKroroB4qTFXBUppoinze0OuWu6AbqLEHNVJECJ1QY3Eg5zugHipMVc1RY/L542NznkzusG6C5CzFWRACWeNtcXDht1A3QXIeWqaDFGOm2uLhw26waokxZzVaSYIp421xUO1+oGaMVbzFVdqDa4pnD4nG6AOGkxV0WKKWK1wfUOuZ/VDWzJA2KuihRTDJfQme1KwmEb3QBx0mKuihRTxNNmcA2uyqB2JUZ3EZfewiJWGzR/yF2TtJuM7iKkXBUppojVBo0Lh3VJu8mokxZzVWQb9C58vGGuipW0m4zuIqRcFQ1Q0gDXpHDYdNenycguQsxVkQAlzou2zUGXrjZ6/FBMOpAAJVYbNHfI/eLjh1LSYXBhgGuQq7r0+KGYdCABSpwXNcdVXXz8UMxVkQAnzYsa5Kp20q8mTlpMOpAAJa7hNXfIXVwQoLsIMelAApRUTtcgV3Xp8UMx6UB4PnGAa46ruvj4oZh0IAFKrDZojqsSBzi6i5DmZKQYI768p0Gu6tLjh+IpS3g+sdqgOa5KHOBoMeZSrkqqNmiQq9oJv1orxkhzMhKgxBv/5oTDcVdoy9m4tHwUQICz+4Ckej6PF31pBxyKTJRnyhNL4CntXJDKXwdX7ecV7AH9Af0B/QHdxh7QH9B/lT2gP6D/8XuV2T1/P9DF9oDuAHpvMdwv97NDtTDPTNgwmR3bjxfVholC9ytjn/e99/3T0/A9Kf98DnpM2oc1HfRXi1mO5ux2LhzuVMfnP7Ps02PlpnQW4LBRXPlLd9ljoNe6uXj9VrG+wXZzOAe99/SttVe74hFuvPr6UJTy5NQ73uINJZ9Hm7gG+nRNWcvg30ECfaExd/N1WAM96VK6K2vPQ/eHWvEo2BkODvD/ein48gzQ/SeWf9nFttBXLO83GZqgxywrn85Y6Ae+WPrJxdeZSSkEAELonok0i9QI1kH3jXIN9YUI+vJ8ewXdWPuY6C/eivAG0Mc2hZka6D0bqhdAD20EKhX0Gi40IgUa3+64jYJuVwQ1Q4+tivcKes+q6ltCr613RZg3tTxoVEG3LP8aoffsClIV9KkdJX2CntRz/wNY5bDlykvotuUkE/TQklwvofuWNZwTdLSW0o/uz+4bFXFApmVdGDtBj22pdRN0W5FOCd1WkVRAB1WTYFOmMisQHiI1+7DHevkcH7xk1mfq+h4zqp2gu1943uLpW59mBuhEFzb/miXeYfypl9dO0EkFaLLJO/iql0IL6MBjw+Ljhvn1Dj6dKsXnSoujBXRUBov61crRJcQ8dFy+3SqPO6MeoICOxRVzdeZCE7AW0J/J8ycDiq7yv7ujSz03KM9+JxEsh+7Dt/OBcmOP+G0eOtSABqgy65N6ftF1VO3tow4SV15AVy8AKx3UMns5/QZ6d3rrh4cnVQ4dvvQfsiOZYn/EQodDF1FB8xhNnAI6GM+AnmWcofY59FD9jCVVYMiLF9YDD+vHwT3k0XLowDu/aXsx7LtZ6NCp6ko3tJpy6LDeqF/IgqYEhd7pwvwxrmp542IjA0I0V6NELimDDlL6lEmIkfyGhQ7SMu4SLRhoc+ggHHAyWBgt6IQ/TquvGvmo8mV8ZRomkFkDMG3YqyLg8uOg+2AfyUn84LVEOXS15ljxMyxiF9BJ0jDp9mcsMtAT/p4X8JZz6Gqotmx7KI3loINIxd8nBMZugL+fv54BuMYCOpegRdvPp4QsT/DJhs0sGMQMukJmEN+Db+agqwUW8NQB4Acy6OAycZ5pAQi0lIbgf3uCH6GczoRHAt+Ch5yIgfMBOj8OuhoZ07UyaqcyQF9vEoapCMAlstiCf2rtK4/6Zvhk4JE9OMaRoX2vHrqKpaaLlJTjGqChMkkh1SeeoNefl9qUzlkNqul2VpDyePCnuaH9n3qqQvkK080qavFm0HfVTyZtlBqcctNaf3Am9Sh000vABJVaSMb/vqNcLgddJT2mW9NUlzB0E7WtNjcVVVGv8hwV2JXXMSmPwNpFE97kG4A34KCrYGm6GlO9xQy6mv6mwy1Kf60IqnHtwbzBFHfM9BZBfuXBlRwYhPdglnDQFRTT2lWDk0FX+zCTM1JeDdCSOlsMLV87IBIYPDbIabKJovIAw+VXICJw0AF/aihJqG/IoKuRN4x1qHwL5uEPr0YWLI+rYHryay8EmWkGXYUew1sDLBoHHQQM/mZM0CCDDt4Nf7YFBP4R/Vvvvd9lubB8x64yFv4eL5iYZtDVBOQTXyjf56CD2McHdjB0GXQwCfjADlIuDXpuYTLsf5Ptd+7YAKfBRRu0HfEwNM4xIl6B3b6ArnJncOFWLM/hAWHCXb8D2/PQC1uhCkvu2EDYDvQzBD7KjDLoPvCdTCqLEmgWOphGL7p7QbvkAXk+0rdhHnw1OfS9Mtx0AbCn+W/Aa3qhU9jfQSTFfh1Mk0DzdJilZqFDguCZpvExWpk5dOhsUjpWmNXOoYOxI34R7G91/ifCWGiJJIeODqviNMMnNRyeoILnoFL8HhNMTRYdhB86wq5xhSNYDh0sKOJHQZjeFv1FIeBTjau/pxypRwfv6KrAfm9B6XUeOjodAGhNveBZQEeMcbBRE2X6RdqPSPfIKSTwl1N0wkeqol1O3/gJQ/YW0InC/bQT9Jb6hslARuO5MdkcMvS92Y9Wxjsxqjgljz7fs88JFxutHJBDhwQYWu1wyMtArp3EC1K+yHByBdqBmGAyYTdLBuihFmpHKfv8CbqvFWuilK125tARYwwIXESxlnM7tD24W3pB21OLpuqL7S0cJY9uW+4pghtiqNN14U1WqEigMgrP8pruEnpoedrVWG60/D9uVQlhYTdWBXR6uC5It89k7ID/S+yOMVaxr2d32tRcZLYr1arqydgKu12llVATK6vzZCrsh1a1zxppwdAGCygczWzal9ncmUn1jOO9lcoBZDw0hLNWJyg5WAw2rJklFgctq0S2dpL8pXmUv+abRyA1Rcme6f/VfdazNGqwDXqGFO/XK5saStNzleSrHH5l9tw/zN433jHgd7FRPBb2Gcf7trIXjy0YbxmtfaN4LGFW2Wjpswoqf8m77q2+T8nNe8WzMF3HtZLB6RJH3NEGM/VnJYMLMtofw7BWMpiQtCdvb5AM+nttDaebukPeybo7j7Ik5Xm3P+XXtULReP+zPY5v8DLvrg9F/jCt2udTy59Wxjwfvr++ZflMlG434yLRUFJq5oFw8fVN2puFotPF+vs5y36CUfq22VvdNCy90OnSC6AM8tmGvlD86Q+7V/sfs2fILfHwArQAAAAASUVORK5CYII=", 
      country: "Germany" 
    },
    { 
      name: "NIKE", 
      logo: "data:image/png;base64,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", 
      country: "USA" 
    },
    { 
      name: "PUMA", 
      logo: "data:image/png;base64,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", 
      country: "Germany" 
    },
    { 
      name: "TOMMY HILFIGER", 
      logo: "data:image/png;base64,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", 
      country: "USA" 
    },
    { 
      name: "CALVIN KLEIN", 
      logo: "data:image/png;base64,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", 
      country: "USA" 
    },
  ];

  // Helper function for image fallbacks
  const getFallbackImage = (text, width = 300, height = 240) => {
    const svg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f8f9fa'/%3E%3Crect x='0' y='0' width='${width}' height='${height}' fill='none' stroke='%23dee2e6' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='${width > 200 ? 18 : 14}' fill='%236c757d' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
    return svg;
  };

  return (
    <Base3>
      <div className="dyeing-container">
        {/* Hero Slider Section */}
        <div className='dyeing-hero-wrapper'>
          <div className="dyeing-hero-slider-section">
            <div className="dyeing-slider-container dyeing-hero-slider">
              {heroImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`dyeing-hero-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image.url})` }}
                >
                  <div className="dyeing-slide-overlay"></div>
                  <div className="dyeing-slide-caption">
                    <h1 className="dyeing-hero-title">Welcome to Convince Dyeing Industries Ltd.</h1>
                    <p className="dyeing-hero-subtitle">Premium Quality Dyeing & Finishing Services for Global Textile Leaders</p>
                  </div>
                </div>
              ))}
              
              <button className="dyeing-slider-arrow dyeing-prev" onClick={prevSlide}>❮</button>
              <button className="dyeing-slider-arrow dyeing-next" onClick={nextSlide}>❯</button>
              
              <div className="dyeing-slider-dots">
                {heroImages.map((_, index) => (
                  <span 
                    key={index}
                    className={`dyeing-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Section - Dyeing Specific */}
        <section className="dyeing-about-section">
          <h2 className="dyeing-section-heading">About Convince Dyeing Industries Ltd.</h2>
          <div className="dyeing-about-content">
            <div className="dyeing-about-row">
              <div className="dyeing-about-text">
                <h3 className="dyeing-about-heading">Leading the Way in Textile Dyeing & Finishing</h3>
                <p className="dyeing-about-paragraph">
                  Convince Dyeing Industries Ltd. is a state-of-the-art textile dyeing and finishing facility 
                  equipped with the latest German and Japanese technology. We specialize in high-quality fabric 
                  dyeing, yarn dyeing, garment dyeing, and advanced printing services. Our commitment to 
                  color consistency, eco-friendly processes, and timely delivery has made us a preferred 
                  partner for leading fashion brands worldwide.
                </p>
                <p className="dyeing-about-paragraph">
                  With a focus on sustainability and innovation, we utilize advanced water treatment plants, 
                  energy-efficient machinery, and eco-friendly dyes to minimize our environmental footprint. 
                  Our laboratory is equipped with cutting-edge testing equipment to ensure every batch meets 
                  international quality standards including ISO, OEKO-TEX, and GOTS certifications.
                </p>
                <div className="dyeing-stats-container">
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">20+</h4>
                    <p className="dyeing-stat-label">Years of Excellence</p>
                  </div>
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">500+</h4>
                    <p className="dyeing-stat-label">Skilled Technicians</p>
                  </div>
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">100+</h4>
                    <p className="dyeing-stat-label">Global Clients</p>
                  </div>
                  <div className="dyeing-stat-card">
                    <h4 className="dyeing-stat-number">150K+</h4>
                    <p className="dyeing-stat-label">Daily Capacity (kg)</p>
                  </div>
                </div>
              </div>
              <div className="dyeing-about-image">
                <img src={process.env.PUBLIC_URL + '/images/dyeing-factory.jpg'} alt="Convince Dyeing Factory" className="dyeing-factory-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Dyeing Products */}
        <section className="dyeing-products-section">
          <h2 className="dyeing-section-heading">Our Services</h2>
          <div className="dyeing-slider-container">
            <div className="dyeing-slider-track">
              {allProducts.map((product, index) => (
                <div key={index} className="dyeing-product-card">
                  <div className="dyeing-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="dyeing-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="dyeing-product-info">
                    <h3 className="dyeing-product-name">{product.name}</h3>
                    <p className="dyeing-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
              
              {allProducts.map((product, index) => (
                <div key={`duplicate-${index}`} className="dyeing-product-card">
                  <div className="dyeing-product-image">
                    <img 
                      src={product.url} 
                      alt={product.name}
                      className="dyeing-product-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = getFallbackImage(product.name, 300, 240);
                      }}
                    />
                  </div>
                  <div className="dyeing-product-info">
                    <h3 className="dyeing-product-name">{product.name}</h3>
                    <p className="dyeing-product-category">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Capacity Section */}
        <section className="dyeing-capacity-section">
          <h2 className="dyeing-section-heading">Production Capacity</h2>
          <p className="dyeing-capacity-subtitle">Our daily manufacturing capabilities</p>
          
          <div className="dyeing-capacity-grid">
            {productionCapacity.map((item, index) => (
              <div key={index} className="dyeing-capacity-card">
                <div className="dyeing-capacity-icon">{item.icon}</div>
                <div className="dyeing-capacity-content">
                  <h3 className="dyeing-capacity-product">{item.product}</h3>
                  <p className="dyeing-capacity-value">{item.capacity}</p>
                </div>
                <div className="dyeing-capacity-badge">Per Day</div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="dyeing-clients-section">
          <h2 className="dyeing-section-heading">Our Clients</h2>
          <p className="dyeing-clients-subtitle">Trusted by leading fashion brands worldwide</p>
          
          <div className="dyeing-clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="dyeing-client-card">
                <div className="dyeing-client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="dyeing-client-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
                <h4 className="dyeing-client-name">{client.name}</h4>
                <p className="dyeing-client-country">{client.country}</p>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="dyeing-testimonials-section">
            <h3 className="dyeing-testimonials-heading">What Our Clients Say</h3>
            <div className="dyeing-testimonials-grid">
              <div className="dyeing-testimonial-card">
                <div className="dyeing-quote-mark">"</div>
                <p className="dyeing-testimonial-text">
                  Convince Dyeing has exceptional color matching capabilities. Their consistency and quality 
                  control are unmatched in the industry. A truly reliable partner for our premium collections.
                </p>
                <div className="dyeing-testimonial-author">
                  <strong>Maria Garcia</strong>
                  <span>Quality Director, ZARA</span>
                </div>
              </div>

              <div className="dyeing-testimonial-card">
                <div className="dyeing-quote-mark">"</div>
                <p className="dyeing-testimonial-text">
                  Their eco-friendly dyeing process and commitment to sustainability align perfectly with our 
                  brand values. The team is professional and always meets our tight deadlines.
                </p>
                <div className="dyeing-testimonial-author">
                  <strong>James Wilson</strong>
                  <span>Sourcing Manager, H&M</span>
                </div>
              </div>

              <div className="dyeing-testimonial-card">
                <div className="dyeing-quote-mark">"</div>
                <p className="dyeing-testimonial-text">
                  The advanced technology and technical expertise at Convince Dyeing ensures perfect results 
                  every time. Highly recommended for high-end fashion requirements.
                </p>
                <div className="dyeing-testimonial-author">
                  <strong>Yuki Tanaka</strong>
                  <span>Production Head, UNIQLO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos Marquee */}
          <div className="dyeing-logo-marquee">
            <div className="dyeing-marquee-wrapper">
              {clients.map((client, index) => (
                <div key={index} className="dyeing-marquee-item">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="dyeing-marquee-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
              ))}
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="dyeing-marquee-item">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="dyeing-marquee-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getFallbackImage(client.name, 150, 80);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="dyeing-directors-section">
          <h2 className="dyeing-section-heading">Board of Directors</h2>
          <p className="dyeing-directors-subtitle">Meet the visionary leaders behind Convince Dyeing Industries Ltd.</p>
          
          <div className="dyeing-directors-grid">
            {directors.map((director, index) => (
              <div key={index} className="dyeing-director-card">
                <div className="dyeing-director-image-wrapper">
                  <div className="dyeing-director-image">
                    <img 
                      src={director.image} 
                      alt={director.name}
                      className="dyeing-director-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&size=200&background=7c3aed&color=fff&bold=true`;
                      }}
                    />
                  </div>
                </div>
                <div className="dyeing-director-info">
                  <h3 className="dyeing-director-name">{director.name}</h3>
                  <p className="dyeing-director-designation">{director.designation}</p>
                  <p className="dyeing-director-description">{director.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Base3>
  );
};

export default Dyeing;