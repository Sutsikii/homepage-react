import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Works } from "./pages/works/Works";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="works" element={<Works />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
