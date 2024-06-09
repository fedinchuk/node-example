import ClipLoader from "react-spinners/ClipLoader";
import useFetch from "../hooks/useFetch";

export default function Joke2() {
  const { data, loading, error } = useFetch(
    "https://api.chucknorris.io/jokes/random",
  );

  if (loading) return <ClipLoader color="red" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Joke: {data.value}</p>
    </div>
  );
}
