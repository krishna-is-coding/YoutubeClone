import { Provider } from "react-redux";
import "./App.css";
import Body from "./componets/Body";
import Head from "./componets/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./componets/MainContainer";
import WatchPage from "./componets/WatchPage";
import DemoPage from "./componets/DemoPage";
import DemoPage2 from "./componets/DemoPage2 ";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <DemoPage />
            <DemoPage2 />
          </>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
