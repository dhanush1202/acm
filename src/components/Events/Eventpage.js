// export default App;
import "./Eventpage.css"
import { ReactComponent as WorkIcon } from "./Assets/work.svg";

import timelineContent from "./timelineContent";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Eventpage() {
  // let workIconStyles = { background: "#06D6A0" };
  let workIconStyles = { background: "#a9ee89" };

  return (
    <div>
      <h1 className="title">Timeline of ACM VNRVJIET Events</h1>
      <VerticalTimeline>
        {timelineContent.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={workIconStyles}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Eventpage;