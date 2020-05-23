import { map } from "lodash";

import React from "react";

import { DateRange } from "./dates";
import css from "./Job.scss";

export const Project = ({ project }) => {
  return (
    <li>
      <a
        target="_blank"
        rel="noopener nofollower noreferrer"
        href={project.website}
        className={css.project}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className={css.projectInfo}>
          <div className={css.projectName}>{project.name}</div>
          <div className={css.projectDescription}>{project.description}</div>
        </div>
      </a>
    </li>
  );
};

export const Job = ({ job }) => {
  let projects = null;
  if (job.projects) {
    projects = (
      <ul className={css.projects}>
        {map(job.projects, (project) => (
          <Project key={project.name} project={project} />
        ))}
      </ul>
    );
  }
  return (
    <div className={css.job}>
      <div className={css.header}>
        <span className={css.company}>{job.company}</span>
        <DateRange start={job.startDate} end={job.endDate} />
      </div>
      <div className={css.details}>
        <span className={css.position}>{job.position}</span>
        <ul className={css.highlights}>
          {map(job.highlights, (highlight, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: highlight }}></li>
          ))}
        </ul>
        {projects}
      </div>
    </div>
  );
};
