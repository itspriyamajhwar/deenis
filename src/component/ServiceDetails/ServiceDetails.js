import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";
import Contact from "../Contact/Contact";

const serviceData = [
    {
        id: 1, // Add a unique ID for each service
        image: "https://legalfirm.in/wp-content/uploads/2019/04/Attestation.jpg",
        title: "Documentation and Attestation Services",
        description: "Reliable documentation and attestation services for secure, hassle-free authentication of your important documents.",
        date: "November 4, 2021",
        alt: "Estate planning attorney for high-net-worth individual",
    },
  {
    id: 2,
    title: "FSSAI Food License & Renewal",
    description: `
      Get any of the 3 types of FSSAI registration:
      - Basic Registration: For Sales < 12 lakh/year
      - State Registration: For Sales of 12 lakh – 2 crore/year
      - Central Registration: For Sales > 2 crore/year
      FSSAI application code in 7 days & license in 60 days.
      
      Fastest & Simple Process. 100% Customer Satisfaction Service.
      
      Lowest Charges. 24*7 Support Team Help. Handle All Legal Work by Our Team.
      
      No Extra Charges. Hassle Free Service. 1Lakh+Happy Client Across India. 20% Offer Now.
      
      FSSAI Registration for: milk vendor, export, tea shop, restaurant, chicken shop, sweet shop, bakery, hotel, grocery store, distributor.
    `,
    image: "https://legalfirm.in/wp-content/uploads/2019/04/Attestation.jpg",
  },
  {
    id: 3,
    image: "https://tse4.mm.bing.net/th?id=OIP.Dp88AmlhRjF9h7krYXPvBQHaD3&pid=Api&P=0&h=180",
    title: "Corporate Compliance",
    description: "The term OPC Registration likely refers to the process of registering as a One Person Company (OPC), a specific type of business entity in several countries, most notably India.",
    
    date: "October 25, 2021",
    alt: "Corporate compliance policy document outlining ethical standards and procedures",
},
{
    id: 4,
    image: "https://tse4.mm.bing.net/th?id=OIP.zzQ9q4pAFBw9jc5ysjD1GwHaEp&pid=Api&P=0&h=180",
    title: "GST Registration",
    description: "Online Legal India can flawlessly meet GST compliance for your business. Register GST with us and experience the difference.",
    date: "October 25, 2021",
    alt: "List of documents needed for GST registration including PAN, Aadhar, and proof of address.",
},
{
  "id": 5,
  "image": "https://www.getmyca.com/images/sliders/partnership%20firm.webp",
  "title": "Company/LLP/Partnership Firm Registration",
  "description": "We have a team of experienced professionals to handle the entire registration process for your Company, LLP, or Partnership Firm. Our services include filing all necessary documentation online through the ROC (Registrar of Companies) portal, ensuring compliance with legal and regulatory requirements. From name reservation to obtaining the Certificate of Incorporation, we simplify the process and relieve you of any burden. Our experts also assist in preparing partnership deeds, drafting MOAs/AOAs, and securing necessary approvals. Whether you're starting a new venture or formalizing an existing one, we ensure a seamless registration experience. Click to learn more.",
  "date": "November 4, 2021",
  "alt": "Checklist of documents needed for LLP registration including PAN and address proof."
},

{
    id: 6,
    image: "https://tse2.mm.bing.net/th?id=OIP.KDnYeFFTO2YFFA7OvHkq_gHaEK&pid=Api&P=0&h=180",
    title: "Trademark Registration",
    description: "Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration services.",
    date: "October 30, 2021",
    alt: "Completed trademark registration application form for Brand",
},
{
    id: 7,
    image: "https://tse3.mm.bing.net/th?id=OIP.pARNsim_WRv1C5BEgJBjYwHaDn&pid=Api&P=0&h=180",
    title: "Debt Recovery NBFC/Bank",
    description: "Debt recovery content for NBFCs and banks should prioritize clarity, empathy, and compliance.",
    date: "October 25, 2021",
    alt: "Debt recovery letter template outlining overdue payment details",
},
{
    id: 8,
    image: "https://tse1.mm.bing.net/th?id=OIP.4rbAbsR5MELrFqgjpFPC2AHaEK&pid=Api&P=0&h=180",
    title: "Court Marriage",
    description: "Court marriage is a straightforward legal process that provides both parties with the benefits of a legally recognized marriage, offering protection under law.",
    date: "October 25, 2021",
    alt: "Couple submitting their court marriage application at the registrar's office",
},
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceData.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-details">
      <h1>{service.title}</h1>
      <img src={service.image} alt={service.title} />
      <p>{service.description}</p>
      
      <Contact/>
      </div>
    
  );
};

export default ServiceDetails;
