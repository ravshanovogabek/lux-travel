import Main from './components/Main/Main';
import About from './components/About/About';
import Areas from './components/Areas/Areas';
import FAQ from './components/FAQ/FAQ';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Advantages from './components/Advantages/Advantages';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Samarkand from './components/Samarkand/Samarkand';


const App = () => (
  <Router>
  <div>
    <Routes>
      <Route path="/samarkand" element={<cd />} />
    </Routes>
    <Main />
    <About/>
    <Advantages/>
    <Areas/>
    <Services/>
    <FAQ/>
    <Contacts/>
    <Footer/>
    
  </div>
  </Router>
);

export default App;
