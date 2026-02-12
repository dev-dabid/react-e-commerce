import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AccountLayout = () => {
  return (
    <main>
      <Header />
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default AccountLayout;
