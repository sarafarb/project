import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import myContext from '../contex'

function Products({  }) {
  const context = useContext(myContext)
  const p = context.products
  const setProducts = context.setProducts
  const c = context.cart
  const userRole = context.userRole
  const navigate = useNavigate()

  const [editingProduct, setEditingProduct] = useState(null)

  const addToCart = (product) => {
    c.push(product)
    alert("המוצר נוסף לעגלה")
  }

  const goToProductDetails = (productId) => {
    navigate(`/ProductInfo/${productId}`)
  }

  const startEdit = (product) => {
    setEditingProduct({ ...product })
  }

  const saveEdit = () => {
    const updatedProducts = p.map(product =>
      product.id === editingProduct.id ? editingProduct : product
    )
    setProducts(updatedProducts)
    setEditingProduct(null)
    alert("המוצר עודכן בהצלחה!")
  }

  const cancelEdit = () => {
    setEditingProduct(null)
  }

  const deleteProduct = (productId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את המוצר?')) {
      const updatedProducts = p.filter(product => product.id !== productId)
      setProducts(updatedProducts)
      alert("המוצר נמחק בהצלחה!")
    }
  }

  const updateField = (field, value) => {
    setEditingProduct({
      ...editingProduct,
      [field]: field === 'price' ? parseFloat(value) || 0 : value
    })
  }

  return (
    <div className='productCard'>
      {p && p.map((product) => {
        if (editingProduct && editingProduct.id === product.id) {
          return (
            <div key={product.id} className='product edit-mode'>
              <div className="edit-form">
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="שם המוצר"
                />

                <input
                  type="text"
                  value={editingProduct.category || ''}
                  onChange={(e) => updateField('category', e.target.value)}
                  placeholder="קטגוריה"
                />

                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => updateField('price', e.target.value)}
                  placeholder="מחיר"
                />

                <input
                  type="text"
                  value={editingProduct.unit || ''}
                  onChange={(e) => updateField('unit', e.target.value)}
                  placeholder="יחידת מידה"
                />

                <input
                  type="text"
                  value={editingProduct.image}
                  onChange={(e) => updateField('image', e.target.value)}
                  placeholder="נתיב תמונה"
                />

                <textarea
                  value={editingProduct.description || ''}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="תיאור המוצר"
                  rows="3"
                />

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={editingProduct.premium || false}
                    onChange={(e) => updateField('premium', e.target.checked)}
                  />
                  מוצר פרימיום
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={editingProduct.inStock !== false}
                    onChange={(e) => updateField('inStock', e.target.checked)}
                  />
                  במלאי
                </label>

                <div className="edit-buttons">
                  <button onClick={saveEdit} className="save-btn">שמור</button>
                  <button onClick={cancelEdit} className="cancel-btn">ביטול</button>
                </div>
              </div>
            </div>
          )
        }

        return (
          <div key={product.id} className='product'>
            <h3>{product.name}</h3>
            <br />
            <img src={product.image} alt={product.name} />
            <br />
            <p>{product.price} ש"ח</p>
            <br />
            {product.category && <p className="category">קטגוריה: {product.category}</p>}
            <br />
            {product.unit && <p className="unit">{product.unit}</p>}

            {userRole === "admin" ? (
              <div className="admin-buttons">
                <button onClick={() => startEdit(product)} className="edit-btn">✏️ עריכה</button>
                <button onClick={() => deleteProduct(product.id)} className="delete-btn">🗑️ מחיקה</button>
              </div>
            ) : (
              <div className="user-buttons">
                <button onClick={() => addToCart(product)}>➕ הוסף לעגלה</button>
                <button onClick={() => goToProductDetails(product.id)}>ℹ️ פרטים</button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Products
