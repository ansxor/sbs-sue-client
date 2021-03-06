import React, { useState } from "react";
import TabList from "./TabList.jsx";
import UploadTab from "./UploadTab.jsx";
import ActivityTab from "./ActivityTab.jsx";
import CategoryTab from "./CategoryTab.jsx";
import UserSigninTab from "./UserSigninTab.jsx";
import "./Sidebar.css";
import UserInfoTab from "./UserInfoTab.jsx";

function Sidebar(props) {
  const [tab, setTab] = useState("folder");
  const [headerDisplay, setHeaderDisplay] = useState("Loading...")

  function selectEvent(icon) {
    setTab(icon);
  }

  return (
    <div
      className="sidebar"
    >
      <header>
        {headerDisplay}
      </header>
      <div
        style={{
          flex: "1",
          overflow: "auto",
        }}
      >
        <div className={tab !== "upload" ? "hiddenTab" : ""}>
          <UploadTab changeHeader={setHeaderDisplay} visible={tab !== "upload" ? false : true}/>
        </div>
        <div className={tab !== "list-alt" ? "hiddenTab" : ""}>
          <ActivityTab changeHeader={setHeaderDisplay} visible={tab !== "list-alt" ? false : true} />
        </div>
        <div className={tab !== "folder" ? "hiddenTab" : ""}>
          <CategoryTab changePage={props.changePage} changeHeader={setHeaderDisplay} visible={tab !== "folder" ? false : true}/>
        </div>
        <div className={tab !== "user" ? "hiddenTab" : ""}>
          {(props.usertoken === "") ? 
           (<UserSigninTab setToken={props.setToken} changeHeader={setHeaderDisplay} visible={tab !== "user" ? false : true}/>) :
           (<UserInfoTab usertoken={props.usertoken} setToken={props.setToken} changeHeader={setHeaderDisplay} visible={tab !== "user" ? false : true}/>)}
        </div>
      </div>
      <div style={{
      }}>
        <TabList usertoken={props.usertoken} selectEvent={selectEvent} />
      </div>
    </div>
  );
}

export default Sidebar;
