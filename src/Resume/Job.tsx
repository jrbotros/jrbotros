import React from 'react';

import type { JobProjectType, JobType } from '../schema';

import css from './Job.module.scss';
import { DateRange } from './dates';

function getImgUrl(path: string) {
  return new URL(`/src/img/${path}`, import.meta.url).href;
}

export function Project({ project }: { project: JobProjectType }) {
  return (
    <li>
      <a
        target="_blank"
        rel="noopener nofollower noreferrer"
        href={project.website}
        className={css.project}
        style={{ backgroundImage: `url(${getImgUrl(project.image)})` }}
      >
        <div className={css.projectInfo}>
          <div className={css.projectName}>{project.name}</div>
          <div className={css.projectDescription}>{project.description}</div>
        </div>
      </a>
    </li>
  );
}

export function Job({ job }: { job: JobType }) {
  return (
    <div className={css.job}>
      <div className={css.header}>
        <span className={css.company}>{job.company}</span>
        <DateRange start={job.startDate} end={job.endDate} />
      </div>
      <div className={css.details}>
        <span className={css.position}>{job.position}</span>
        <ul className={css.highlights}>
          {job.highlights.map((highlight, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: highlight }}></li>
          ))}
        </ul>
        {job.projects && (
          <ul className={css.projects}>
            {job.projects.map((project) => (
              <Project key={project.name} project={project} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
