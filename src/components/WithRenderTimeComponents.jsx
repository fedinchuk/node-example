import withRenderTime from "./withRenderTime";
import Footer from "./Footer";
import { CounterRedux } from "./CounterRedux";
import Joke from "./Joke";
import Posts from "./Posts";

const FooterWithRenderedTime = withRenderTime(Footer);
const CounterReduxWithRenderTime = withRenderTime(CounterRedux);
const JokeWithRenderedTime = withRenderTime(Joke);
const PostsWithRenderedTime = withRenderTime(Posts);

export {
  FooterWithRenderedTime,
  CounterReduxWithRenderTime,
  JokeWithRenderedTime,
  PostsWithRenderedTime,
};
