import type { ReactNode } from 'react';

import type { EducationType } from 'schema';

import css from './Education.module.scss';
import { DateRange } from './dates';

export function EducationItem({ education }: { education: EducationType }) {
  let studyInfo: ReactNode = education.studyType;
  if (education.studyType) {
    studyInfo = (
      <div className={css.degree}>
        {education.studyType} {education.area ? 'in ' + education.area : ''}
      </div>
    );
  }
  return (
    <div className={css.educationItem}>
      <div className={css.header}>
        <div className={css.institution}>{education.institution}</div>
        <div className={css.dateRange}>
          <DateRange start={education.startDate} end={education.endDate} />
        </div>
      </div>
      <div className={css.details}>
        {studyInfo}
        <div className={css.grade}>GPA: {education.gpa}</div>
      </div>
      <ul className={css.awards}>
        {education.awards.map((award) => (
          <li key={award}>{award}</li>
        ))}
      </ul>
    </div>
  );
}
