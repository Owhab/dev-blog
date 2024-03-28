import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "single",
    element: <Single />,
  },
  {
    path: "write",
    element: <Write />,
  },
]);

function App() {
  return (
    <div className="App">
      <h1>Dev Blog</h1>
      <RouterProvider router={router} />
      <h2>Dev Blog Footer</h2>
    </div>
  );
}

export default App;
