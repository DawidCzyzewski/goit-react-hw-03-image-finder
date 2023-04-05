// Komponent elementu listy z obrazkami. Tworzy element DOM o następującej strukturze:

import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { images, getInfoAbout } = this.props;
    // console.log(images);
    return (
      <>
        {images.map(image => {
          const { id, previewUrl, tags, biggerImg } = image;
          return (
            <li key={id}>
              <img
                src={previewUrl}
                alt={tags}
                data-bigger={biggerImg}
                onClick={getInfoAbout}
              />
            </li>
          );
        })}
      </>
    );
  }
}
