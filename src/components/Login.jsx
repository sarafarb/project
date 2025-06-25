  import { useState } from 'react'

  const Login = ({ onLogin, onLogout }) => {
      const [userName, setUserName] = useState("");
      const [password, setPassword] = useState("");
      const [showAdminLogin, setShowAdminLogin] = useState(false);
      const [error, setError] = useState("");

      const ADMIN_PASSWORD = "שרה"; // סיסמת המנהל

      // כניסה רגילה (הטופס המקורי)
      const sendName = () => {
          if (userName) {
              onLogin(userName, "user");
          }
      }
      // כניסה כאורח
      const guestLogin = () => {
          onLogin("אורח", "guest");
      }

      // כניסה כמנהל
      const adminLogin = () => {
          setError("");
          if (password !== ADMIN_PASSWORD) {
              setError("סיסמה שגויה");
              return;
          }
          onLogin("מנהל", "admin");
      }
    //   התנתקות ידנית
    const handleLogout = () => {
        if (onLogout && typeof onLogout === 'function') {
            onLogout();
        }
    }
    

      return (
          <div className="login-container">
              <div className="login-box">
                  <h2>כניסה לחנות</h2>
                
                  {/* הטופס המקורי או טופס מנהל */}
                  {!showAdminLogin ? (
                      <div>
                          <input 
                              type="text" 
                              placeholder='הכנס שם משתמש' 
                              value={userName} 
                              onChange={(n) => { setUserName(n.target.value) }} 
                          />
                          <input 
                              type="password" 
                              placeholder='הכנס סיסמא' 
                              value={password} 
                              onChange={(n) => { setPassword(n.target.value) }} 
                          />
                          <button onClick={sendName}>כניסה</button>
                      </div>
                  ) : (
                      // טופס כניסה למנהל - רק סיסמה
                      <div>
                          <h3>מצב מנהל</h3>
                          <input 
                              type="password" 
                              placeholder='הכנס סיסמת מנהל' 
                              value={password} 
                              onChange={(n) => { setPassword(n.target.value) }} 
                          />
                          <button onClick={adminLogin}>כניסה</button>
                          {error && <div className="error-message">{error}</div>}
                      </div>
                  )}

                  {/* הקישורים למטה */}
                  <div className="login-links">
                      <hr />
                      {!showAdminLogin ? (
                          <div>
                              <a href="#" onClick={(e) => { e.preventDefault(); guestLogin(); }}>
                                  כניסה כאורח
                              </a>
                              <span> | </span>
                              <a href="#" onClick={(e) => { e.preventDefault(); setShowAdminLogin(true); }}>
                                  כניסה כמנהל
                              </a>
                        

                          </div>
                      ) : (
                          <div>
                              <a href="#" onClick={(e) => { e.preventDefault(); setShowAdminLogin(false); setError(""); setPassword(""); }}>
                                  חזור לכניסה רגילה
                              </a>
                           
                          </div>
                      )}
                  </div>
              </div>
          </div>
      )
  }

  export default Login