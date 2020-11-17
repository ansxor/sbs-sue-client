import React, { memo, useState } from "react";
import "./TabList.css";
import TabButton from "./TabButton.jsx";
import UserTabButton from "./UserTabButton.jsx";

function TabList(props) {
  const [selectedTab, setSelectedTab] = useState("folder");
  const iconList = ["upload", "list-alt", "folder", "heart"];
  const offlineIconList = ["folder"];

  function selectEvent(icon) {
    setSelectedTab(icon);
    if (props.selectEvent) props.selectEvent(icon);
  }

  return (
    <div className="tabList"
      style={{
        gridTemplateColumns: (props.usertoken === "") ? "1fr 1fr" : "1fr 1fr 1fr 1fr 1fr"
      }}>
      {(props.usertoken !== "") ? iconList.map((i) => (
        <TabButton
          key={i}
          selectEvent={selectEvent}
          icon={i}
          selected={i === selectedTab ? true : false}
        />
      )) : offlineIconList.map((i) => (
        <TabButton
          key={i}
          selectEvent={selectEvent}
          icon={i}
          selected={i === selectedTab ? true : false} />
      ))}
      <UserTabButton selected={"user" === selectedTab ? true : false} selectEvent={selectEvent} usertoken={props.usertoken} />
    </div>
  );
}

export default memo(TabList);
