import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Login from "./Pages/Login";
const routes = [
  { path: "/", element: <h1></h1> },
  { path: "/Login", element:<Login/> },
  { path: "/dashboard", element: <h1></h1> },
];
function App() {
  const router = useRoutes(routes);

  return (
    <div className="font-Vazir">
      {/* <div className="text-[72px] text-center ">ترخینه</div> */}
      {router}
    </div>
  );
}

export default App;
