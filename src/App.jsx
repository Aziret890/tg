import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
function App() {
  return (
    <div className="mother">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
