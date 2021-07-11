import { useEffect, useState } from "react";
import useFetch from "./UseFetch";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [data, error, status] = useFetch(
    `https://rickandmortyapi.com/api/character/`
  );

  useEffect(() => {
    data && setCharacters(data.results);
  }, [data]);

  return (
    <div>
      <h1>Gallery</h1>
      {status === "success" &&
        characters.map((character) => {
          return <img src={character.image} alt={character.name} width={128} />;
        })}
      {status === "loading" && <div>Loading</div>}
      {status === "error" && <div>An error occurred</div>}
    </div>
  );
};

export default Gallery;
