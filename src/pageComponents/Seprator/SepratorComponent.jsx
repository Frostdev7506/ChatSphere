import React from "react";
import * as Separator from "@radix-ui/react-separator";
import "./styles.css";
import { Flex } from "@radix-ui/themes";

const SepratorComponent = () => (
  <div
    className=""
    style={{
      marginTop: 20,

      // height: 500,
      maxWidth: 500,
      margin: "0 15px",
    }}
  >
    <div className="Text " style={{ fontWeight: 800 }}>
      ChatSphere
    </div>
    <div className="Text">A chatbot that feels like a companion.</div>
    <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />
    <div style={{ display: "flex", height: 40, alignItems: "center" }}>
      <div className="Text">Explore</div>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <div className="Text">Learn</div>
      <Separator.Root
        className="SeparatorRoot"
        decorative
        orientation="vertical"
        style={{ margin: "0 15px" }}
      />
      <div className="Text">Identify</div>
    </div>
  </div>
);

export default SepratorComponent;
