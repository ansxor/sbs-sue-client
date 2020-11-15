import React, { useState } from "react";
import TabList from "./TabList.jsx";
import UploadTab from "./UploadTab.jsx";
import ActivityTab from "./ActivityTab.jsx";
import CategoryTab from "./CategoryTab.jsx";
import "./Sidebar.css";

function Sidebar(props) {
  const [tab, setTab] = useState("upload");

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
      }}
    >
      <div
        style={{
          flex: "1",
          overflow: "auto",
        }}
      >
        <div className={tab !== "upload" ? "hiddenTab" : ""}>
          <UploadTab />
        </div>
        <div className={tab !== "list-alt" ? "hiddenTab" : ""}>
          <ActivityTab />
        </div>
        <div className={tab !== "folder" ? "hiddenTab" : ""}>
          <CategoryTab />
        </div>
      </div>
      <div>
        <TabList selectEvent={selectEvent} />
      </div>
    </div>
  );
}

export default Sidebar;
