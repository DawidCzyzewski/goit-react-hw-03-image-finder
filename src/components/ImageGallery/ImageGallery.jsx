import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const { children, closeModal } = this.props;
    return <ul>{children}</ul>;
  }
}
