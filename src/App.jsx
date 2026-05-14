import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
const routes = [
  { path: "/", element: <h1></h1> },
  { path: "/Login", element: <h1></h1> },
  { path: "/dashboard", element: <h1></h1> },
];
function App() {
  const router = useRoutes(routes);

  return (
    <div>
      <div className="text-[72px] text-center">Kaktoos</div>
      {router}
    </div>
  );
}

export default App;
