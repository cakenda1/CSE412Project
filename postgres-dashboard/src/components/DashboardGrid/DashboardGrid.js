import React from "react";
import { Card, Statistic } from "semantic-ui-react";

import "./DashboardGrid.css";

const DASHBOARD_BOXES = [
  {
    title: "Total Users",
    className: "purple",
  },
  {
    title: "Total Projects",
    className: "green",
  },
  {
    title: "Projects Created",
  },
  {
    title: "Projects Completed",
  },
];

function DashboardGrid() {
  return (
    <div className="dashboardGrid">
      <div className="dashboardGrid-boxes">
        {DASHBOARD_BOXES.map((box, i) => (
          <Card className="dashboardGrid-boxes-item" centered raised>
            <Statistic
              className={box.className ? box.className : ""}
              as="h4"
              label={box.title}
              value="89"
            />
          </Card>
        ))}
      </div>
      <div>
        {/** We'll add the chat here later */}
      </div>
    </div>
  );
}

export default DashboardGrid;