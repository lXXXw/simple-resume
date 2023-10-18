import "./main.css";
import React from "react";

import { content } from "../../content/example";
import { PersonalInfo } from "../personal_info/personal_info";
import { Experience } from "../experience/experience";
import { Education } from "../education/education";
import { Projects } from "../projects/projects";

export class Main extends React.PureComponent {
  render() {
    return (
      <div className={"page px-10 py-6"}>
        <PersonalInfo info={content.personal_info}></PersonalInfo>
        <Experience experence_list={content.experience}></Experience>
        <Projects project_list={content.projects}></Projects>
        <Education education_list={content.education}></Education>
      </div>
    );
  }
}
