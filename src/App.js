import AboutUs from "./components/AboutUs";
import BlogArticle from "./components/BlogArticle";
import Collection from "./components/Collection";
import CollectionCarousel from "./components/CollectionCarousel";
import FAQ from "./components/FAQ";
import LandingSection from "./components/LandingSection";
import RoadMap from "./components/RoadMap";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div className='bgp'>
      <LandingSection />
      <AboutUs />
      <VideoPlayer />
      <CollectionCarousel />
      <Collection />
      <RoadMap />
      <FAQ />
      <BlogArticle />
      </div>
) }

export default App;
