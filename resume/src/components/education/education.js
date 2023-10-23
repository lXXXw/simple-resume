import { SectionSubtitle } from "./section_subtitle";
import { SectionTitle } from "../section_title/section_title";
import { parseLocation, parseTimeRange } from "@/utils";

export const Education = (props) => {
  const title = "education";
  const { education_list } = props;
  return (
    <div>
      <SectionTitle title={title}></SectionTitle>
      {education_list.map((education, index) => {
        return (
          <div key={index}>
            <SectionSubtitle
              subtitle={education.name}
              location={parseLocation(
                education.location.city,
                education.location.country
              )}
              caption={education.degree_detail}
              time_range={parseTimeRange(
                education.start_time,
                education.end_time
              )}
            ></SectionSubtitle>
          </div>
        );
      })}
    </div>
  );
};
