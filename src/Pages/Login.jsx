import React from "react";
import Button from "../Components/buttons/Button";
import Input from "../Components/Inputs/Input";

const Login = () => {
  return (
    <div className=" w-full h-screen p-5 flex-center flex-col gap-5">
      <div className="w-full h-35 flex-center 2.5 gap-2.5">
        <div className="flex-col-center">
          <h1 className="text-[48px]">کاکتوس</h1>
          <h4>پلتفرم توسعه و آموزش</h4>
        </div>
        <img src="./Images/Logo/Logo.png" alt="" className=" h-full" />
      </div>
      <div className="flex-col-center w-full max-w-75 h-87 p-5 gap-5 ">
        <h4 className="font-bold">ورود / ثبت‌ نام </h4>
        <p className="text-gray-500">لطفا شماره همراه خود را وارد کنید</p>
        <div className="w-full flex-col-center">
          <Input placeholder={"شماره موبایل"} />
          {/* <h5 className="text-red-600"> شماره همراه معتبر نیست !</h5> */}
        </div>
        <Button text={"ورود به کاکتوس"} />
      </div>
    </div>
  );
};

export default Login;
