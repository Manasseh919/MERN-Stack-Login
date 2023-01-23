import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation} from "../helper/validate";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex  justify-center items-center h-screen">
        <div className={styles.glass} style={{width:'70%'}}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new Password
            </span>
          </div>

          <form className="pt-20" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center gap-3 textbox">
              <input
                {...formik.getFieldProps("password")}
                type="password"
                className={styles.textbox}
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_pwd")}
                type="password"
                className={styles.textbox}
                placeholder="Repeat Password"
              />
              <button type="submit" className={styles.btn}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
