import requests from "./requests";
import './App.css';
import Row from './components/Row';
import Banner from "./components/Banner";
import Nav from "./components/Nav/Nav";
//bcbe5ccea9daa11bcc9ec215d01f8424
//https://api.themoviedb.org/3/movie/550?api_key=bcbe5ccea9daa11bcc9ec215d01f8424

function App() {
  return (
    <div className="app">
      <Nav/>
     
      <Banner/>
      <Row title="Netflix originals"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
       
       />


      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Actions Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
