import useFetch from "../hooks/useFetch";
import ClipLoader from "react-spinners/ClipLoader";

export default function Joke() {
  const { data, loading, error } = useFetch(`https://api.chucknorris.io/jokes/random`);

  if (loading) return <ClipLoader color="#00bfff" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Joke: {data.value}</p>
    </div>
  );
}
