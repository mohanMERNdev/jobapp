import React, { Component } from 'react';
import JobCard from './JobCard';
import '../styles/JobsList.css';

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [], // Initialize as empty array
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetch jobs from API
    fetch('https://testapi.getlokalapp.com/common/jobs?page=1')
      .then((response) => {
        // Check if response is OK (status 200)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Log the API response to check its structure
        console.log('API Response:', data);
        
        // Ensure the response contains jobs
        if (data && data.jobs && data.jobs.length > 0) {
          this.setState({ jobs: data.jobs, isLoading: false });
        } else {
          this.setState({ error: 'No jobs found', isLoading: false });
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        this.setState({ error: 'Failed to load jobs', isLoading: false });
      });
  }

  render() {
    const { jobs, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading jobs...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="jobs-list">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div>No jobs available.</div>
        )}
      </div>
    );
  }
}

export default JobsList;
