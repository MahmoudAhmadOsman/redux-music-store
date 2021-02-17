import Footer from "./components/Footer";
import SongDetails from "./components/SongDetails";
import SongList from "./components/SongList";

function App() {
  return (
    <section className="all-song-list">
      <h1 className="text-danger">
        Redux Store - <span className="text-muted">Song List</span>
      </h1>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col">
            <SongList />
          </div>
          <div className="col">
            <SongDetails />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default App;
