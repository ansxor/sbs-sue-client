import React from "react";
import { Link } from "react-router-dom";
import "./CategoryViewItem.css";

function ContentItem(props) {
  return (
    <Link to={`/sbs-sue-client/page/${props.id}`} style={{
      textDecoration: "none"
    }}>
      <button onClick={() => props.clickEvent(props.id)}>
        <i className="fa fa-file"></i> {props.name}
      </button>
    </Link>
  );
}

export default ContentItem;
