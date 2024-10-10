import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import NavbarComponent from './Components/Navbar';
import SignupForm from './pages/SignupForm';
import PartnerType from './pages/PartnerType';
import OnboardingContainer from './pages/OnboardingContainer';

function App() {

  return (
    <>
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/partner-type' element={<PartnerType />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/onboarding/*' element={<OnboardingContainer />} />

        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
