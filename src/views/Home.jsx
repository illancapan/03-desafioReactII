import NavBar from "../components/navBar/NavBar";
import ImagesLogo from '../assets/img/pokemon-logo.png';
// import { BrowserRouter } from 'react-router-dom'
const Home = () => {
  return (
    <>
      < NavBar />

      <div className="container text-center">
        <h1>Bienvenido Maestro pokemon</h1>
        <img 
          className="w-50"
          src={ImagesLogo} 
          alt="Pokemon Logo" 
        />
      </div>
    </>
  );
}
export default Home;
