import React from "react";
import { a } from "@react-spring/web";

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  return (
    <div
      style={{
        position: "relative",
        order: 1,
        flex: 1,
        pointerEvents: "none",
      }}
    >
      <a.svg
        viewBox="0 0 583 720"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#E8B059"
          d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61 40H50.5v9H61v10.5h9V40h-9z"
          fill="#E8B059"
        />

        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={6}
          fontWeight="bold"
          letterSpacing="-.02em"
        >
          <tspan x={328} y={46.182}>
            08/01/21
          </tspan>
        </text>

        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={6}
          fontWeight="bold"
          letterSpacing="-.02em"
        >
          <tspan x={392} y={46.182}>
            SECRET{" "}
          </tspan>
          <tspan x={392} y={54.182}>
            TEACHINGS{" "}
          </tspan>
          <tspan x={392} y={62.182}>
            OF ALL AGES
          </tspan>
        </text>

        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={10.5}
          fontWeight={500}
          letterSpacing="0em"
        >
          <tspan x={40} y={175.318}>
            MODUS OPERANDI{" "}
          </tspan>
          <tspan x={40} y={188.318}>
            FOR THE INVOCATION OF SPIRITS
          </tspan>
        </text>

        <text
          fill="#E8B059"
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={52}
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x={40} y={257.909}>
            {"The Invocation —"}
          </tspan>
        </text>

        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={12}
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x={40} y={270.909}></tspan>
        </text>

        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={48}
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x={40} y={321.909}>
            Behold the sign and{" "}
          </tspan>
          <tspan x={40} y={372.909}>
            the very Hallowed{" "}
          </tspan>
          <tspan x={40} y={423.909}>
            Names of God full of{" "}
          </tspan>
          <tspan x={40} y={474.909}>
            power. Obey the{" "}
          </tspan>
          <tspan x={40} y={525.909}>
            power of this our{" "}
          </tspan>
          <tspan x={40} y={576.909}>
            pentacle;
          </tspan>
        </text>

        <text
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize={10.5}
          fontWeight={500}
          letterSpacing="0em"
        >
          <tspan x={326} y={640.318}>
            The Complete Book of Magic Science
          </tspan>
        </text>
      </a.svg>
    </div>
  );
}
