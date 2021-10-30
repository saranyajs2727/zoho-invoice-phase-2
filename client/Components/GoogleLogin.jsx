import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

export default function GoogleLoginComponent(props) {
  const responseSuccessGoogle = (response) => {
    console.log(response);
    console.log("Inside Google Login.....");
    axios({
      method: "POST",
      url: "https://zoho-invoice-server.vercel.app/api/login-user/google",
      data: { tokenid: response.tokenId },
    }).then((response) => {
      const { success } = response.data;
      if (success) {
        props.signInResponse(success, response.data);
      }
    });
  };
  const responseFailureGoogle = (response) => {
    console.log("Inside Failure Google response...");
    console.log(response);
    props.signInResponse(false, null);
  };

  return (
    <div>
      <GoogleLogin
        buttonText={<b>Google</b>}
        style={{ backgroundColor: "blue", borderRadius: "10px" }}
        clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
