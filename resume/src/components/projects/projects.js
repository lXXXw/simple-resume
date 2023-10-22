import { parseTimeRange } from "@/utils";
import { Bullets } from "../bullets/bullets";
import { SectionTitle } from "../section_title/section_title";
import { ProjectSectionSubtitle } from "./project_subtitle";

export const Projects = (props) => {
  const title = "projects";
  const { project_list } = props;
  const active_project_list = project_list.filter(
    (project) => project.is_active
  );
  return (
    <div>
      <SectionTitle title={title}></SectionTitle>
      {active_project_list.map((project, index) => {
        return (
          <div key={index}>
            <ProjectSectionSubtitle
              subtitle={project.name}
              location={project.url}
              caption={project.caption}
              time_range={parseTimeRange(project.start_time, project.end_time)}
            ></ProjectSectionSubtitle>
            <Bullets bullets={project.bullets}></Bullets>
          </div>
        );
      })}
    </div>
  );
};
