import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Imageslideshow from './Components/Imageslideshow';
import LatestDealsShowcase from './Components/LatestDealsShowcase';

function App() {
  return (
    <div className="App">
      <Header />
      <Imageslideshow />
      <LatestDealsShowcase />
      <Footer />
    </div>
  );
}

export default App;
