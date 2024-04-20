import Navbar from "../components/navBar/Navbar";
import ImagesLogo from '../assets/img/pokemon-logo.png';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h1>Bienvenido Maestro pokemon</h1>
        <img 
          className="w-75"
          src={ImagesLogo} 
          alt="Pokemon Logo" 
        />
      </div>
    </>
  );
};
export default Home;
