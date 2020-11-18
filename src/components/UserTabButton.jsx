import React, { useEffect, useState } from "react";

function UserTabButton(props) {
  const [userImg, setUserImg] = useState("");

  function selectOption() {
    if (props.selectEvent) props.selectEvent("user");
  }

  useEffect(() => {
    if (props.usertoken && props.usertoken !== "") {
      fetch("https://newdev.smilebasicsource.com/api/User/me", {
        headers: {
          authorization: `Bearer ${props.usertoken}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          setUserImg(
            `https://newdev.smilebasicsource.com/api/file/raw/${data.avatar}?size=64&crop=true`
          )
        )
        .catch((err) => console.error(err));
    }
  }, [props.usertoken]);

  return (
    <button onClick={selectOption} className={props.selected ? "selected" : ""}>
      {(userImg === "" || props.usertoken === "") ? (
        <i className={`fa fa-user`} />
      ) : (
        <img src={userImg} alt="User Avatar" />
      )}
    </button>
  );
}

export default UserTabButton;
