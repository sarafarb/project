import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ProductInfo from './components/ProductInfo';
import Products from './components/Products';
import Cart from './components/Cart';
import {MyProvider} from './contex';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false); 

  // מערך המוצרים
  //#region 
  const [products, setProducts] = useState([

    {
      id: 1,
      name: "אבוקדו האס אורגני",
      category: "פירות",
      price: 12.90,
      unit: "יחידה",
      image: "/img/avocado.jpg",
      description: "עשיר בויטמינים ושמנים בריאים, מושלם לסלטים, טוסטים ומנות מזינות. גדל ללא חומרי הדברה כימיים במטעים מובחרים",
      inStock: true,
      premium: true
    },
    {
      id: 2,
      name: "מנגו קנט פרימיום",
      category: "פירות",
      price: 15.90,
      unit: "יחידה",
      image: "/img/mango.jpg",
      description: "פרי טרופי עסיסי ומתוק במיוחד, עשיר בויטמין C ובטא קרוטן. נבחר בקפידה ממטעים איכותיים בדרום אמריקה",
      inStock: true,
      premium: true
    },
    {
      id: 3,
      name: "תותים אורגניים",
      category: "פירות",
      price: 18.90,
      unit: "אריזה 250 גרם",
      image: "/img/strawberry.jpg",
      description: "פירות יער עדינים ומתוקים, מלאי אנטיאוקסידנטים וויטמין C. נקטפים בשלות מושלמת ומגיעים ישירות מהשדה",
      inStock: true,
      premium: true
    },
    {
      id: 4,
      name: "אוכמניות פרימיום",
      category: "פירות",
      price: 22.90,
      unit: "אריזה 200 גרם",
      image: "/img/blueberry.jpg",
      description: "סופר פוד טבעי עם ריכוז גבוה של אנטיאוקסידנטים ותרכובות אנטי דלקתיות. מושלמות לשייקים, יוגורטים ואכילה ישירה",
      inStock: true,
      premium: true
    },
    {
      id: 5,
      name: "רימונים אדומים",
      category: "פירות",
      price: 8.90,
      unit: "יחידה",
      image: "/img/pomegranate.jpg",
      description: "פרי עתיק ומסורתי עם גרגירים עסיסיים ומתוקים. סמל לבריאות ואריכות ימים, מעולה למיצים ולקישוט מנות חגיגיות",
      inStock: true,
      premium: false
    },
    {
      id: 6,
      name: "תפוחים גאלה אורגניים",
      category: "פירות",
      price: 14.90,
      unit: "קילו",
      image: "/img/apple.jpg",
      description: "זן מתוק ופריך במיוחד, מושלם לחטיפים בריאים ולאפייה ביתית. גדלים בשיטות חקלאות אורגנית ללא כימיקלים",
      inStock: true,
      premium: true
    },
    {
      id: 7,
      name: "בננות קנריות",
      category: "פירות",
      price: 9.90,
      unit: "קילו",
      image: "/img/banana.jpg",
      description: "מקור מעולה לאנרגיה מיידית ופוטסיום טבעי. מושלמות לספורטאים, שייקים ומאפים ביתיים. בשלות אידיאלית וטעם מתוק",
      inStock: true,
      premium: false
    },
    {
      id: 8,
      name: "ענבים ירוקים ללא גרעינים",
      category: "פירות",
      price: 16.90,
      unit: "אריזה 500 גרם",
      image: "/img/grapes.jpg",
      description: "ענבי שולחן מתוקים ועסיסיים ללא גרעינים מטרידים. מושלמים לחטיפים, סלטי פירות ולקישוט מגשי אירוח",
      inStock: true,
      premium: true
    },
    {
      id: 9,
      name: "אגסים ירוקים",
      category: "פירות",
      price: 13.90,
      unit: "קילו",
      image: "/img/pear.jpg",
      description: "פרי עדין ומתוק עם מרקם חמאתי ייחודי. עשיר בסיבים תזונתיים ומושלם לסלטים, קינוחים ואכילה טרייה",
      inStock: true,
      premium: false
    },
    {
      id: 10,
      name: "קיווי זהוב",
      category: "פירות",
      price: 19.90,
      unit: "אריזה 6 יחידות",
      image: "/img/kiwi.jpg",
      description: "זן מיוחד עם בשר זהוב ומתוק יותר מהקיווי הרגיל. עשיר בויטמין C ואנזימים עיכול. טעם טרופי מרענן ומיוחד",
      inStock: true,
      premium: true
    },
    {
      id: 11,
      name: "אפרסקים קטיפים",
      category: "פירות",
      price: 17.90,
      unit: "קילו",
      image: "/img/peach.jpg",
      description: "פירות קיץ ארומטיים ועסיסיים עם בשר רך ומתוק. מושלמים לקינוחים, ריבות ביתיות ואכילה טרייה בימי חום",
      inStock: true,
      premium: true
    },
    {
      id: 12,
      name: "משמשים מיובשים טבעיים",
      category: "פירות",
      price: 24.90,
      unit: "אריזה 300 גרם",
      image: "/img/apricot.jpg",
      description: "פירות מיובשים ללא תוספת סוכר או חומרים משמרים. מקור מרוכז של ברזל ובטא קרוטן, מושלמים לחטיפים בריאים",
      inStock: true,
      premium: true
    },

    // ירקות
    {
      id: 13,
      name: "עגבניות שרי אורגניות",
      category: "ירקות",
      price: 16.90,
      unit: "אריזה 300 גרם",
      image: "/img/cherry-tomato.jpg",
      description: "פירות קטנים ועסיסיים בטעם מרוכז ומתוק. מושלמים לחטיפים בריאים, סלטים צבעוניים ומנות גורמה",
      inStock: true,
      premium: true
    },
    {
      id: 14,
      name: "מלפפון חממה",
      category: "ירקות",
      price: 8.90,
      unit: "יחידה",
      image: "/img/cucumber.jpg",
      description: "ירק מרענן ועסיסי עם טעם עדין ומרענן. מושלם לסלטי קיץ, מיצים ירוקים ומנות קלילות. עשיר במים ומינרלים",
      inStock: true,
      premium: false
    },
    {
      id: 15,
      name: "חציל איטלקי",
      category: "ירקות",
      price: 11.90,
      unit: "יחידה",
      image: "/img/eggplant.jpg",
      description: "ירק ים תיכוני רב שימושי עם מרקם קטיפתי ייחודי. מצוין לצלייה, טיגון ומנות אפויות. מקור מעולה לסיבים תזונתיים",
      inStock: true,
      premium: true
    },
    {
      id: 16,
      name: "קישוא ירוק",
      category: "ירקות",
      price: 9.90,
      unit: "יחידה",
      image: "/img/zucchini.jpg",
      description: "ירק קיצי עדין ורך במרקם, מתאים למגוון רחב של הכנות - מרקים, מנות אפויות ותבשילים ביתיים מסורתיים",
      inStock: true,
      premium: false
    },
    {
      id: 17,
      name: "כרוב סגול",
      category: "ירקות",
      price: 7.90,
      unit: "יחידה",
      image: "/img/cabbage.jpg",
      description: "ירק עלים צבעוני ובריא במיוחד, עשיר באנטיאוקסידנטים וויטמין K. מעולה לסלטי כרוב, מרקים ומנות מבושלות",
      inStock: true,
      premium: false
    },
    {
      id: 18,
      name: "פטריות שמפיניון",
      category: "ירקות",
      price: 13.90,
      unit: "אריזה 250 גרם",
      image: "/img/mushroom.jpg",
      description: "פטריות איכותיות בעלות טעם עמוק ועשיר. מושלמות לרטבים, מנות פסטה, פיצות ותבשילים חגיגיים. מקור חלבון טבעי",
      inStock: true,
      premium: true
    },
    {
      id: 19,
      name: "בצל סגול",
      category: "ירקות",
      price: 6.90,
      unit: "קילו",
      image: "/img/onion.jpg",
      description: "בסיס טעם חיוני למטבח הישראלי והים תיכוני. בעל ארומה עזה ומתיקות טבעית לאחר בישול. עשיר בחומרים מזינים ותרכובות גופרית",
      inStock: true,
      premium: false
    },
    {
      id: 20,
      name: "גזר בייבי צבעוני",
      category: "ירקות",
      price: 12.90,
      unit: "אריזה 400 גרם",
      image: "/img/carrot.jpg",
      description: "גזרים צעירים בצבעים שונים - כתום, סגול וצהוב. מתוקים וקריספיים, מושלמים לחטיפים בריאים ולקישוט צלחות",
      inStock: true,
      premium: true
    },
    {
      id: 21,
      name: "ברוקולי אורגני",
      category: "ירקות",
      price: 11.90,
      unit: "יחידה",
      image: "/img/broccoli.jpg",
      description: "סופר פוד ירוק עשיר בויטמין C, חומצה פולית וסיבים. מושלם לבישול בקיטור, מנות אסייתיות ותבשילים בריאים",
      inStock: true,
      premium: true
    },
    {
      id: 22,
      name: "פלפל צבעוני פרימיום",
      category: "ירקות",
      price: 19.90,
      unit: "אריזת 3 יחידות",
      image: "/img/pepper.jpg",
      description: "שילוב של פלפלים אדומים, צהובים וכתומים במתיקות טבעית גבוהה. מעולים לצלייה, סלטים ומנות צבעוניות ובריאות",
      inStock: true,
      premium: true
    },
    {
      id: 23,
      name: "בטטה כתומה",
      category: "ירקות",
      price: 10.90,
      unit: "קילו",
      image: "/img/sweet-potato.jpg",
      description: "שורש מתוק ומזין עשיר בבטא קרוטן וויטמינים. מושלמת לאפייה, טיגון ומנות חורפיות מחממות. טעם טבעי מתוק ומענג",
      inStock: true,
      premium: false
    },
    {
      id: 24,
      name: "חסה חמאה הידרופונית",
      category: "ירקות עלים",
      price: 9.90,
      unit: "יחידה",
      image: "/img/lettuce.jpg",
      description: "עלים רכים ועדינים בטעם מתוק וללא מרירות. גדלה בשיטה הידרופונית נקייה, מושלמת לסלטים עדינים ולעטיפת מנות",
      inStock: true,
      premium: true
    }, {
      id: 25,
      name: "רוקולה בייבי",
      category: "ירקות עלים",
      price: 8.90,
      unit: "אריזה 100 גרם",
      image: "/img/arugula.jpg",
      description: "עלים צעירים וחריפים במעט עם טעם פלפלי מיוחד. מעולה לסלטים גורמה, פיצות ומנות איטלקיות אותנטיות",
      inStock: true,
      premium: true
    },
    {
      id: 26,
      name: "תרד בייבי",
      category: "ירקות עלים",
      price: 7.90,
      unit: "אריזה 150 גרם",
      image: "/img/spinach.jpg",
      description: "עלים צעירים ורכים עשירים בברזל וחומצה פולית. מושלמים לסלטים טריים, שייקים ירוקים ומנות מבושלות בריאות",
      inStock: true,
      premium: false
    },
    {
      id: 27,
      name: "כרישה צעירה",
      category: "ירקות עלים",
      price: 6.90,
      unit: "אגד",
      image: "/img/leek.jpg",
      description: "עלים ירוקים עשירים בויטמינים ומינרלים. מעולה למרקים, תבשילים ומנות מסורתיות. טעם עדין ומיוחד",
      inStock: true,
      premium: false
    },
    {
      id: 28,
      name: "פטרוזיליה טרייה",
      category: "ירקות עלים",
      price: 4.90,
      unit: "אגד",
      image: "/img/parsley.jpg",
      description: "עשב תיבול ארומטי חיוני למטבח הישראלי. עשיר בויטמין C וברזל. מושלם לסלטים, רטבים וקישוט מנות",
      inStock: true,
      premium: false
    },
    {
      id: 29,
      name: "כוסברה טרייה",
      category: "ירקות עלים",
      price: 5.90,
      unit: "אגד",
      image: "/img/cilantro.jpg",
      description: "עשב תיבול אקזוטי עם ארומה ייחודית. מעולה למנות אסייתיות, מקסיקניות וערביות. מוסיף טעם מיוחד ורענן",
      inStock: true,
      premium: false
    },
    {
      id: 30,
      name: "בזיליקום איטלקי",
      category: "ירקות עלים",
      price: 7.90,
      unit: "עציץ",
      image: "/img/basil.jpg",
      description: "עשב תיבול קלאסי למטבח הים תיכוני. ארומה עזה ומתוקה, מושלם לפסטה, פיצה ורטב פסטו ביתי",
      inStock: true,
      premium: true
    }])
  // #endregion



// כאשר נכנס מנהל פונקציה לעדכון מוצר
const updateProduct = (updatedProduct) => {
  setProducts(prevProducts => 
    prevProducts.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    )
  );
};
//  פונקציה למחיקת מוצר במצב מנהל
const deleteProduct = (productId) => {
  setProducts(prevProducts => 
    prevProducts.filter(product => product.id !== productId)
  );
};
// פונקציה לכניסת משתמש למערכת
  const handleLogin = (name,role) => {
    
    setUserName(name);
    setUserRole(role);
    setIsLoggedIn(true);
    
  };
  // פונקציה להתנתקות משתמש מהמערכת
  const handleLogout = () => {
    setUserName("");
    setUserRole("");
    setIsLoggedIn(false);
    setShowLoginPage(false);
    setCart([]);
  };
  // פונקציה להצגת דף כניסה
  const showLogin = () => {
    setShowLoginPage(true);
  };
  // שמירת משתנים גלובליים
  const store = {
    products: products,
    setProducts: setProducts,
    cart: cart,
    userRole: userRole,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
  }
  // אם לא מחובר - הצג דף כניסה רגיל
  if (!isLoggedIn) {
    return (
      <Login 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
        currentUser={userName} 
        isLoggedIn={isLoggedIn} 
      />
    );
  }

  // אם מחובר אבל רוצה לראות דף כניסה - הצג הודעה
  if (showLoginPage) {
    return (
      <Login 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
        currentUser={userName} 
        isLoggedIn={isLoggedIn} 
      />
    );
  }

  return (
    <div className="App">
      <MyProvider value={store}>
      <BrowserRouter>
        <Navbar userName={userName} userRole={userRole} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
          <Route path="/login" element={<Login onLogin={handleLogin} onLogout={handleLogout} />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/ProductInfo/:id" element={<ProductInfo />} />

        </Routes>
      </BrowserRouter>
    </ MyProvider>

    </div >
  );
}

export default App; 
