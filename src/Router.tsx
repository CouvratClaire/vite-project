import { Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";

function Router() {
  const routes = (
    <Routes>
      <Route key={"/"} path={"/"} element={<Welcome />} />
    </Routes>
  );

  return routes;
}

export default Router;