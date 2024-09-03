import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Signup = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="bg-[#DCFCE7] px-40 rounded-lg">
        <h1 className="text-center text-gray-700 tracking-wide font-bold text-5xl my-9 px-9 py-5">
          Create Account
        </h1>
        <div className="flex justify-center mb-6 bg-white p-3 rounded-md">
          <GoogleLogin
            theme="filled_blue"
            shape="rectangular"
            size="medium"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
