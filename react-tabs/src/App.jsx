import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  const tabsData = [
    {
      id: 1,
      title: "Tab 1",
      content: "Content for Tab 1",
      contentColor: "#f0f2e9",
    },
    {
      id: 2,
      title: "Tab 2",
      content: "Content for Tab 2",
      contentColor: "#f2fff5",
    },
    {
      id: 3,
      title: "Tab 3",
      content: "Content for Tab 3",
      contentColor: "#e8e9ed",
    },
  ];

  return (
    <div>
      <Tabs tabs={tabsData} />
    </div>
  );
}

export default App;
