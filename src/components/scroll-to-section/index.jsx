import { useRef } from "react";

export default function ScrollToSection() {
  const sectionRefs = useRef([]);

  const data = [
    {
      label: "First card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Third card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
    {
      label: "Fourth card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fifth card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
  ];

  const handleScrollToSection = (index) => {
    const pos =
      sectionRefs.current[index].getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      {data.map((_, index) => (
        <button key={index} onClick={() => handleScrollToSection(index)}>
          Scroll to {data[index].label}
        </button>
      ))}

      {data.map((dataItem, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          style={dataItem.style}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
