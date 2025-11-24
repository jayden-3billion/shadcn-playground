import { BrowserRouter, Route, Routes } from "react-router";
import { SidebarLayout } from "./components/sidebar-layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
