import "./App.css";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="container">
      <h1 className="text-danger">Redux Store</h1> <hr />
      <SongList />
    </div>
  );
}

export default App;
