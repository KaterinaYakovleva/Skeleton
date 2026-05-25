import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
