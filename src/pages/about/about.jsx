import React from 'react';
import Base from '../base.jsx';
import './about.css'; // Create this CSS file for styling

const About = () => {


  return (
    <Base>
        {/* Company Overview */}
        <section className="company-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-text">
                <h2>About Convince Group</h2>
                <p>Convince Group is a diversified industrial conglomerate in Bangladesh, focused on ready-made garments (RMG) manufacturing, garments accessories and packaging, yarn dyeing and information and communications technology (ICT). The group has the following units under its umbrella:</p>
                <p>1. Convince Apparels Ltd. - Fully automated Jacquard based ready made garments manufacturing Unit producing 100% export-oriented sweaters, pullovers, zipper/button cardigans, ponchos, and vests.</p>
                <p>2. Convince Zipper and Accessories Ltd. - Vertically integrated Zipper Manufacturing unit producing vislon, nylon, and metal zippers that are certified by top testing institutions such as SGS and Oeko Tex Bangladesh.</p>
                <p>3. Convince Dyeing Industries Ltd. - Acrylic Yarn Dyeing unit equipped with modern laboratory facilities, having dyeing capacity of 40,000lbs per day.</p>
                <p>4. Convince Computer Ltd. - Multifaceted Custom Software development firm with a focus on developing Enterprise Resources Planning(ERP) systems for all types of businesses.</p>
                <p>Company Size:<br/> 1,001-5,000 employees<br/>
                                  12 associated members </p>
                <p>Founded:<br/> 1988</p>
                <p>Specialties:<br/>Sweater, Apparel, Software, Zipper, Dyeing, Web Services, IT Consultancy, Pullover, and Cardigan</p>
              </div>
              <div className="overview-image">
                <img src="https://media.licdn.com/dms/image/v2/C560BAQFZAxs8Bqz0Kg/company-logo_200_200/company-logo_200_200/0/1630646160525/convincegroup_logo?e=2147483647&v=beta&t=2QFHX_rmruXYIquP1uFeL-QcpgG1NhPA1Shdz0Ot9cs" alt="Convince Group Office" style={{heigth:300, width:300}} />
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <section className="vision-mission">
          <div className="container">
            <h2 className="section-title">Vision, Mission & Values</h2>
            <div className="vision-mission-grid">
              <div className="vision-box">
                <h3>Our Vision</h3>
                <p>To be a globally respected industrial conglomerate, delivering integrated excellence across textiles and technology to drive sustainable growth and innovation.</p>
              </div>
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>To deliver uncompromising quality and innovative solutions across textiles and technology by fostering vertical integration, operational excellence, and enduring partnerships that create value for our clients, communities, and stakeholders.</p>
              </div>
            </div>
            <div className="values-section">
              <h3>Our Core Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <h4>Integrity</h4>
                  <p>We uphold the highest standards of honesty and ethical behavior in everything we do</p>
                </div>
                <div className="value-item">
                  <h4>Respect</h4>
                  <p>We treat everyone with dignity, respect, and appreciation for diverse perspectives</p>
                </div>
                <div className="value-item">
                  <h4>Keeping Promises</h4>
                  <p>We deliver on our commitments and take responsibility for our actions</p>
                </div>
                <div className="value-item">
                  <h4>Team Work</h4>
                  <p>We collaborate effectively to achieve shared goals and celebrate collective success</p>
                </div>
                <div className="value-item">
                  <h4>Growth</h4>
                  <p>We continuously learn, innovate, and strive for personal and professional development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Message from Chairman */}
        <section className="chairman-message">
          <div className="container">
            <div className="message-grid">
              <div className="chairman-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B2Eieb1y-98NDXDRNLSfFicgTSO24lCtag&s" alt="Chairman" />
              </div>
              <div className="message-content">
                <h2>Message from the Chairman</h2>
                <div className="quote-mark">"</div>
                <p className="message-text1">As we navigate through an era of unprecedented technological advancement and global change, our commitment to excellence remains unwavering. At Convince Group, we believe that true success comes from creating lasting value for our clients, our people, and the communities we serve.</p>
                <p className="message-text1">Our journey over the past decade has been remarkable, marked by continuous growth, innovation, and the trust of our valued clients. I am immensely proud of our team's dedication and the impact we've made together. As we look to the future, we remain committed to pushing boundaries, embracing challenges, and turning possibilities into realities.</p>
                <p className="message-text1">I invite you to join us on this exciting journey of growth and transformation.</p>
                <div className="chairman-signature">
                  <p className="chairman-name">RAFEZ ALAM CHOWDHURY</p>
                  <p className="chairman-title">Chairman, Convince Group</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors 
        <section className="board-directors">
          <div className="container">
            <h2 className="section-title">Board of Directors</h2>
            <div className="directors-grid">
              {boardMembers.map((member) => (
                <div key={member.id} className="director-card">
                  <div className="director-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* Leadership Team 
        <section className="leadership-team">
          <div className="container">
            <h2 className="section-title">Leadership Team</h2>
            <div className="leadership-grid">
              {leadershipTeam.map((leader) => (
                <div key={leader.id} className="leader-card">
                  <div className="leader-image">
                    <img src={leader.image} alt={leader.name} />
                  </div>
                  <h3>{leader.name}</h3>
                  <p>{leader.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* Achievements 
        <section className="achievements">
          <div className="container">
            <h2 className="section-title">Our Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="achievement-card">
                  <div className="achievement-year">{achievement.year}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>*/}
    </Base>
  );
};

export default About;