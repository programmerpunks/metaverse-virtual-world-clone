import AboutUs from "./components/AboutUs";
import Collection from "./components/Collection";
import CollectionCarousel from "./components/CollectionCarousel";
import LandingSection from "./components/LandingSection";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div className='bgp'>
      <LandingSection />
      <AboutUs />
      <VideoPlayer />
      <CollectionCarousel />
      <Collection />
    </div>
  );
}

export default App;
