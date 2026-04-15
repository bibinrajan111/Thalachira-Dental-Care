import HomeHero from './HomeHero';
import HomeHighlights from './HomeHighlights';
import HomeCTA from './HomeCTA';
import './home.css';

function HomePage() {
  return (
    <div className="home-wrapper">
      <HomeHero />
      <HomeHighlights />
      <HomeCTA />
    </div>
  );
}

export default HomePage;
