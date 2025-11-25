import { BrowserRouter, Route, Routes } from "react-router";
import { NavbarLayout } from "./components/navbar-layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
