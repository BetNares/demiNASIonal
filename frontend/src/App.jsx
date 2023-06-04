import { Routes, Route } from "react-router-dom"
import LandingPage from './Page/auth/LandingPage';
import Prediction from "./Page/auth/PredictionPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="prediction" element={ <Prediction/> } />
      </Routes>
    </div>
  )
}

export default App