// https://evilinsult.com/generate_insult.php?lang=es&type=json

import { useEffect, useState } from "react";
import useFetch from "./UseFetch";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [data, error, status] = useFetch(
    "https://evilinsult.com/generate_insult.php?type=json"
  );

  useEffect(() => {
    data && setQuote(data.insult);
  }, [data]);

  console.log(data, error, status);

  return <div>{quote}</div>;
};

export default QuoteGenerator;
