// Komponent przyjmuje jeden props onSubmit - funkcję dla przekazania wartości input przy submicie formularza. Tworzy element DOM o następującej strukturze:

import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    // console.log('this.props in searchbar: ', this.props);

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
