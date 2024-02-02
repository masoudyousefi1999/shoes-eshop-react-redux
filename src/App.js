import './App.css';
import Bag from './sections/bag/Bag';
import Featured from './sections/featured/Featured';
import Footer from './sections/footer/Footer';
import Hero from './sections/hero/Hero';
import Highlight from './sections/highlights/Highlight';
import Popular from './sections/popular/Popular';
import TopBar from './sections/top_bar/TopBar';
import TopSale from './sections/top_sales/TopSale';

function App() {
  return (
    <>
    <TopBar />
    <Hero />
    <Popular />
    <Highlight />
    <TopSale />
    <Featured />
    <Footer />
    <Bag />
    </>
  );
}

export default App;
