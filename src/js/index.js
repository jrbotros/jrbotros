import 'lib/normalize.css';
import 'lib/skeleton.css';
import 'scss/style.scss';

import {
  map
} from 'lodash'

import moment from 'moment-timezone'
import React from 'react';
import ReactDOM from 'react-dom';
import Vivus from 'vivus'

import resume from 'assets/resume.json'

const prettyDate = date => moment(date).format('MMMM YYYY')
const jobDateRange = job => {
  let endDate = job.endDate ? prettyDate(job.endDate) : 'Present'
  return <span className="resume-job__date-range">{prettyDate(job.startDate)} – {endDate}</span>
}

class ResumeJobProject extends React.Component {
  render () {
    return (
      <li>
        <a target="_blank" rel="noopener nofollower" href={this.props.project.website}
            className="resume-job__project" style={{backgroundImage: `url(${this.props.project.image})`}}>
          <div className="resume-job__project-info">
            <div className="resume-job__project-name">{this.props.project.name}</div>
            <div className="resume-job__project-description">{this.props.project.description}</div>
          </div>
        </a>
      </li>
    )
  }
}

class ResumeJob extends React.Component {
  render () {
    let projects = null
    if (this.props.job.projects) {
      projects = (
        <ul className="resume-job__projects">
          {map(this.props.job.projects, project => <ResumeJobProject key={project.name} project={project} />)}
        </ul>
      )
    }
    return (
      <div className="resume-job">
        <div className="resume-job__header">
          <span className="resume-job__company">{this.props.job.company}</span>
          {jobDateRange(this.props.job)}
        </div>
        <div className="resume-job__details">
          <span className="resume-job__position">{this.props.job.position}</span>
          <ul className="resume-job__highlights">
            {map(this.props.job.highlights, (highlight, i) => <li key={i}>{highlight}</li>)}
          </ul>
          {projects}
        </div>
      </div>
    )
  }
}

class Resume extends React.Component {
  render () {
    return (
      <div>
        <h1>xp</h1>
        <div className="resume-items">
          {map(resume.work, job => <ResumeJob key={job.company + job.position} job={job} />)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Resume />,
  document.getElementById('resume')
);

new Vivus('logo', {
  duration: 200,
  animTimingFunction: Vivus.EASE
}, () => {
  document.querySelector('.icon-github').classList.add('show')
})
