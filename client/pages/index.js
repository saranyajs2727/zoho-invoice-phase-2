import { useEffect } from "react";
import axios from "axios";
import Invoicedetails from "../LandingPage/Invoicedetails";
import AppInfo from "../LandingPage/AppInfo";
import Awards from "../LandingPage/Awards";
import CentreBanner from "../LandingPage/CentreBanner";
import CustomerLoving from "../LandingPage/CustomerLoving";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";
import Otherapps from "../LandingPage/Otherapps";
import State from "../LandingPage/State";
import Cookies from "universal-cookie";
import Router from "next/router";
const cookies = new Cookies();
export function LandingPage() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Router.replace("/home/dashboard").then((result) => Router.reload());
    }
    //localStorage.setItem("token", "whbbebeid3e ejwc ckjxbbxebdiebfebfekd");
    // axios
    //   .get("http://localhost:4000/api/authenticate-user", {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
    axios;
    axios({
      method: "GET",
      url: "https://zoho-invoice-server.vercel.app/api/check-user",
    })
      .then((res) => {
        console.log(res.data);
        const token = cookies.get("accessToken", {
          secure: true,
          httpOnly: true,
        });
        console.log("COOKIE :::" + token);
      })
      .catch(function (err) {
        console.log(err);
      });
    // axios
    //   .get("http://localhost:4000/api/check-user", { withCredentials: true })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  }, []);
  return (
    <>
      <Header />
      <CentreBanner />
      <State />
      <CustomerLoving />
      <Awards />
      <AppInfo />
      <Invoicedetails />
      <Otherapps />
      <Footer />
    </>
  );
}
//export default WithAuth(LandingPage, "/");
export default LandingPage;
