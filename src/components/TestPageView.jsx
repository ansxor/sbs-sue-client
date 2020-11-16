import React, { useEffect, useState } from "react";

function TestPageView(props) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(
      `https://newdev.smilebasicsource.com/api/Content?Ids=${props.id}`
    )
      .then(res => res.json())
      .then(data => {
        const page = data[0]
        setContent(page.content)
      })
      .catch(err => console.error(err));
    setContent(props.id);
  }, [props.id]);

  return <div style={{
    width: "100%",
    height: "100%"
  }}>{content}</div>;
}

export default TestPageView;
