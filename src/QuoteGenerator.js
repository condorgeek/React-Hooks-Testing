import { useEffect, useState } from "react";
import useFetch from "./UseFetch";

const QuoteGenerator = () => {
  const [character, setCharacter] = useState({
    image: null,
    name: null,
    status: null,
    gender: null
  });
  const [index, setIndex] = useState(80);

  const [data, error, status] = useFetch(
    `https://rickandmortyapi.com/api/character/${index}`
  );

  useEffect(() => {
    data && setCharacter(data);
  }, [data]);

  console.log(data, error, status);
  if (error) {
    return error;
  }

  const randomImage = () => {
    const idx = Math.floor(Math.random() * 400 + 1);
    setIndex(idx);
  };

  return (
    <div>
      <p>
        <button onClick={randomImage}>Next Image</button>
      </p>
      <p>
        {character.name} / {character.gender} / {character.status}
      </p>
      <img src={character && character.image} alt={character.name}></img>
    </div>
  );
};

export default QuoteGenerator;
