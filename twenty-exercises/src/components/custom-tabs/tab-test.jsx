import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return (
    <div>
      <h1>Some random content</h1>
    </div>
  );
}

export default function TabTest() {
  const tabs = [
    { label: "Tab 1", content: "This is content for tab 1" },
    { label: "Tab 2", content: "This is content for tab 2" },
    { label: "Tab 3", content: <RandomComponent /> },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
