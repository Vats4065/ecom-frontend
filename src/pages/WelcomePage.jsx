import React from "react";
import { Link } from "react-router-dom";
const WelcomePage = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundImage: 'url("car-image.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
    header: {
      backgroundColor: "#f8f9fa",
      padding: "10px 0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    logo: {
      height: "40px",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    nav: { display: "flex", justifyContent: "space-between", width: "100%" },
    navLink: {
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
    },
    signupBtn: {
      backgroundColor: "#4f46e5",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
    },
    mainContent: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "80px",
    },
    welcomeMessage: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      padding: "40px",
      borderRadius: "10px",
      textAlign: "center",
      maxWidth: "400px",
      width: "90%",
      margin: "0 auto",
    },
    h1: { margin: "0 0 20px 0", color: "white", fontSize: "28px" },
    appName: { color: "white", fontSize: "24px", margin: "10px 0" },
    convenience: { color: "#4f46e5", fontStyle: "italic", fontSize: "18px" },
    progressBar: { marginBottom: "20px" },
    progressText: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
      fontSize: "14px",
      color: "#fff",
    },
    progressTrack: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      height: "10px",
      borderRadius: "5px",
      overflow: "hidden",
    },
    progressFill: {
      backgroundColor: "#4f46e5",
      height: "100%",
      width: "100%",
    },
  };
  return (
    <div style={styles.body}>
      <div style={styles.mainContent}>
        <div style={styles.welcomeMessage}>
          <div style={styles.progressBar}>
            <div style={styles.progressText}>
              <span>Step 7 of 7</span>
              <span>100%</span>
            </div>
            <div style={styles.progressTrack}>
              <div style={styles.progressFill}></div>
            </div>
          </div>
          <h1 style={styles.h1}>
            Thank You!
            <br />
            Welcome Aboard.
          </h1>
          <p style={styles.appName}>MyGariApp</p>
          <p style={styles.convenience}>convenience</p>
          <Link to="/" className="text-decoration-none text-light">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
