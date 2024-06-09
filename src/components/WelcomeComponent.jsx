import LoginButton from "./LoginButton";

function WelcomeComponent({ user }) {
  return (
    <div>
      <LoginButton isLoggedIn={user.isLoggedIn} />
      { user.isLoggedIn ? <div>Welcome, {user.name} </div> : null}
    </div>
  );
}

export default WelcomeComponent;
