import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Reaquest";
function HomeScreen() {
  return (
    <div className="home-screen">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" req={requests.fechNetFlixOriginals}></Row>
      <Row title="Trending Now" req={requests.fetchTrending}></Row>
      <Row title="Top Rated" req={requests.fetchTopRated}></Row>
      <Row title="Action Movies" req={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" req={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" req={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" req={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" req={requests.fetchDocumentaries}></Row>
    </div>
  );
}
export default HomeScreen;
