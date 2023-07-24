import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import About from "./component/About";
import Categories from "./component/Categories";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import Home from "./component/Home";

import Navbar from "./component/Navbar";
import Profil from "./component/Profil";
import Dashbord from "./component/Dashbord";
import Register from "./component/Register";
import Services from "./component/Services";
import Spa from "./component/services/Spa";
import Hair from "./component/services/Hair";
import Onglerie from "./component/services/Onglerie";
import Soins from "./component/services/Soins";

import { clientCurrent } from "./redux/userSlice/userSlice";
import { productget } from "./redux/productSlice";
import { reservationget } from "./redux/reservationSlice";


function App() {
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clientCurrent());
    dispatch(productget());
    dispatch(reservationget());
  }, []);


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Register />} />
         <Route path="/spa" element={<Spa />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/soins" element={<Soins />} />
        <Route path="/onglerie" element={<Onglerie />} />
        <Route path="/profil" element={<Profil />} />
       <Route path="/dashbord" element={<Dashbord />} />
       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
