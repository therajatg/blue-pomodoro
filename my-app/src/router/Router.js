import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { Router };
