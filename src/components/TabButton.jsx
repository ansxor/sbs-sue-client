import React from "react";

function TabButton(props) {
  function selectOption() {
    if (props.selectEvent) props.selectEvent(props.icon);
  }

  return (
    <button onClick={selectOption} className={props.selected ? "selected" : ""}>
      <i className={`fa fa-${props.icon}`}></i>
    </button>
  );
}

export default TabButton;
