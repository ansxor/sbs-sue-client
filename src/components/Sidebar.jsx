import React, { useState } from "react";
import TabList from "./TabList.jsx";
import UploadTab from "./UploadTab.jsx";
import ActivityTab from "./ActivityTab.jsx";
import CategoryTab from "./CategoryTab.jsx";
import "./Sidebar.css";

function Sidebar(props) {
  const [tab, setTab] = useState("upload");
  const [headerDisplay, setHeaderDisplay] = useState("Loading...")

  function selectEvent(icon) {
    setTab(icon);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "white",
        borderLeft: "1px solid gray"
      }}
    >
      <div
        style={{
          width: "100%",
          paddingTop: "0.5em",
          paddingBottom: "0.5em",
          paddingLeft: "0.5em",
          marginBottom: "0.1em",
          fontSize: "24px",
          backgroundColor: "white",
          borderBottom: "1px solid gray"
        }}
      >
        {headerDisplay}
      </div>
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
      </div>
      <div style={{
      }}>
        <TabList usertoken={props.usertoken} selectEvent={selectEvent} />
      </div>
    </div>
  );
}

export default Sidebar;
