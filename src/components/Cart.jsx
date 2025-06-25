import React, { useState, useContext } from 'react'
import myContext from '../contex'

function Cart() {
  const c = useContext(myContext).cart
  const [, forceUpdate] = useState({})
  
  const removeFromCart = (indexToRemove) => {
    c.splice(indexToRemove, 1)
    forceUpdate({}) // גורם לרנדור מחדש
    alert("המוצר הוסר מהעגלה")
  }
  
  const calculateTotal = () => {
    return c.reduce((total, item) => total + item.price, 0)
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-header">עגלת הקניות שלי</h1>
        
        {c.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>העגלה שלך ריקה</h3>
            <p>הוסף מוצרים כדי להתחיל לקנות</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {c.map((product, index) => (
                <div key={`${product.id}-${index}`} className="cart-item">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="cart-item-image" 
                  />
                  <div className="cart-item-info">
                    <h4 className="cart-item-name">{product.name}</h4>
                    <p className="cart-item-price">{product.price} ש"ח</p>
                  </div>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    הסר
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="cart-total">
                <h3>סה"כ לתשלום: {calculateTotal()} ש"ח</h3>
                <button className="checkout-btn">המשך לתשלום</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
