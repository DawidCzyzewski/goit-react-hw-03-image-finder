import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    bigPhotoUrl: PropTypes.string.isRequired,
    tags: PropTypes.array,
    closeModal: PropTypes.func.isRequired,
    isModalVisable: PropTypes.bool.isRequired,
  };

  render() {
    const { bigPhotoUrl, tags, closeModal, isModalVisable } = this.props;

    return (
      isModalVisable && (
        <div>
          <img
            className={styles.modal}
            src={bigPhotoUrl}
            alt={tags}
            onClick={closeModal}
          />
        </div>
      )
    );
  }
}
