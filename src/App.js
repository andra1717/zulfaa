import React, { useState } from "react";
import { Heart, Home, Book, LogOut } from "lucide-react";

// STYLES (Tidak ada perubahan di sini)
const styles = {
  // Login Styles
  loginContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  loginBox: {
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "1.5rem",
    padding: "2rem",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    width: "100%",
    maxWidth: "400px",
  },
  loginHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  heartIcon: {
    width: "4rem",
    height: "4rem",
    color: "#ec4899",
    margin: "0 auto 1rem",
    animation: "pulse 2s infinite",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#6b7280",
  },
  inputGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "0.5rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    transition: "all 0.2s",
    outline: "none",
  },
  button: {
    width: "100%",
    background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    border: "none",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s",
  },
  error: {
    color: "#ef4444",
    fontSize: "0.875rem",
    textAlign: "center",
    background: "#fef2f2",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  },

  // Main Page Styles
  mainContainer: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)",
    padding: "0 1rem",
  },
  navbar: {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  navContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "4rem",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoText: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#1f2937",
  },
  navButtons: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  navButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    background: "transparent",
    color: "#374151",
    cursor: "pointer",
    transition: "all 0.2s",
    fontSize: "1rem",
  },
  activeNavButton: {
    background: "#ec4899",
    color: "white",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "1.5rem",
  },

  // Home Styles
  heroSection: {
    textAlign: "center",
    padding: "3rem 0",
    marginBottom: "2rem",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 4rem)",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1.5rem",
  },
  heroText: {
    fontSize: "1.125rem",
    color: "#374151",
    lineHeight: "1.7",
    textAlign: "justify",
  },
  photoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  photoColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  photoBox: {
    aspectRatio: "1",
    background: "linear-gradient(135deg, #fce7f3, #e0e7ff)",
    borderRadius: "1rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  photoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s",
  },
  
  // Documentation Styles
  docTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f2937",
    marginBottom: "2rem",
  },
  docGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  docPhotoBox: {
    aspectRatio: "1",
    background: "linear-gradient(135deg, #fef2f2, #f3e8ff)",
    borderRadius: "1rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  loveButtonContainer: {
    textAlign: "center",
    paddingTop: "2rem",
  },
  loveButton: {
    background: "linear-gradient(135deg, #ec4899, #ef4444)",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "2rem",
    border: "none",
    fontSize: "1.125rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s",
  },

  // Animation Styles
  animationOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  animationContent: {
    textAlign: "center",
  },
  bounceEmoji: {
    fontSize: "5rem",
    animation: "bounce 1s infinite",
  },
  heartRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    fontSize: "4rem",
  },
  pulseHeart: {
    animation: "pulse 1s infinite",
  },
  thanksModal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  thanksBox: {
    background: "white",
    borderRadius: "1.5rem",
    padding: "2rem",
    margin: "1rem",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    animation: "bounce 0.5s",
  },
  thanksEmoji: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  thanksTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1rem",
  },
  thanksText: {
    color: "#374151",
    fontSize: "1.125rem",
  },
};

const LoginPage = ({
  username,
  password,
  loginError,
  setUsername,
  setPassword,
  handleLogin,
}) => (
  <div style={styles.loginContainer}>
    <div style={styles.loginBox}>
      <div style={styles.loginHeader}>
        <Heart style={styles.heartIcon} />
        <h1 style={styles.title}>Anniversary Login</h1>
        <p style={styles.subtitle}>Masuk untuk melihat kenangan kita</p>
      </div>
      <div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            placeholder="Masukkan username"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Masukkan password"
          />
        </div>
        {loginError && <div style={styles.error}>{loginError}</div>}
        <button onClick={handleLogin} style={styles.button}>
          Masuk
        </button>
      </div>
    </div>
  </div>
);

const MainPage = ({
  activeTab,
  setActiveTab,
  handleLogout,
  handleLoveClick,
  showLoveAnimation,
  showThanksMessage,
}) => (
  <div style={styles.mainContainer}>
    <nav style={styles.navbar}>
      <div style={styles.navContainer} className="nav-container">
        <div style={styles.logo}>
          <Heart style={{ width: "2rem", height: "2rem", color: "#ec4899" }} />
          {/* PERBAIKAN: Tambahkan className agar bisa ditarget CSS */}
          <span style={styles.logoText} className="logo-text">Anniversary</span>
        </div>
        <div style={styles.navButtons} className="nav-buttons">
          <button
            onClick={() => setActiveTab("home")}
            style={{
              ...styles.navButton,
              ...(activeTab === "home" ? styles.activeNavButton : {}),
            }}
            className="nav-button"
          >
            <Home style={{ width: "1rem", height: "1rem" }} />
            {/* PERBAIKAN: Tambahkan className agar bisa ditarget CSS */}
            <span className="nav-button-text">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("dokumentasi")}
            style={{
              ...styles.navButton,
              ...(activeTab === "dokumentasi" ? styles.activeNavButton : {}),
            }}
            className="nav-button"
          >
            <Book style={{ width: "1rem", height: "1rem" }} />
            {/* PERBAIKAN: Tambahkan className agar bisa ditarget CSS */}
            <span className="nav-button-text">Dokumentasi</span>
          </button>
          <button
            onClick={handleLogout}
            style={{ ...styles.navButton, color: "#ef4444" }}
            className="nav-button"
          >
            <LogOut style={{ width: "1rem", height: "1rem" }} />
            {/* PERBAIKAN: Tambahkan className agar bisa ditarget CSS */}
            <span className="nav-button-text">Logout</span>
          </button>
        </div>
      </div>
    </nav>
    <div style={styles.content}>
      {activeTab === "home" && (
        <div>
          <div style={styles.heroSection}>
            <h1 style={styles.heroTitle}>Happy Anniversary Babe!💕</h1>
            <p style={styles.heroText}>
              Hari ini tepat tiga tahun kita bareng, and honestly, I still can’t
              believe how fast time flies. Tiga tahun mungkin terlihat singkat
              kalau cuma dihitung angka, tapi buat aku, setiap momen yang kita
              lewatin bareng itu priceless. Dari hal-hal kecil yang sederhana
              sampai perjalanan panjang yang bikin kita banyak belajar semua itu
              jadi bagian indah dari cerita kita. Thank you for staying, for
              choosing me every single day, bahkan di saat aku nggak selalu jadi
              orang yang gampang dimengerti. Kamu udah jadi tempat pulang, jadi
              partner ngobrol, jadi sahabat, sekaligus jadi cinta yang nggak
              pernah habis aku syukuri. Kadang aku mikir, how lucky I am to have
              you in my life. Aku tahu kita masih punya banyak halangan di
              depan, tapi aku percaya selama kita saling genggam tangan,
              everything will be okay. Love is not about being perfect, but
              about growing together and I’m so glad it’s with you. Happy 3rd
              Anniversary, sayang. Cheers to more laughs, more adventures, and
              more years together. I love you, always and forever.
            </p>
          </div>
          <div style={styles.photoGrid}>
            <div style={styles.photoColumn}>
              <div style={styles.photoBox} className="photo-box">
                <img src={process.env.PUBLIC_URL + '/img/love1.jpg'} alt="Kenangan 1" style={styles.photoImage} />
              </div>
              <div style={styles.photoBox} className="photo-box">
                <img src={process.env.PUBLIC_URL + '/img/love2.webp'} alt="Kenangan 2" style={styles.photoImage} />
              </div>
            </div>
            <div style={styles.photoColumn}>
              <div style={styles.photoBox} className="photo-box">
                <img src={process.env.PUBLIC_URL + '/img/love3.webp'} alt="Kenangan 3" style={styles.photoImage} />
              </div>
              <div style={styles.photoBox} className="photo-box">
                <img src={process.env.PUBLIC_URL + '/img/love4.jpg'} alt="Kenangan 4" style={styles.photoImage} />
              </div>
               <div style={styles.photoColumn}>
               <div style={styles.photoBox} className="photo-box">
                <img src={process.env.PUBLIC_URL + '/img/love5.jpg'} alt="Kenangan 4" style={styles.photoImage} />
              </div>
                <div style={styles.photoBox} className="photo-box">
                <img src={process.env.PUBLIC_URL + '/img/love4.jpg'} alt="Kenangan 4" style={styles.photoImage} />
              </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "dokumentasi" && (
        <div>
          <h2 style={styles.docTitle}>Dokumentasi Kenangan Kita</h2>
          <div style={styles.docGrid}>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} style={styles.docPhotoBox} className="photo-box">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mine${num}.jpg`}
                  alt={`mine ${num}`}
                  style={styles.photoImage}
                />
              </div>
            ))}
          </div>
          <div style={styles.loveButtonContainer}>
            <button
              onClick={handleLoveClick}
              disabled={showLoveAnimation}
              style={{
                ...styles.loveButton,
                opacity: showLoveAnimation ? 0.5 : 1,
              }}
            >
              💖 Klik Jika Kamu Suka 💖
            </button>
          </div>
          {showLoveAnimation && (
            <div style={styles.animationOverlay}>
              <div style={styles.animationContent}>
                <div style={styles.bounceEmoji}>💕</div>
                <div style={styles.heartRow}>
                  {['❤️', '💖', '💕', '💗', '💝'].map((emoji, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.pulseHeart,
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {showThanksMessage && (
            <div style={styles.thanksModal}>
              <div style={styles.thanksBox}>
                <div style={styles.thanksEmoji}>🥰</div>
                <h3 style={styles.thanksTitle}>
                  Semoga Kita Bahagia Selalu! 💕
                </h3>
                <p style={styles.thanksText}>
                  Terima kasih sayangku sudah bertahan sejauh ini sama mas. i love you manis💕💕💕💕! ✨
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);

const AnniversaryApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isUserLoggedIn") === "true"
  );
  
  const [activeTab, setActiveTab] = useState("home");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showLoveAnimation, setShowLoveAnimation] = useState(false);
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  const handleLogin = () => {
    if (username === "zulfa" && password === "29agustus") {
      localStorage.setItem("isUserLoggedIn", "true");
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Aku Lupa Kalo Usernamenya Itu Nama Kamu sayang!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isUserLoggedIn");
    setIsLoggedIn(false);
  };

  const handleLoveClick = () => {
    setShowLoveAnimation(true);
    setTimeout(() => {
      setShowLoveAnimation(false);
      setShowThanksMessage(true);
      setTimeout(() => {
        setShowThanksMessage(false);
      }, 3000);
    }, 2000);
  };

  const GlobalStyles = () => (
    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.1); }
      }
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          transform: translate3d(0,-30px,0);
        }
        70% {
          transform: translate3d(0,-15px,0);
        }
        90% {
          transform: translate3d(0,-4px,0);
        }
      }
      input:focus {
        border-color: #ec4899 !important;
        box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1) !important;
      }
      .photo-box:hover .photo-image {
        transform: scale(1.1);
      }

      /* ========================================================== */
      /* PERBAIKAN: Aturan CSS untuk layar kecil (HP) */
      /* ========================================================== */
      @media (max-width: 768px) {
        .nav-container {
          padding: 0 1rem; /* Kurangi padding di samping */
        }
        .logo-text {
          display: none; /* Sembunyikan teks "Anniversary" */
        }
        .nav-buttons {
          gap: 0.5rem; /* Kurangi jarak antar tombol */
        }
        .nav-button {
          padding: 0.5rem; /* Buat tombol sedikit lebih kecil */
        }
        .nav-button-text {
          display: none; /* Sembunyikan teks di dalam tombol */
        }
        .photo-grid {
          grid-template-columns: 1fr; /* Buat foto menjadi 1 kolom */
        }
      }
    `}</style>
  );

  return (
    <>
      <GlobalStyles />
      {isLoggedIn ? (
        <MainPage
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleLogout={handleLogout}
          handleLoveClick={handleLoveClick}
          showLoveAnimation={showLoveAnimation}
          showThanksMessage={showThanksMessage}
        />
      ) : (
        <LoginPage
          username={username}
          password={password}
          loginError={loginError}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
    </>
  );
};

export default AnniversaryApp;

