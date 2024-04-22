import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import Buscador from './views/Buscador'
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import NotFound from "./views/NotFound";
// import ComponentePrueba from "./components/componentePrueba/ComponentePrueba";

const App = () => {
  return (
    <>
      <PokemonProvider>
        {/* <ComponentePrueba /> */}
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscador" element={<Buscador />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </>
  );
};

export default App;
