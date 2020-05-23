import React from "react";

import { DateRange } from "./dates";

import css from "./Education.scss";

export class EducationItem extends React.Component {
  render() {
    let studyInfo = this.props.education.studyType;
    if (this.props.education.studyType) {
      studyInfo = (
        <div className={css.degree}>
          {this.props.education.studyType}{" "}
          {this.props.education.area ? "in " + this.props.education.area : ""}
        </div>
      );
    }
    return (
      <div className={css.educationItem}>
        <div className={css.header}>
          <div className={css.institution}>
            {this.props.education.institution}
          </div>
          <div className={css.dateRange}>
            <DateRange
              start={this.props.education.startDate}
              end={this.props.education.endDate}
            />
          </div>
        </div>
        <div className={css.details}>
          {studyInfo}
          <div className={css.grade}>GPA: {this.props.education.gpa}</div>
        </div>
        <ul className={css.awards}>
          {this.props.education.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </div>
    );
  }
}
