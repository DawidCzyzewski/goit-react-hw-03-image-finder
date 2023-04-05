import { Component } from 'react';

export class Modal extends Component {
  render() {
    console.log(this.props.bigPhotoUrl);

    const { bigPhotoUrl, tags, closeModal, isModalVisable } = this.props;
    return (
      isModalVisable && (
        <>
          <div>
            <div>
              <img src={bigPhotoUrl} alt={tags} onClick={closeModal} />
            </div>
          </div>
        </>
      )
    );
  }
}
