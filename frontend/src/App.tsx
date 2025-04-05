import './App.css';
import Calendars from './components/CalendarEmbbeder';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';
import Chatbot from './components/chatbot';
import NotFound from './components/pagenotfound';
import HomePage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path ="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;