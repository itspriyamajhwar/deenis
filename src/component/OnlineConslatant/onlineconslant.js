import React from "react";
import { useNavigate } from "react-router-dom";
import "./onlineconslant.css";

function OnlineConsultant() {
  const navigate = useNavigate();

  return (
    <section id="onlineconsultant" className="section" aria-labelledby="consultant-heading">
      <h1 id="consultant-heading">Online Legal Consultation Services</h1>
      <p className="intro-text">
        Experience seamless and professional online legal consultations for a wide range of legal issues. Our experts are here to help you with timely advice, tailored to your unique needs.
      </p>

      {/* Consultation Cards */}
      <div className="container swiper">
        <div className="card-wrapper">
          <ul className="card-list swiper-wrapper">
            {[
              {
                title: "Divorce & Matrimonial Issues",
                description:
                  "Get expert advice on divorce and matrimonial matters, tailored to local laws and requirements.",
                image: "https://th.bing.com/th/id/OIP.RhmqjoUAuQQtUU7bwj3plAHaEn?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              },
              {
                title: "Property Disputes",
                description:
                  "Resolve property ownership, usage, or division disputes effectively with legal guidance.",
                image: "https://newdirectionfamilylaw.com/wp-content/uploads/2020/11/Resolving-Property-Disputes-When-a-Marriage-Ends.jpg",
              },
              {
                title: "Employment & Salary Issues",
                description:
                  "Address disputes over unpaid wages, incorrect payments, or employment rights confidently.",
                image: "https://tse4.mm.bing.net/th?id=OIP.qCWixUtkOJcKKSvc5gTYXgHaE7&pid=Api&P=0&h=180",
              },
              {
                title: "Debt Recovery (NBFC/Bank)",
                description:
                  "Navigate debt recovery processes with clarity, empathy, and compliance.",
                image: "https://th.bing.com/th/id/OIP.HZOkyJ2SgnAo1vWspu-jjQHaC9?w=311&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              },
              {
                title: "Criminal Matters",
                description:
                  "Get assistance with legal defense or prosecution in criminal matters.",
                image: "https://tse4.mm.bing.net/th?id=OIP.GXLeGqRmAPdso-nLx9KymQHaEO&pid=Api&P=0&h=180",
              },
              {
                title: "Family Disputes",
                description:
                  "Find solutions to family disputes with compassionate and expert legal advice.",
                image: "https://th.bing.com/th/id/OIP.zM7vtyB67SN0MMb4aLMbdAHaDg?w=292&h=166&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              },
            ].map((card, index) => (
              <li className="card-item swiper-slide" key={index}>
                <a href="/book-consultant" className="card-link">
                  <img
                    src={card.image}
                    alt={`Image for ${card.title}`}
                    className="card-image"
                    loading="lazy"
                  />
                  <p className="badge">{card.title}</p>
                  <h2 className="card-title">{card.description}</h2>
                  <button className="card-button material-symbols-rounded">
                    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Standard Charges */}
      <div className="about-section">
        <div className="Mobdcontainer">
          <h2>Standard Charges for Legal Consultation</h2>
          <select className="dropdown" aria-label="Select Legal Service">
            <option>Divorce & Matrimonial</option>
            <option>Property Dispute</option>
            <option>Family Dispute</option>
            <option>Employee Salary Issue</option>
            <option>Money Recovery</option>
            <option>Criminal Matter</option>
            <option>Court Marriage</option>
            <option>Other</option>
          </select>
          <section className="pricing-options">
            <p>
              A 30-minute consultation will help identify the material facts, required processes, and necessary documents for your case.
            </p>
            <div className="price-option">
              <input type="radio" name="consultation" id="option1" />
              <label htmlFor="option1">₹599 for 30 mins</label>
            </div>
            <div className="price-option">
              <input type="radio" name="consultation" id="option2" />
              <label htmlFor="option2">₹999 for 60 mins</label>
            </div>
          </section>
          <button
            className="book-btn"
            onClick={() => navigate("/book-consultant")}
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Featured Features */}
      <section>
        <div className="feacontainer">
          <h2>Additional Legal Services</h2>
          <div className="feature">
            <div className="feature-box court-marriage">
              <h3>Court Marriage</h3>
              <p>
                Understand state requirements and complete the process smoothly with expert guidance.
              </p>
              <a href="#contact"><button>Know More</button></a>
            </div>
            <div className="feature-box birth-certificate">
              <h3>Birth Certificate</h3>
              <p>
                Obtain a birth certificate online affordably and enjoy access to essential benefits.
              </p>
              <a href="#contact"><button>Know More</button></a>
            </div>
            <div className="feature-box succession-certificate">
              <h3>Succession Certificate</h3>
              <p>
                Establish the legality of inheritance with a certified succession document.
              </p>
              <a href="#contact"><button>Know More</button></a>
            </div>
          </div>
          <a href="#services" className="view-all">
            View All Features
          </a>
        </div>
      </section>
    </section>
  );
}

export default OnlineConsultant;
