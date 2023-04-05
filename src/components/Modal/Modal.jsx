import { Component } from 'react';

export class Modal extends Component {
  render() {
    console.log(this.props.bigPhotoUrl);

    const { bigPhotoUrl, closeModal } = this.props;
    return (
      <>
        <div>
          <div>
            <img src={bigPhotoUrl} alt="" />
          </div>
        </div>
      </>
    );
  }
}
