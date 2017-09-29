import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  year: string,
  trailer: string,
  poster: string,
};

class Search extends Component {
  state = {
    searchTerm: '',
  };
  props: {
    shows: Array<Show>,
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <Header showSearch handleSearchTermChange={this.handleSearchTermChange} search={this.searchTerm} />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0,
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
