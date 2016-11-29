import 'lib/normalize.css';
import 'lib/skeleton.css';
import 'scss/style.scss';

import moment from 'moment-timezone'
import React from 'react';
import ReactDOM from 'react-dom';
import Vivus from 'vivus'

import resume from 'assets/resume.json'

const prettyDate = date => moment(date).format('MMMM YYYY')
const jobDateRange = job => {
  let endDate = job.endDate ? prettyDate(job.endDate) : 'Present'
  return <span className="resume-job__dateRange">{prettyDate(job.startDate)} – {endDate}</span>
}

class ResumeJob extends React.Component {
  render () {
    return (
      <div className="resume-job">
        <div className="resume-job__header">
          <span className="resume-job__company">{this.props.job.company}</span>
          {jobDateRange(this.props.job)}
        </div>
        <div className="resume-job__details">
          <span className="resume-job__position">{this.props.job.position}</span>
          <ul className="resume-job__highlights">
            {this.props.job.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
          </ul>
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
          {resume.work.map(job => <ResumeJob key={job.company + job.position} job={job} />)}
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
