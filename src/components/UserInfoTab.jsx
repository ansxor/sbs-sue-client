import React, { useEffect, useState } from "react";

function UserInfoTab(props) {
  const [username, setUsername] = useState("")

  useEffect(() => {
    if (props.usertoken && props.usertoken !== "") {
      fetch("https://newdev.smilebasicsource.com/api/User/me", {
        headers: {
          authorization: `Bearer ${props.usertoken}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          setUsername(data.username)
        )
        .catch((err) => console.error(err));
    }
  }, [props.usertoken]);

  useEffect(() => {
    if (props.visible === true) {
      props.changeHeader(username)
    }
  }, [props, username])

  function signOut() {
    localStorage.setItem("token", "");
    props.setToken("");
  }

  return (<div>
    Hiya owo
    <button onClick={signOut}>sign out</button>
  </div>)
}

export default UserInfoTab;