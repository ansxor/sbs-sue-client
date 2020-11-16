import React, {useEffect} from "react";

function ActivityTab(props) {
  useEffect(() => {
    if (props.visible === true) {
      props.changeHeader("Activity");
    }
  }, [props]);

  return (
    <div
      style={{
        margin: "900px",
      }}
    >
      HOAISDHIOASDHOASIDHOASIHDoAS
    </div>
  );
}

export default ActivityTab;
