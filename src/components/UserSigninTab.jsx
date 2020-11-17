import React, { useEffect, useState } from "react";

function UserSigninTab(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function changeUsername(evt) {
    setUsername(evt.target.value);
  }

  function changePassword(evt) {
    setPassword(evt.target.value);
  }

  useEffect(() => {
    if (props.visible === true) {
      props.changeHeader("Sign in");
    }
  }, [props])

  function submitUserInfo(evt) {
    if (username !== "" && password !== "") {
      const requestBody = {
        username: username,
        password: password,
      };
      console.log(requestBody)
      fetch("http://newdev.smilebasicsource.com/api/User/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "plain/text"
        },
        body: JSON.stringify(requestBody)
      })
        .then(res => res.text())
        .then(data => {
          localStorage.setItem("token", data);
          props.setToken(data)
        })
        .catch(err => console.error(err));
    }
  }

  return (
    <div>
        <label>
          Username:
          <br/>
          <input type="text" name="username" value={username} onChange={changeUsername} />
        </label>
        <br/>
        <label>
          Password:
          <br/>
          <input type="password" name="password" value={password} onChange={changePassword} />
        </label>
        <br/>
        <button onClick={submitUserInfo}>Log in</button> 
    </div>
  )
}

export default UserSigninTab;