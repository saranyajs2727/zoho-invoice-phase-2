import React, { useEffect, useState } from "react";
import styles from "../LandingPage/sign_in.module.css";
import Link from "next/link";
import GoogleLoginComponent from "../Components/GoogleLogin";
import FacebookLoginComponent from "../Components/FacebookLogin";
import Router from "next/router";
import axios from "axios";
export const Signin = () => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState();
  const [emailEntered, setEmailEntered] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Router.replace("/home/dashboard").then((result) => Router.reload());
    }
  }, []);
  const signInResponse = (success, data) => {
    console.log("Inside signIn response......");
    if (success) {
      setSuccess(true);
      setData(data);
      console.log(data);
      localStorage.setItem("token", data.accessToken);
      var companyDetails = JSON.parse(data.companyDetails);
      if (companyDetails) {
        localStorage.setItem("company", JSON.stringify(companyDetails));
        Router.replace("/home/dashboard").then((result) => Router.reload());
      } else {
        Router.replace("/organizationsetup");
      }
    }
  };
  const formOnSubmit = (event) => {
    event.preventDefault();
    event.target.signin_btn.disabled = true;
    const email = event.target.email_login.value;
    const password = event.target.password_login.value;
    console.log(`Values are : \n${email}\n${password}\n`);
    axios({
      method: "POST",
      url: "https://zoho-invoice-server.vercel.app/api/login-user",
      data: { email, password },
    }).then((response) => {
      event.target.signin_btn.disabled = false;
      const { success } = response.data;
      if (success) {
        console.log(response.data);
        setSuccess(true);
        setData(response.data);
        const { accessToken, refreshToken, msg, picture, name, email } =
          response.data;
        console.log(
          `Success : ${success},....\n${msg} \n${email}\n${accessToken}\n${refreshToken}\n${name}\n${picture}\n\n`
        );
        var companyDetails = JSON.parse(response.data.companyDetails);
        console.log(companyDetails);
        localStorage.setItem("token", accessToken);
        if (companyDetails) {
          localStorage.setItem("company", JSON.stringify(companyDetails));
          Router.replace("/home/dashboard").then((result) => Router.reload());
        } else {
          Router.replace("/organizationsetup");
        }
      }
    });
  };
  return (
    <div className={styles.background}>
      <div className={styles.signin_container}>
        <div className={styles.signin_box}>
          <div className={styles.zoho_logo}></div>
          <div className={styles.sign_in_div}>
            <form className={styles.login} onSubmit={formOnSubmit}>
              <div className={styles.signin_head}>
                <span id="headtitle">Sign in</span>
                <span id="trytitle"></span>
                <div className={styles.service_name}>
                  to access <span>Invoice</span>
                </div>
                <div className={styles.textbox_div}>
                  <span>
                    <input
                      placeholder="Email address or mobile number"
                      type="email"
                      name="email_login"
                      className={styles.textbox}
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </span>
                </div>
                {emailEntered && (
                  <div className={styles.textbox_div}>
                    <span>
                      <input
                        placeholder="Enter your password"
                        type="password"
                        name="password_login"
                        className={styles.textbox}
                        required={true}
                      />
                    </span>
                  </div>
                )}
                <button
                  disabled={false}
                  className={styles.btn_blue}
                  type={emailEntered ? "submit" : ""}
                  name="signin_btn"
                  onClick={() => {
                    email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
                      ? setEmailEntered(true)
                      : "";
                  }}
                >
                  <span>{emailEntered ? "Login" : "Next"}</span>
                </button>
              </div>
              <div className={styles.forget_pass}>
                <a className={styles.forget_pass}>Forgot Password?</a>
              </div>
            </form>
            <div className={styles.line}></div>
            <div
              className={
                emailEntered
                  ? styles.socialMediaLoginHidden
                  : styles.socialMediaLogin
              }
            >
              <p>Sign in using</p>
              <div className={styles.socialIcons}>
                <GoogleLoginComponent signInResponse={signInResponse} />
                <FacebookLoginComponent signInResponse={signInResponse} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <img
            className={styles.right_container_image}
            src="https://accounts.zoho.com/v2/components/images/passwordless_illustration2x.png"
            alt="img"
          />
        </div>
        <div className={styles.right_container_head}>Passwordless sign-in</div>
        <div className={styles.right_container_para}>
          Move away from risky passwords and experience one-tap access to your
          Zoho account. Download and Install OneAuth.
        </div>
        <a className={styles.right_container_learn_more}> Learn More </a>
      </div>
      <div className={styles.signuplink}>
        Don&apos;t have a Zoho account?
        <a>
          <Link href="/sign-up">Sign Up Now</Link>
        </a>
      </div>
    </div>
  );
};

export default Signin;
