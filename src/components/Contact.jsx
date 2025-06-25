import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תוכל להוסיף לוגיקה לשליחת הטופס
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // איפוס הטופס אחרי 3 שניות
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              <span className="title-main">צור קשר</span>
              <span className="title-accent">אנחנו כאן בשבילכם</span>
            </h1>
            <p className="contact-hero-subtitle">
              יש לכם שאלה? רוצים להזמין? או סתם לשתף אותנו בחוויה? נשמח לשמוע מכם!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>בואו נדבר</h2>
              <p>אנחנו זמינים עבורכם בכל הדרכים הנוחות לכם</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>טלפון</h3>
                    <p>03-1234567</p>
                    <span>ראשון-חמישי: 8:00-18:00</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>אימייל</h3>
                    <p>info@freshmarket.co.il</p>
                    <span>מענה תוך 24 שעות</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>כתובת</h3>
                    <p>רחוב השוק 123, תל אביב</p>
                    <span>ביקור לפי תיאום מראש</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-content">
                    <h3>וואטסאפ</h3>
                    <p>050-1234567</p>
                    <span>זמינים 24/7</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h3>עקבו אחרינו</h3>
                <div className="social-links">
                  <a href="#" className="social-link facebook">📘</a>
                  <a href="#" className="social-link instagram">📷</a>
                  <a href="#" className="social-link whatsapp">💬</a>
                  <a href="#" className="social-link telegram">✈️</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>שלחו לנו הודעה</h2>
                <p>מלאו את הפרטים ונחזור אליכם בהקדם</p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <h3>תודה רבה!</h3>
                  <p>ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם האפשרי.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">שם מלא *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="הכניסו את שמכם המלא"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">אימייל *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">טלפון</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="050-1234567"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">נושא</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">בחרו נושא</option>
                        <option value="order">הזמנה</option>
                        <option value="complaint">תלונה</option>
                        <option value="suggestion">הצעה</option>
                        <option value="general">כללי</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">הודעה *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="כתבו כאן את ההודעה שלכם..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <span>שלח הודעה</span>
                    <div className="btn-icon">📤</div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">שאלות נפוצות</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>🚚 מה זמני המשלוח?</h3>
              <p>אנחנו מספקים משלוחים ראשון עד חמישי בין השעות 8:00-18:00. משלוח דחוף זמין תמורת תוספת תשלום.</p>
            </div>
            <div className="faq-item">
              <h3>💰 איך אפשר לשלם?</h3>
              <p>אנחנו מקבלים תשלום במזומן, כרטיסי אשראי, העברה בנקאית וביט.</p>
            </div>
            <div className="faq-item">
              <h3>📦 מה המינימום להזמנה?</h3>
              <p>ההזמנה המינימלית היא 50 ש"ח. משלוח חינם על הזמנות מעל 150 ש"ח.</p>
            </div>
            <div className="faq-item">
              <h3>🔄 מה המדיניות החזרות?</h3>
              <p>אם המוצר לא עומד בציפיות, אנחנו מחזירים כסף מלא או מחליפים את המוצר תוך 24 שעות.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">מיקום החנות</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🗺️</div>
                <h3>רחוב השוק 123, תל אביב</h3>
                <p>חניה חינם • נגיש לנכים • תחבורה ציבורית</p>
                <button className="directions-btn">
                  קבלת הוראות הגעה
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
