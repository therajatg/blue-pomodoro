import { Route, Routes } from "react-router-dom";
import { Home, Landing } from "../pages/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export { Router };
