import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page/home";
import "./style/style.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/section"/>
      </Routes>
    </>
  )
}

export default App
