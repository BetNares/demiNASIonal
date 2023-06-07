import { Routes, Route } from "react-router-dom"
import LandingPage from './Page/auth/LandingPage';
import Prediction from "./Page/auth/PredictionPage";
import brownSpot from "./Page/Artikel/brownspot";
import leafBlast from "./Page/Artikel/leafblast";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="prediction" element={ <Prediction/> } />
        <Route path="brownspot" element={ <brownSpot/> } />
        <Route path="leafblast" element={ <leafBlast/> } />
      </Routes>
    </div>
  )
}

export default App