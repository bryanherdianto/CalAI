import './App.css';
import Calendars from './components/CalendarEmbbeder';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;