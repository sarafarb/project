import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              <span className="title-main">הסיפור שלנו</span>
              <span className="title-accent">מהשדה עד השולחן</span>
            </h1>
            <p className="about-hero-subtitle">
              מזה 15 שנה אנחנו מביאים לכם את הטוב ביותר מעולם הפירות והירקות
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>איך הכל התחיל</h2>
              <p>
                הכל התחיל מחלום פשוט - להביא לכל בית בישראל פירות וירקות טריים, 
                איכותיים ומזינים. בשנת 2008, עם ניסיון של שנים בחקלאות ואהבה 
                אמיתית לטבע, החלטנו להקים את החנות שלנו.
              </p>
              <p>
                היום, אנחנו גאים לשרת אלפי משפחות ברחבי הארץ, ולהיות חלק 
                מהשולחן שלכם בכל יום. כל מוצר שאנחנו מוכרים עובר בדיקות איכות 
                קפדניות ונבחר בקפידה רבה.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🌱</span>
                <p>תמונת המייסדים</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">הערכים שלנו</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>טבעיות</h3>
              <p>אנחנו מאמינים בכוח הטבע ובחשיבות של מזון טבעי ובריא לכל המשפחה</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>אמינות</h3>
              <p>הלקוחות שלנו סומכים עלינו, ואנחנו עושים הכל כדי לשמור על האמון הזה</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💚</div>
              <h3>קיימות</h3>
              <p>אנחנו דואגים לסביבה ועובדים עם חקלאים שמקפידים על חקלאות בת קיימא</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>מצוינות</h3>
              <p>אנחנו לא מתפשרים על איכות ותמיד שואפים להיות הטובים ביותר</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">הצוות שלנו</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🌾</div>
              <h3>דוד כהן</h3>
              <p className="member-role">מייסד ומנכ"ל</p>
              <p className="member-bio">
                חקלאי בנשמה עם ניסיון של 20 שנה בתחום. דוד מוביל את החזון שלנו 
                ודואג שכל מוצר יעמוד בסטנדרטים הגבוהים ביותר.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>רחל לוי</h3>
              <p className="member-role">מנהלת תפעול</p>
              <p className="member-bio">
                רחל דואגת שהמוצרים יגיעו אליכם טריים ובזמן. עם ניסיון בלוגיסטיקה 
                ואהבה לשירות לקוחות מעולה.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔬</div>
              <h3>מיכאל אברהם</h3>
              <p className="member-role">מומחה איכות</p>
              <p className="member-bio">
                מיכאל בודק כל משלוח ודואג שרק המוצרים הטובים ביותר יגיעו אליכם. 
                הוא המומחה שלנו לבטיחות מזון.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">התהליך שלנו</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>בחירה קפדנית</h3>
                <p>אנחנו בוחרים רק את החקלאים הטובים ביותר ובודקים כל שדה אישית</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>קטיף טרי</h3>
                <p>המוצרים נקטפים בשעות הבוקר המוקדמות לשמירה על הטריות המקסימלית</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>בדיקת איכות</h3>
                <p>כל מוצר עובר בדיקות איכות קפדניות במעבדה שלנו</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>אריזה ומשלוח</h3>
                <p>אריזה מיוחדת לשמירה על הטריות ומשלוח מהיר עד הבית</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>מוכנים להצטרף למשפחה שלנו?</h2>
            <p>גלו מדוע אלפי לקוחות בוחרים בנו מדי יום</p>
            <div className="cta-buttons">
              <Link to="/Products" className="cta-button primary">
                רכישת מוצרים
              </Link>
              <Link to="/Contact" className="cta-button secondary">
                צור קשר
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
