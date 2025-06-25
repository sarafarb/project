import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import myContext from '../contex'

function ProductInfo() {
  const { id } = useParams()
  const navigate = useNavigate()
  const products = useContext(myContext).products
  const product = products.find(p => p.id.toString() === id)
  const [quantity, setQuantity] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const c = useContext(myContext).cart
  
  const addToCart = (product) => {
    for (let i = 0; i < quantity; i++) {
      c.push(product)
    }
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="not-found-content">
          <div className="not-found-icon">🔍</div>
          <h2>המוצר לא נמצא</h2>
          <p>המוצר שחיפשת אינו קיים במערכת</p>
          <button onClick={() => navigate('/products')} className="back-btn">
            חזור למוצרים
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="product-info-page">
      <div className="product-info-container">
        {/* כפתור חזרה */}
        <button onClick={() => navigate(-1)} className="back-button">
          <span className="back-icon">←</span>
          חזרה
        </button>

        {/* תוכן המוצר */}
        <div className="product-info-content">
          {/* תמונת המוצר */}
          <div className="product-image-section">
            <div className="image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              {product.premium && (
                <div className="premium-badge">
                  <span className="premium-icon">⭐</span>
                  מוצר מיוחד
                </div>
              )}
              {!product.inStock && (
                <div className="out-of-stock-overlay">
                  <span>אזל מהמלאי</span>
                </div>
              )}
            </div>
          </div>

          {/* פרטי המוצר */}
          <div className="product-details-section">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-category">
                <span className="category-icon">🏷️</span>
                {product.category || 'כללי'}
              </div>
            </div>

            <div className="product-price">
              <span className="price-value">{product.price}</span>
              <span className="currency">₪</span>
            </div>

            <div className="product-description">
              <h3>תיאור המוצר</h3>
              <p>{product.description || 'תיאור מפורט של המוצר יופיע כאן. המוצר איכותי ומומלץ לשימוש יומיומי.'}</p>
            </div>

            <div className="product-specs">
              <div className="spec-item">
                <span className="spec-label">כמות:</span>
                <span className="spec-value">{product.unit || 'יחידה'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">זמינות:</span>
                <span className={`spec-value ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.inStock ? (
                    <>
                      <span className="status-icon">✅</span>
                      במלאי
                    </>
                  ) : (
                    <>
                      <span className="status-icon">❌</span>
                      אזל מהמלאי
                    </>
                  )}
                </span>
              </div>
              <div className="spec-item">
                <span className="spec-label">סוג:</span>
                <span className="spec-value">
                  {product.premium ? (
                    <>
                      <span className="premium-text">מוצר פרימיום</span>
                      <span className="premium-star">⭐</span>
                    </>
                  ) : (
                    'מוצר רגיל'
                  )}
                </span>
              </div>
            </div>

            {/* בחירת כמות והוספה לעגלה */}
            <div className="purchase-section">
              <div className="quantity-selector">
                <label>כמות:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                    disabled={!product.inStock}
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                    disabled={!product.inStock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                <button 
                  onClick={() => addToCart(product)}
                  className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                  disabled={!product.inStock}
                >
                  <span className="btn-icon">🛒</span>
                  {product.inStock ? 'הוסף לעגלה' : 'אזל מהמלאי'}
                </button>
                
                <button 
                  onClick={() => navigate('/products')}
                  className="continue-shopping-btn"
                >
                  <span className="btn-icon">🛍️</span>
                  המשך קנייה
                </button>
              </div>
            </div>

            {/* הודעת הצלחה */}
            {showSuccess && (
              <div className="success-message">
                <span className="success-icon">✅</span>
                המוצר נוסף לעגלה בהצלחה!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
