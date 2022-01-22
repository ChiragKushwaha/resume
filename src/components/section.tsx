import React from 'react';
import dateformat from 'dateformat';
import { DATEFORMAT } from '../constants/date';
type TLink = {
  text: string;
  url: string;
};
type TProject = {
  name: string;
  subtext?: string;
  url?: string;
  about?: string;
  links?: Array<TLink>;
};
type TJobs = {
  url?: string;
  name: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  technology?: Array<string>;
  projects?: Array<TProject>;
};

const Section = (props: TJobs) => {
  const { url, name, position, startDate, endDate, summary, technology, projects } = props;
  return (
    <div style={{ paddingBottom: '6px' }}>
      <div>
        <span>{url ? <a href={url}>{name}</a> : name}</span>
        {startDate || endDate ? (
          <span>
            {startDate ? ` - (${dateformat(startDate, DATEFORMAT)}` : ''} -{' '}
            {endDate ? `${dateformat(endDate, DATEFORMAT)}` : 'Currently Working'})
          </span>
        ) : null}
      </div>
      {position ? (
        <div>
          <span>
            <b>Role: </b>
          </span>
          <span>{position}</span>
        </div>
      ) : null}
      {summary ? (
        <div>
          <span>
            <b>About: </b>
          </span>
          {summary}
        </div>
      ) : null}
      {technology ? (
        <div>
          <span>
            <b>Technoloy: </b>
          </span>
          {technology?.join(', ')}
        </div>
      ) : null}
      {projects ? (
        <div>
          <div>
            <b>Projects: </b>
          </div>
          <ul>
            {projects?.map((project, index) => {
              let subtext = project?.subtext;
              project.links?.forEach((link) => {
                const anchor = `<a href="${link.url}">${link.text}</a>`;
                subtext = subtext?.replace(link.text, anchor);
              });

              return (
                <div style={{ paddingBottom: '6px' }} key={project.name + index}>
                  <li>
                    {project.url ? <a href={project.url}>{project.name}</a> : project.name}{' '}
                    {project.subtext ? (
                      <i dangerouslySetInnerHTML={{ __html: subtext ?? '' }}></i>
                    ) : null}
                  </li>
                  {project?.about ? (
                    <div>
                      <span>About: </span>
                      <span>{project?.about}</span>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Section;
