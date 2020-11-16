import React, { memo, useState } from "react";
import "./TabList.css";
import TabButton from "./TabButton.jsx";
import UserTabButton from "./UserTabButton.jsx";

function TabList(props) {
  const [selectedTab, setSelectedTab] = useState("upload");
  const iconList = ["upload", "list-alt", "folder", "heart"];

  function selectEvent(icon) {
    setSelectedTab(icon);
    if (props.selectEvent) props.selectEvent(icon);
  }

  return (
    <div className="tabList">
      {iconList.map((i) => (
        <TabButton
          key={i}
          selectEvent={selectEvent}
          icon={i}
          selected={i === selectedTab ? true : false}
        />
      ))}
      <UserTabButton selectEvent={selectEvent} usertoken={props.usertoken} />
    </div>
  );
}

export default memo(TabList);
