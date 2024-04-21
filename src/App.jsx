import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
