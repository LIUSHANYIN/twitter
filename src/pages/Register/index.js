import React, { useState } from "react";
import classnames from "classnames";
import axios from "axios";

import "./index.scss";

import registerInput from "./formInputs";

export default function RegisterPage({ history }) {
  const [values, setValues] = useState({});
  const [previewLink, setPreviewLink] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const link = URL.createObjectURL(file);
    setPreviewLink(link);
    const formData = new FormData();
    formData.append("files", file);
    console.log(formData);
    const uploadResult = await axios.post(
      "http://localhost:3010/auth/avatar",
      formData
    );

    setValues({ ...values, avatar: uploadResult.data.data });
  };

  const handleSubmit = async () => {
    const { phone, password } = values;
    try {
      const registerResult = await axios.post(
        "http://localhost:3010/auth/register",
        values
      );
      console.log(registerResult);

      if (registerResult.data.success) {
        const loginResult = await axios.post(
          "http://localhost:3010/auth/login",
          {
            phone,
            password,
          }
        );
        console.log(loginResult);
        if (loginResult.data.success) {
          const token = loginResult.data.data.token;
          const userId = loginResult.data.data.userId;
          console.log(loginResult);
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("userId", userId);
          history.push("/");
          window.location.reload();
        } else {
          alert("Something is wrong");
        }
      } else {
        alert("soemthing is wrong with register");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-page page">
      <h1>register</h1>
      <form onSubmit={(e) => e.preventDefault()} className="register-form">
        {registerInput.map((input, i) => (
          <div
            key={i}
            className={classnames("input-container", {
              isHalfWidth: input.key === "age" || input.key === "gender",
            })}
          >
            {input.type === "file" ? (
              <div className="file-upload">
                <input
                  type="file"
                  placeholder={input.placeholder}
                  onChange={handleFileUpload}
                />
                <img src={previewLink} alt="Preview" />
              </div>
            ) : (
              <div>
                <input
                  onChange={handleInputChange}
                  type={input.type}
                  name={input.key}
                  placeholder={input.placeholder}
                  list={input.list}
                />
                {input.isList && (
                  <datalist id={input.list}>
                    <option value="Male"></option>
                    <option value="Female"></option>
                  </datalist>
                )}
              </div>
            )}
          </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}
