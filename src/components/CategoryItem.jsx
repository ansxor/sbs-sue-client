import React from "react";
import "./CategoryViewItem.css";

function CategoryItem(props) {
  return (
    <button onClick={() => props.clickEvent(props.id)}>
      <i className="fa fa-folder-open"></i> {props.name}
    </button>
  );
}

export default CategoryItem;
