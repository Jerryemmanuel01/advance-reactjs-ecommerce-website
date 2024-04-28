import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <ScrollRestoration />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
