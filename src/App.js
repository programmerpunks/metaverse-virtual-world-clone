import './App.css';
import CoreTeam from './components/CoreTeam';
import Footer from './components/Footer';
import Header from './components/Header';
// import HeroCarousel from './components/HeroCarousel';

function App() {
  return (
    <div>
      {/* <HeroCarousel/> */}
      <Header/>
      <CoreTeam/>
      <Footer/>
    </div>
  );
}

export default App;
