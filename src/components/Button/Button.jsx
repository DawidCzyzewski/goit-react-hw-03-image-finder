import { Component } from 'react';

export class Button extends Component {
  render() {
    const { nextPage, searchForMore, images, totalHits, actualPage } =
      this.props;
    return (
      <>
        {searchForMore && images.length > 0 ? (
          <button onClick={nextPage}>Load more</button>
        ) : null}
      </>
    );
  }
}
