import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import NavbarComponent from './Components/Navbar';
import SignupForm from './pages/SignupForm';
import PartnerType from './pages/PartnerType';
import OnboardingContainer from './pages/OnboardingContainer';
import PartnerDashboard from './pages/PartnerDashboard/PartnerDashboard';


function App() {

  return (
    <>
      <NavbarComponent />
      <div className='mt-5'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/partner-type' element={<PartnerType />} /> */}
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/onboarding/*' element={<OnboardingContainer />} />
            <Route path='/partner-dashboard/*' element={<PartnerDashboard />}></Route>

          </Routes>
          <ToastContainer />
        </Router>
      </div>
    </>
  );
}

export default App;
