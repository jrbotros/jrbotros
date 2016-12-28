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

const prettyDate = date => (
  <span style={{'whiteSpace': 'nowrap'}}>
    {moment(date).format('MMMM YYYY')}
  </span>
)
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
      <section className="resume">
        <h1>exp</h1>
        <div className="resume-items">
          {map(resume.work, job => <ResumeJob key={job.company + job.position} job={job} />)}
        </div>
      </section>
    )
  }
}

class EducationItem extends React.Component {
  render () {
    let studyInfo = this.props.education.studyType
    if (this.props.education.studyType) {
      studyInfo = (
        <div className="education__degree">
          {this.props.education.studyType} {this.props.education.area ? 'in ' + this.props.education.area : ''}
        </div>
      )
    }
    return (
      <div className="education-item">
        <div className="education-item__header">
          <div className="education-item__institution">{this.props.education.institution}</div>
          <div className="education-item__date-range">{jobDateRange(this.props.education)}</div>
        </div>
        <div className="education-item__details">
          {studyInfo}
          <div className="education-item__grade">GPA: {this.props.education.gpa}</div>
        </div>
        <ul className="education-item__awards">
          {map(this.props.education.awards, award => <li key={award}>{award}</li>)}
        </ul>
      </div>
    )
  }
}

class Education extends React.Component {
  render () {
    return (
      <section className="education">
        <h1>edu</h1>
        {map(resume.education, education => <EducationItem key={education.institution} education={education} />)}
      </section>
    )
  }
}

class Main extends React.Component {
  render () {
    return (
      <div>
        <Education />
        <Resume />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);

new Vivus(
  'logo', {
    type: 'delayed',
    duration: 200,
    animTimingFunction: Vivus.EASE,
    onReady: function (myVivus) {
      myVivus.el.style.visibility = 'inherit';
    }
  }, () => {
    document.querySelector('.icon-github').classList.add('show')
  }
);
