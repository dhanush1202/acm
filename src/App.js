import NavBar from "./components/NavBar";
import Homepage from './components/Homepage';
import Eventpage from './components/Events/Eventpage';
import Gallery from './components/Gallery';
import { MembershipInfo } from "./components/MembershipInfo";
import { ContactForm } from "./components/ContactUs";
import OurTeam from './components/ourTeam/OurTeam';
import OurTeam1819 from './components/ourTeam/OurTeam1819';
import OurTeam1920 from './components/ourTeam/OurTeam1920';
import OurTeam2021 from './components/ourTeam/OurTeam2021';
import OurTeam2122 from './components/ourTeam/OurTeam2122';
import {Routes, Route} from 'react-router-dom';

import PreLoader  from "./components/PreLoader" 

function App() {

   

  return (
     <div>
     <PreLoader/>
      <NavBar/>
      <div>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/ourTeam" element={<OurTeam/>}/>
      <Route path="/ourTeam2021-22" element={<OurTeam2122/>}/>
      <Route path="/ourTeam2020-21" element={<OurTeam2021/>}/>
      <Route path="/ourTeam2019-20" element={<OurTeam1920/>}/>
      <Route path="/ourTeam2018-19" element={<OurTeam1819/>}/>
      <Route path="/events" element={<Eventpage/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/memberships" element={<MembershipInfo />}/>
      <Route path="/contactUs" element={<ContactForm />}/>
      </Routes>
    </div>
    

  </div>
  );
}

export default App;
