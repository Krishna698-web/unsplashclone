import "./App.css";
import SearchBar from "./Components/searches/SearchBar";
import PhotosCollection from "./Components/Photos/PhotosCollection";
import RandomCollectoin from "./Components/Photos/RandomCollectoin";

const App = () => {
  return (
    <div>
      <SearchBar />
      <PhotosCollection />
      <RandomCollectoin />
    </div>
  );
};

export default App;
