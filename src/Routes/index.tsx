import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/utils/layouts/Layout";
import Bolsas from "@/pages/Bolsas";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bolsas" element={<Bolsas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
