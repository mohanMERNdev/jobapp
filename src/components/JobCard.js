import React, { Component } from 'react';
import '../styles/JobCard.css';

class JobCard extends Component {
  handleBookmark = () => {
    const { job } = this.props;
    let bookmarkedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    
    if (!bookmarkedJobs.find((bJob) => bJob.id === job.id)) {
      bookmarkedJobs.push(job);
      localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarkedJobs));
      alert('Job bookmarked!');
    } else {
      alert('Job already bookmarked!');
    }
  };

  render() {
    const { job } = this.props;

    return (
      <div className="job-card">
        <h3>{job.title}</h3>
        <p>Location: {job.location}</p>
        <p>Salary: {job.salary}</p>
        <p>Phone: {job.phone}</p>
        <button onClick={this.handleBookmark}>Bookmark</button>
      </div>
    );
  }
}

export default JobCard;
