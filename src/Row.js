import "./Row.css";
import { useEffect, useState } from "react";
import axios from "./axios";

function Row({ title, req, isLarge = false }) {
  const [movies, setMovie] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(req);
      setMovie(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLarge && "row_posterlarge"}`}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
export default Row;
