import React from "react";
import "./CategoryViewItem.css";

function ContentItem(props) {
  return (
    <button onClick={() => props.clickEvent(props.id)}>
      <i className="fa fa-file"></i> {props.name}
    </button>
  );
}

export default ContentItem;
