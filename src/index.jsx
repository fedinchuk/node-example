import ReactDOM from "react-dom/client";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import Counter from "./components/CounterOld";
import Joke2 from "./components/Joke2";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <div className="bg-white container mx-auto px-4 dark:bg-gray-900 dark:text-white">
      <BrowserRouter>
        <nav className="bg-gray-800 rounded-lg p-4">
          <ul className="text-white flex flex-wrap justify-center space-x-4">
            <li>
              <Link to="node-example/counter" className="hover:underline">
                Counter
              </Link>
            </li>
            <li>
              <Link to="node-example/joke" className="hover:underline">
                Joke
              </Link>
            </li>
            <li>
              <Link to="node-example/posts" className="hover:underline">
                Posts
              </Link>
            </li>
            <li>
              <Switch
                uncheckedIcon="🌙"
                checkedIcon="🔆"
                width={42}
                height={24}
                checked={isDark}
                onChange={(toggel) => setIsDark(toggel)}
              />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/joke" element={<Joke2 />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
      {/* <Atomic /> */}
      {/* <Counter /> */}
      {/* <StyledComponents /> */}
      {/* <Joke2 /> */}
      {/* <Counter20 /> */}
      {/* <Button /> */}
      {/* <ErrorBoundary>
        <Provider store={store}>
          <UserContext.Provider value={user}>
            <UserProfile />
            <FooterwithLoadingIndicator />
            <Counter />
          </UserContext.Provider>
        </Provider>
      </ErrorBoundary> */}
      {/* <ErrorBoundaries>
        <ErrorCode />
      </ErrorBoundaries> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
