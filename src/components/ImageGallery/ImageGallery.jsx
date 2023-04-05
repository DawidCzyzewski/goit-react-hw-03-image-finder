import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const { children, closeModal } = this.props;

    // console.log(this.props);
    return <ul onClick={closeModal}>{children}</ul>;
  }
}
