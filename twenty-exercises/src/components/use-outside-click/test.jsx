import { useState, useRef } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div
          ref={ref}
          style={{
            background: "lightgray",
            margin: "20px",
          }}
        >
          <h1>This is a random content.</h1>
          <p>Please click outside of this content to close it. </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
}
