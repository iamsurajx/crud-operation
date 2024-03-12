import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./Components/Create"
import ReadData from "./Components/ReadData";
import Update from "./Components/Update";
const App = () => {

  return (
    <>
      {/* <Create /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<ReadData />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
