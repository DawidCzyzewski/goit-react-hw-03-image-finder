import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    const { whenSubmit } = this.props;

    return (
      <header>
        <form onSubmit={whenSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            name="searchedText"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
