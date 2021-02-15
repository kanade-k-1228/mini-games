import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import { Item } from "./types";

export function ItemView(props: {
  item: Item;
  delete: () => void;
  edit: (text: string) => void;
}) {
  return (
    <>
      <g width="10" height="10" onClick={() => {}}>
        <foreignObject
          requiredExtensions="http://www.w3.org/1999/xhtml"
          x={props.item.x}
          y={props.item.y}
          width="200"
          height="200"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              backgroundColor: "yellow",
            }}
            {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
          >
            <IconButton
              style={{ width: "1em", height: "1em" }}
              onClick={() => props.delete()}
            >
              <ClearIcon />
            </IconButton>
            <div
              style={{
                overflow: "auto",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                contentEditable
                style={{ height: "100%", width: "100%", background: "" }}
              >
                {props.item.text}
              </div>
            </div>
          </div>
        </foreignObject>
      </g>
    </>
  );
}
