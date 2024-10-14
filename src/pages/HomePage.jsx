import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (index < text.length) {
          setDisplayText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsTyping(false), 1000);
        }
      } else {
        if (index > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setTimeout(() => setIsTyping(true), 1000);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [index, isTyping, text]);

  return <span className="typewriter">{displayText}</span>;
};

const TransportSection = ({ onPartnerClick }) => {
  return (
    <section className="transport-section">
      <div className="section-overlay"></div>
      <div className="transport-content">
        <h1 className="main-title">
          <TypewriterText text="LET'S GET YOU" />
          <br />
          <span className="highlight">
            <TypewriterText text="ON THE ROAD" />
          </span>
        </h1>

        <button onClick={() => onPartnerClick()} className="transport-btn">
          Partner with Us
        </button>
      </div>
    </section>
  );
};

const PartnerWithUsSection = ({ onCategoryClick }) => {
  const categories = [
    {
      id: "mechanic",
      name: "Mechanic",
      icon: "Images/Icons/MechanicI.png",
      type: "autoService",
    },
    {
      id: "transport",
      name: "Transport Provider",
      icon: "Images/Icons/Transporter2I.png",
      type: "transport",
    },
    {
      id: "garage",
      name: "Garage Services",
      icon: "Images/Icons/Garage2I.png",
      type: "autoService",
    },
    {
      id: "emergency",
      name: "Road Emergency Responder",
      icon: "Images/Icons/EmergencyI.png",
      type: "autoService",
    },
    {
      id: "parts",
      name: "Car Parts",
      icon: "Images/Icons/SparepartsI.png",
      type: "vendor",
    },
    {
      id: "other",
      name: "Other Car Service Providers",
      icon: "Images/Icons/OthersI.png",
      type: "autoService",
    },
  ];

  return (
    <section className="partner-section">
      <div className="section-overlay"></div>
      <div className="partner-content">
        <h2 className="section-title">Partner with Us</h2>
        <p className="section-subtitle">CHOOSE A CATEGORY</p>
        <div className="category-grid">
          {categories.map((category) => (
            <Card
              variant="top"
              key={category.id}
              className="category-btn grid bg-body text-center bg-transparent border-0"
              onClick={() => onCategoryClick(category.type)}
            >
              <Card.Body>
                <Card.Img
                  src={category.icon}
                  alt={category.name}
                  className="category-icon "
                />

                <Card.Text className=" card-text text-white">
                  {category.name}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="social-links">
        <a href="#" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="footer-logo"></div>
    </section>
  );
};

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-section">
      <div className="section-overlay"></div>
      <div className="contact-content text-center">
        <h2 className="section-title mb-5">GET IN TOUCH</h2>
        <div className="contact-grid text-center">
          <div className="contact-item">
            <h3 className="contact-subtitle">Mailing Address</h3>
            <p>49853, Any City</p>
            <p>Nairobi, Kenya</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-subtitle">Email Address</h3>
            <p>hello@mygariapp.com</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-subtitle">Phone Number</h3>
            <p>(254)705489008</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-subtitle">Socials</h3>
            <p>@MyGariApp</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/partner-dashboard/dashboard")}
          className="dashboard-btn text-center mt-5 btn btn-light"
        >
          Go to Dashboard
        </button>
      </div>
    </section>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  const startOnboarding = (categoryType) => {
    navigate(`/onboarding/partner-type?preselect=${categoryType}`);
  };

  return (
    <div className="mt-3">
      <TransportSection onPartnerClick={() => startOnboarding()} />
      <PartnerWithUsSection onCategoryClick={startOnboarding} />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
