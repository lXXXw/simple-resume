import { SectionTitle } from "../section_title/section_title";
import { SectionSubtitle } from "../section_title/section_subtitle";
import { parseTimeRange } from "@/utils";
import { Bullets } from "../bullets/bullets";

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
            <SectionSubtitle
              subtitle={project.name}
              location={project.url}
              caption={project.caption}
              time_range={parseTimeRange(project.start_time, project.end_time)}
            ></SectionSubtitle>
            <Bullets bullets={project.bullets}></Bullets>
          </div>
        );
      })}
    </div>
  );
};
