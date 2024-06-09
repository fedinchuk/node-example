function LoginButton({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
  );
}

export default LoginButton;
