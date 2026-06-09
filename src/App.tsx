import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserForm from "./components/UserForm";
import UseContext from "./components/context/useThemeContext";
import UseWindows from "./components/UseWindows";
import Timer from "./components/Timer";
import Layout from "./components/common/Layout";
import User from "./components/User";
import Error from "./components/common/Error";
import Home from "./components/Home";
import ProtechedRoute from "./components/common/ProtechedRoute";
import SearchParams from "./components/SearchParams";
import Counter from "./components/features/Counter";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import Grid from "./components/css/Grid";
import Position from "./components/css/Position";
import Animation from "./components/css/Animation";
import MachineCoding from "./components/machine-coding/MachineCoding";
import Todos from "./components/machine-coding/Todos";
import HolyGrail from "./components/machine-coding/HolyGrail";
import Tabs from "./components/machine-coding/Tabs";
import Accordion from "./components/machine-coding/Accordion";
import StarRating from "./components/machine-coding/StarRating";
import Carousel from "./components/machine-coding/Carousel";
import Pagination from "./components/machine-coding/Pagination";
import InfiniteScroll from "./components/machine-coding/InfiniteScroll";
import ProgressBar from "./components/machine-coding/ProgressBar";
import ConfigColorBoxes from "./components/machine-coding/ConfigColorBoxes";
import PostWithComments from "./components/machine-coding/PostWithComments";
import PostWithNestedComments from "./components/machine-coding/PostWithNestedComments";
import Tictactoe from "./components/machine-coding/Tictactoe";
import MatchSimilarTiles from "./components/machine-coding/MatchSimilarTiles";
import ConfigDrivenForm from "./components/machine-coding/ConfigDrivenForm";
import ToastContainer from "./components/machine-coding/ToastProvider/ToastContainer";
import Users from "./components/machine-coding/ToastProvider/User";
import { ToastProvider } from "./context/toastContext";
import NestedFolder from "./components/machine-coding/NestedFolder";
import NestedCheckbox from "./components/machine-coding/NestedCheckbox";
import OtpInput from "./components/machine-coding/OtpInput";
import AutoComplete from "./components/machine-coding/AutoComplete";

function App() {
  const windowSize = UseWindows();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            { path: "grid", element: <Grid /> },
            { path: "position", element: <Position /> },
            { path: "animation", element: <Animation /> },
            { path: "signup", element: <h1>Signup page</h1> },
            { path: "params", element: <SearchParams /> },
            {
              path: "machine-coding",
              element: <MachineCoding />,
              children: [
                { path: "todos", element: <Todos /> },
                { path: "holy-grail", element: <HolyGrail /> },
                { path: "tabs", element: <Tabs /> },
                { path: "accordion", element: <Accordion /> },
                { path: "star-rating", element: <StarRating /> },
                { path: "carousel", element: <Carousel /> },
                { path: "pagination", element: <Pagination /> },
                { path: "infinite-scroll", element: <InfiniteScroll /> },
                { path: "progress-bar", element: <ProgressBar /> },
                { path: "config-color-boxes", element: <ConfigColorBoxes /> },
                { path: "post-with-comments", element: <PostWithComments /> },
                {
                  path: "post-with-nested-comments",
                  element: <PostWithNestedComments />,
                },
                { path: "tic-tac-toe", element: <Tictactoe /> },
                { path: "match-similar-tiles", element: <MatchSimilarTiles /> },
                { path: "config-driven-form", element: <ConfigDrivenForm /> },
                { path: "toast", element: <Users /> },
                { path: "nested-folder", element: <NestedFolder /> },
                { path: "nested-checkbox", element: <NestedCheckbox /> },
                { path: "otp-input", element: <OtpInput /> },
                { path: "auto-complete", element: <AutoComplete /> },
              ],
            },
          ],
        },
        { path: "/timer", element: <Timer /> },
        {
          path: "/user/:id",
          element: (
            <ProtechedRoute>
              <User />
            </ProtechedRoute>
          ),
        },
        { path: "/contact", element: <UserForm /> },
        { path: "/counter", element: <Counter /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <ToastProvider>
        <UseContext>
          <>
            <RouterProvider router={router} />
            <ToastContainer />
          </>
        </UseContext>
      </ToastProvider>
    </Provider>
  );
}

export default App;
