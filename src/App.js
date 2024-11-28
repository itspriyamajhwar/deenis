import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/header";
import Home from "./component/Home/home";
import About from "./component/About/about";
import Services from "./component/Services/service";
import Registration from "./component/Registration/registration";
import OnlineConsultant from "./component/OnlineConslatant/onlineconslant";
import BookConsultant from "./component/BookConsultant/BookConsultant";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/footer";
import Popup from "./component/PopUp/popup";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <Router>
      {/* Show the popup at the top level */}
      {isPopupVisible && (
        <Popup
          title="Disclaimer"
          message="As per the rules of the Bar Council of India, law firms are not permitted to solicit work and advertise. By clicking the 'Agree' button and accessing this website. It should not be interpreted as soliciting or advertisement. The firm is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice"
          onClose={handleClosePopup}
        />
      )}

      {/* Header stays persistent across all routes */}
      <Header />

      <Routes>
        {/* Define individual routes */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Registration />
              <OnlineConsultant />
              <Contact />
            </>
          }
        />
        <Route path="/book-consultant" element={<BookConsultant />} />
      </Routes>

      {/* Footer stays persistent across all routes */}
      <Footer />
    </Router>
  );
}

export default App;
