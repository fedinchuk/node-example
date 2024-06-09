function ErrorComponent({ error }) {
  return <div>{error && <p>Error: {error.message} </p>}</div>;
}

export default ErrorComponent;
