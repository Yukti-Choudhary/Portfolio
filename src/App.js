import "./App.css";
import Home from "./components/home";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Project from "./components/project";
import Skills from "./components/skills";
import Experience from "./components/experience";

function App() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/project", element: <Project /> },
      { path: "/experience", element: <Experience /> },
      { path: "/skills", element: <Skills /> },
    ],
  },
]);

export default appRouter;
