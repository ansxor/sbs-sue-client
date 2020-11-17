import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Parse from "../parse.js"

function TestPageView(props) {
  const [content, setContent] = useState("owo");
  let match = useRouteMatch("/sbs-sue-client/page/:pid")

  useEffect(() => {
    console.log(match)
    fetch(
      `https://newdev.smilebasicsource.com/api/Content?Ids=${match.params.pid}`
    )
      .then(res => res.json())
      .then(data => {
        const page = data[0]
        // eslint-disable-next-line no-undef
        const output = Parse.parseLang(page.content, page.values.markupLang)
        let rootElement = document.createElement("div");
        rootElement.appendChild(output);
        setContent(rootElement.innerHTML)
      })
      .catch(err => console.error(err));
    setContent("Loading...") ;
  }, [match.url]); 

  return <div style={{
    width: "100%",
    height: "100%",
    overflow: "auto",
  }}
  dangerouslySetInnerHTML={{__html: content}} />;
}

export default TestPageView;
