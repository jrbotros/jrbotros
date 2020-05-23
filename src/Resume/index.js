import React from 'react';

import {EducationItem} from './Education';
import {Job} from './Job';

import resume from './resume.json'

export class Resume extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section className="education">
          <h1>edu</h1>
          {resume.education.map(education => <EducationItem key={education.institution} education={education} />)}
        </section>
        <section className="resume">
          <h1>exp</h1>
          <div className="resume-items">
            {resume.work.map(job => <Job key={job.company + job.position} job={job} />)}
          </div>
        </section>
      </React.Fragment>
    )
  }
}
