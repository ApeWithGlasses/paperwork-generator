import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Incidents from "./pages/Incidents";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <NotFound/>
    },
    {
      path: "/incidents",
      element: <Incidents/>,
      errorElement: <NotFound/>
    }
  ]);

  return (
      <RouterProvider router={router}/>
  )
}

export default App
