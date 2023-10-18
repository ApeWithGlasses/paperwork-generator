import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Incidents from "./pages/Incidents";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Home/>
    },
    {
      path: "incidents",
      element: <Incidents/>
    }
  ]);

  return (
      <RouterProvider router={router}/>
  )
}

export default App
