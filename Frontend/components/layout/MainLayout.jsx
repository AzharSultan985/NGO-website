import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main  className="pt-[110px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}