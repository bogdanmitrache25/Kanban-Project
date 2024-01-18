import React from "react";
import Kanban from "./components/kanban/Kanban";
const App = () => {
  return (
    <div>
      <h1 className="kanbanheader">Kanban 📚</h1>
      <Kanban />
      <h2 className="kanbandescription">
        It is a visual method of project management that allows teams to
        visualise their workflows and workloads.
      </h2>
      <footer>
        Made by{" "}
        <span className="footer">
          <a
            href="https://es.linkedin.com/in/bogdan-mitrache-bb0781247"
            target="_blank"
          >
            Bogdan Mitrache &#x1F468;&#x200D;&#x1F4BB;
          </a>
        </span>
      </footer>
    </div>
  );
};

export default App;
