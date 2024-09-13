import React, { Component } from 'react';
import JobCard from './JobCard';
import '../styles/Bookmarks.css';

class Bookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [], // Initialize as empty array
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Simulate fetch from a local database or API
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    this.setState({ bookmarks: savedBookmarks, isLoading: false });
  }

  render() {
    const { bookmarks, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading bookmarks...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="bookmarks">
        {bookmarks.length > 0 ? (
          bookmarks.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div>No bookmarks available.</div>
        )}
      </div>
    );
  }
}

export default Bookmarks;
