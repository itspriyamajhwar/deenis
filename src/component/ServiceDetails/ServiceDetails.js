import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";
import Contact from "../Contact/Contact";

const serviceData = [
  {
    id: 1,
    image: "https://legalfirm.in/wp-content/uploads/2019/04/Attestation.jpg",
    title: "Documentation and Attestation Services",
    description:
      "Reliable documentation and attestation services for secure, hassle-free authentication of your important documents.",
    date: "November 4, 2021",
    alt: "Estate planning attorney for high-net-worth individual",
  },
  {
    id: 2,
    image: "https://legalfirm.in/wp-content/uploads/2019/04/Attestation.jpg",
    title: "FSSAI Food License & Renewal",
    description:
      "Fast and reliable FSSAI registration and renewal services for businesses of all scales. Get your application code in 7 days and license in 60 days.",
    alt: "FSSAI registration document with seal",
  },
  {
    id: 3,
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Dp88AmlhRjF9h7krYXPvBQHaD3&pid=Api&P=0&h=180",
    title: "Corporate Compliance",
    description:
      "Comprehensive corporate compliance services, including OPC registration, policy drafting, and legal assistance for startups and enterprises.",
    alt: "Corporate compliance policy document",
  },
  {
    id: 4,
    image:
      "https://tse4.mm.bing.net/th?id=OIP.zzQ9q4pAFBw9jc5ysjD1GwHaEp&pid=Api&P=0&h=180",
    title: "GST Registration",
    description:
      "Hassle-free GST registration services tailored for small and large businesses. Ensure compliance with ease.",
    alt: "GST registration certificate",
  },
  {
    id: 5,
    image: "https://www.getmyca.com/images/sliders/partnership%20firm.webp",
    title: "Company/LLP/Partnership Firm Registration",
    description:
      "Efficient company, LLP, and partnership firm registration services. Streamline your business formation process with expert guidance.",
    alt: "Checklist for LLP registration",
  },
  {
    id: 6,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.KDnYeFFTO2YFFA7OvHkq_gHaEK&pid=Api&P=0&h=180",
    title: "Trademark Registration",
    description:
      "Secure your brand identity with our trademark registration services. Register your logo, slogan, or brand name with ease.",
    alt: "Trademark registration document",
  },
  {
    id: 7,
    image:
      "https://tse3.mm.bing.net/th?id=OIP.pARNsim_WRv1C5BEgJBjYwHaDn&pid=Api&P=0&h=180",
    title: "Debt Recovery NBFC/Bank",
    description:
      "Expert debt recovery services for NBFCs and banks, ensuring compliance and effective solutions.",
    alt: "Debt recovery legal documentation",
  },
  {
    id: 8,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.4rbAbsR5MELrFqgjpFPC2AHaEK&pid=Api&P=0&h=180",
    title: "Court Marriage",
    description:
      "Simplify your court marriage process with our legal assistance. Get legally recognized and protected under the law.",
    alt: "Couple submitting court marriage application",
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceData.find((service) => service.id === parseInt(id));

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <p>We couldn't find the service you were looking for. Please explore our other services.</p>
      </div>
    );
  }

  return (
    <div className="service-details">
      <h1 className="service-title">{service.title}</h1>
      <img
        className="service-image"
        src={service.image}
        alt={service.alt}
        loading="lazy"
      />
      <p className="service-description">{service.description}</p>
      <div className="service-meta">
        <h2>Service Details</h2>
        <p>Date: {service.date}</p>
      </div>
      <Contact />
    </div>
  );
};

export default ServiceDetails;
