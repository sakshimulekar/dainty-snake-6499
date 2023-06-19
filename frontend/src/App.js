import './App.css';
import Navbar from "./components/Navbar"
import MainRoute from "./components/MainRoute"
import Product from './pages/Productpage';
function App() {
  return (
    <div className="App">

      {/* <MainRoute/> */}
 
      <Navbar/>
      <MainRoute/>
      <Product/>


    </div>
  );
}

export default App;
