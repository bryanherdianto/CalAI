import './App.css';
import Calendars from './components/CalendarEmbbeder';
import Homepage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;