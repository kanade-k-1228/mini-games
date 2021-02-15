import React, { useEffect, useRef, useState } from "react";
import { ItemView as ItemComponent } from "./itemview";
import { Item } from "./types";

export function PostIt() {
  const [mousePositionX, setMousePositionX] = useState<number>(0);
  const [mousePoitionY, setMousePositionY] = useState<number>(0);
  const [svgPositionX, setSvgPositionX] = useState<number>(0);
  const [svgPositionY, setSvgPositionY] = useState<number>(0);
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const [svgHeight, setSvgHeight] = useState<number>(0);
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    setSvgPositionX(ref.current?.getBoundingClientRect().x ?? 0);
    setSvgPositionY(ref.current?.getBoundingClientRect().y ?? 0);
    setSvgWidth(ref.current?.getBoundingClientRect().width ?? 0);
    setSvgHeight(ref.current?.getBoundingClientRect().height ?? 0);
  }, []);
  function updateMousePosition(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    setMousePositionX(e.pageX - svgPositionX);
    setMousePositionY(e.pageY - svgPositionY);
  }
  const [idCounter, setIdCounter] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <svg
          id="svg"
          style={{ width: "100%", height: "100%" }}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          xmlns="http://www.w3.org/2000/svg"
          ref={ref}
          onMouseMove={(e) => {
            updateMousePosition(e);
          }}
          onDoubleClick={() => {
            setIdCounter(idCounter + 1);
            setItems(
              items.concat({
                id: idCounter,
                x: mousePositionX,
                y: mousePoitionY,
                text: "",
              })
            );
          }}
        >
          {items.map((item) => (
            <>
              <ItemComponent
                item={item}
                delete={() => {
                  setItems(items.filter((item2) => item2.id !== item.id));
                }}
                edit={(text: string) => {
                  setItems(
                    items.map((item2) =>
                      item2.id !== item.id ? item2 : { ...item2, text: text }
                    )
                  );
                }}
              />
            </>
          ))}
        </svg>
      </div>
      <div>{document.cookie}</div>
    </>
  );
}
