import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
  
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">פירות וירקות</span>
              <span className="title-premium">פרימיום</span>
            </h1>
            <p className="hero-subtitle">
              חוויית קנייה מדהימה • איכות מעולה • שירות מושלם
            </p>
            <div className="hero-buttons">
              <Link to="/Products" className="btn-primary">
                <span>גלה את המוצרים</span>
                <i className="arrow">→</i>
              </Link>
              <Link to="/About" className="btn-secondary">
                קרא עלינו
              </Link>
            </div>
          </div>
        </div>
      </section>

 
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">למה לבחור בנו?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🥬</div>
              <h3>טריות מובטחת</h3>
              <p>מוצרים טריים שנקטפו היום, ישירות מהחקלאי אליכם</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>איכות פרימיום</h3>
              <p>רק המוצרים הטובים ביותר עוברים את הבדיקות הקפדניות שלנו</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>משלוח מהיר</h3>
              <p>משלוח עד הבית תוך 24 שעות, עם שמירה על הטריות</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>אורגני וטבעי</h3>
              <p>מגדלים בשיטות אורגניות ללא חומרי הדברה מזיקים</p>
            </div>
          </div>
        </div>
      </section>


      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">לקוחות מרוצים</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">מוצרים איכותיים</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/6</div>
              <div className="stat-label">שירות לקוחות</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">שביעות רצון</div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>מוכנים לחוויית קנייה מדהימה?</h2>
            <p>הצטרפו לאלפי הלקוחות המרוצים שלנו וגלו את ההבדל</p>
            <Link to="/Products" className="cta-button">
              התחל לקנות עכשיו
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
