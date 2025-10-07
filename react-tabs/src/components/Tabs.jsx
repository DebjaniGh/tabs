import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="tabs-container">
      {/* tab titles */}
      <div className="tabs">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </div>
          );
        })}
      </div>

      {/* tab content */}
      <div className="tab-contents">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
              style={{
                backgroundColor: activeTab === tab.id ? tab.contentColor : "",
              }}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
