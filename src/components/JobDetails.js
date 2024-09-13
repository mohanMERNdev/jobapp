import React, { Component } from 'react';
import '../styles/JobDetails.css';

class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null, // Initialize job as null
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { jobId } = this.props.match.params;
    fetch(`https://testapi.getlokalapp.com/common/jobs/${jobId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.setState({ job: data, isLoading: false });
        } else {
          this.setState({ error: 'Job not found', isLoading: false });
        }
      })
      .catch((error) => this.setState({ error: error.message, isLoading: false }));
  }

  render() {
    const { job, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading job details...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!job) {
      return <div>No job details available.</div>;
    }

    return (
      <div className="job-details">
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <p>Location: {job.location}</p>
        <p>Salary: {job.salary}</p>
        <p>Phone: {job.phone}</p>
      </div>
    );
  }
}

export default JobDetails;
