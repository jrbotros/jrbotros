import {map} from 'lodash'

import moment from 'moment-timezone'
import React from 'react';

import {DateRange} from './dates';
import css from './Job.scss';


export class Project extends React.Component {
  render () {
    return (
      <li>
        <a target="_blank" rel="noopener nofollower" href={this.props.project.website}
            className={css.project} style={{backgroundImage: `url(${this.props.project.image})`}}>
          <div className={css.projectInfo}>
            <div className={css.projectName}>{this.props.project.name}</div>
            <div className={css.projectDescription}>{this.props.project.description}</div>
          </div>
        </a>
      </li>
    )
  }
}

export class Job extends React.Component {
  render () {
    let projects = null
    if (this.props.job.projects) {
      projects = (
        <ul className={css.projects}>
          {map(this.props.job.projects, project => <Project key={project.name} project={project} />)}
        </ul>
      )
    }
    return (
      <div className={css.job}>
        <div className={css.header}>
          <span className={css.company}>{this.props.job.company}</span>
          <DateRange start={this.props.job.startDate} end={this.props.job.endDate} />
        </div>
        <div className={css.details}>
          <span className={css.position}>{this.props.job.position}</span>
          <ul className={css.highlights}>
            {map(this.props.job.highlights, (highlight, i) => <li key={i} dangerouslySetInnerHTML={{ __html: highlight }}></li>)}
          </ul>
          {projects}
        </div>
      </div>
    )
  }
}
