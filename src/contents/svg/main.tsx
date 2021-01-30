import { useEffect, useRef, useState } from "react";

export function SVG() {
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

  const [dots, setDots] = useState<Array<{ x: number; y: number }>>([]);
  function setCookie() {
    document.cookie = JSON.stringify(dots);
  }

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
          onClick={() => {
            setDots(dots.concat({ x: mousePositionX, y: mousePoitionY }));
          }}
          onDoubleClick={() => {
            setCookie();
          }}
        >
          {dots.map((dot) => (
            <circle cx={dot.x} cy={dot.y} r="4" />
          ))}
        </svg>
      </div>
      <div>{document.cookie}</div>
    </>
  );
}
