import AboutUs from "./components/AboutUs";
import BlogArticle from "./components/BlogArticle";
import Collection from "./components/Collection";
import CollectionCarousel from "./components/CollectionCarousel";
import FAQ from "./components/FAQ";
import LandingSection from "./components/LandingSection";
import RoadMap from "./components/RoadMap";
import VideoPlayer from "./components/VideoPlayer";
import './App.css';
import CoreTeam from './components/CoreTeam';
import Footer from './components/Footer';
import Header from './components/Header';
import Sponsor from './components/Sponsors';
// import HeroCarousel from './components/HeroCarousel';

const App = () => {
  return (
    <div className='bgp'>
      <Header/>
      <LandingSection />
      <AboutUs />
      <CoreTeam/>
      <VideoPlayer />
      <CollectionCarousel />
      <Collection />
      <CoreTeam/>
      <RoadMap />
      <FAQ />
      <BlogArticle />
      <Sponsor />
      <RoadMap/>
      <Footer/>
      </div>
)}


export default App;
