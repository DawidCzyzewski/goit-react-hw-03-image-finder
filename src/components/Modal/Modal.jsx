import { Component } from 'react';

export class Modal extends Component {
  render() {
    const { bigPhotoUrl, tags, closeModal, isModalVisable } = this.props;
    return (
      isModalVisable && (
        <div>
          <img src={bigPhotoUrl} alt={tags} onClick={closeModal} />
        </div>
      )
    );
  }
}
