import React, { memo, useState } from "react";
import "./TabList.css";
import TabButton from "./TabButton.jsx";

function TabList(props) {
  const [ selectedTab, setSelectedTab ] = useState("upload")
  const iconList = ["upload", "list-alt", "folder", "heart", "user"];

  function selectEvent(icon) {
    setSelectedTab(icon)
    if (props.selectEvent)
      props.selectEvent(icon)
 }

  return (
    <div className="tabList">
      {iconList.map((i) => (
        <TabButton key={i} selectEvent={selectEvent} icon={i} selected={i === selectedTab ? true : false}/>
      ))}
    </div>
  );
}

export default memo(TabList);
