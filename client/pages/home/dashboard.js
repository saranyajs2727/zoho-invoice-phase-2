import Suma1 from "../../Components/HomeItems/Suma1";
import Dashboard_2 from "../../Components/HomeItems/DashBoard_2";
import { useEffect } from "react";
import Router from "next/router";
const Dashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const company = JSON.parse(localStorage.getItem("company"));
    console.log(company);
    if (!token) {
      Router.replace("/sign-in").then((result) => Router.reload());
    }
  }, []);
  return (
    <>
      <Suma1 />
      <Dashboard_2 />
    </>
  );
};
export default Dashboard;
