import './App.css';
import New from './components/New';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {
  return (
    <div className="App">
      <New/>
      <Carousel responsive={responsive}  >

  <img src="https://source.unsplash.com/random/900x700/?fruit" alt="" />
  <img src="https://source.unsplash.com/random/900x700/?Car" alt="" />
  <img src="https://source.unsplash.com/random/900x700/?Girl" alt="" />
  <img src="https://source.unsplash.com/random/900x700/?boy" alt="" />
  <img src="https://source.unsplash.com/random/900x700/?teacher" alt="" />
  
</Carousel>;
   
    </div>
  );
}

export default App;
