import './App.css'
import ScoresPage from './pages/ScoresPage';
import UsePage from './pages/UsePage';
import Employeepage from './pages/Employeepage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/score" element={<ScoresPage/>}/>
        <Route path="/user" element={<UsePage/>}/>
        <Route path="/employee" element={<Employeepage/>}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
