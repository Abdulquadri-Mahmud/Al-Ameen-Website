import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/ContactUs';
import AboutAlmeenEstate from '../pages/AboutAlmeenEstate';
import AboutalmeenIntegratededu from '../pages/AboutalmeenIntegratededu';
import AboutAlmeenMemo from '../pages/AboutAlmeenMemo';
import Testimonial from '../pages/Testimonial';
import AlAmeenIntegratesfaq from '../pages/AlAmeenIntegratesfaq';
import AlAmeenEstateFaq from '../pages/AlAmeenEstateFaq';
import OurHouse from '../pages/OurHouse';
import EstateDesign from '../pages/EstateDesign';

export default function PagesRoutes() {
  return (
    <Router>
        {/* <Header/> */}
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about-al-ameen-estate' element={<AboutAlmeenEstate/>}/>
        <Route path='/about-al-ameen-integrated-edu' element={<AboutalmeenIntegratededu/>}/>
        <Route path='/about-al-ameen-quran-memo' element={<AboutAlmeenMemo/>}/>
        <Route path='/al-ameen-integrated-college-faq' element={<AlAmeenIntegratesfaq/>}/>
        <Route path='/al-ameen-estate-faq' element={<AlAmeenEstateFaq/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ourhouses' element={<OurHouse/>}/>
        <Route path='/estate-design' element={<EstateDesign/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
      </Routes>
    </Router>
  )
}
