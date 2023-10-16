import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import SearchBar from './Components/Body/SearchBar';
import Cards from './Components/Body/Cards';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <SearchBar/>
    <Cards/>
    </div>
  );
}

export default App;
