import { fetchImages } from './Services/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';

import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    actualPage: 1,
    searchedText: '',
    biggerImgUrl: '',
    isModalVisable: false,
    isLoading: false,
    searchForMore: false,
  };

  openModal = () => {
    console.log('modal is opened');
    this.setState({ isModalVisable: true, biggerImgUrl: '' });
  };

  closeModal = () => {
    console.log('modal is closed');

    this.setState({ isModalVisable: false, biggerImgUrl: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log('event.target in handleSubmit in App: ', event.target);
    // console.log(
    //   'event.target[1].value in handleSubmit in App: ',
    //   event.target[1].value
    // );
    // console.log(
    //   'event.target[1].name in handleSubmit in App: ',
    //   event.target[1].name
    // );
    const inputName = event.target[1].name;
    const searchedPhrase = event.target[1].value.split(' ').join('+');
    // console.log('searchedPhrase in handleSubmit', searchedPhrase);
    this.setState({ [inputName]: searchedPhrase });
  };

  // clearing previous data
  clearState = () => {
    this.setState({
      images: [],
      actualPage: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchedText !== this.state.searchedText ||
      prevState.actualPage !== this.state.actualPage
    ) {
      this.setState({ isLoading: true });

      this.clearState();

      const response = await fetchImages(
        this.state.searchedText,
        this.state.actualPage
      );
      // console.log(response.data.hits);

      const newImages = response.data.hits.map(image => {
        // console.log(image);
        return {
          id: image.id,
          tags: image.tags,
          previewUrl: image.webformatURL,
          biggerImg: image.largeImageURL,
        };
      });
      // console.log('newImages after map: ', newImages);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...newImages],
          // totalHits: totalHits,
        };
      });

      // console.log('this.state after fetch: ', this.state);

      // console.log('response in App: ', response);

      if (response.data.totalHits <= 12) {
        this.setState({ searchForMore: false });
        // console.log(
        //   'response.data.totalHits.length <= 12, SearchForMore should be false: ',
        //   this.state.searchForMore
        // );
        return;
      } else if (response.data.hits.length < 12) {
        this.setState({ searchForMore: false });
        // console.log(
        //   'response.data.hits.length <= 12, SearchForMore should be false: ',
        //   this.state.searchForMore
        // );
        return;
      } else {
        this.setState({ searchForMore: true });
        // console.log(
        //   'response.data.hits.length > 12, so SearchForMore should be true: ',
        //   this.state.searchForMore
        // );
      }
    }
  }

  // Getting more images:
  changePage = () => {
    this.setState(prevState => ({
      actualPage: prevState.actualPage + 1,
    }));
  };

  // TODO: why not working link? I can't put it in state to use later to modal
  // Getting info about clicked image, need for example to modal (bigger photo url)
  getInfoAbout = event => {
    console.log(event.target.dataset.bigger);
    const bigUrl = event.target.dataset.bigger;
    console.log(typeof bigUrl);
    console.log(bigUrl);

    this.setState({
      // biggerImgUrl: event.target.dataset.bigger,
      biggerImgUrl: bigUrl,
      tags: event.target.alt,
    });

    this.openModal();
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <Searchbar whenSubmit={this.handleSubmit} />
        <ImageGallery closeModal={this.closeModal}>
          <ImageGalleryItem
            images={this.state.images}
            getInfoAbout={this.getInfoAbout}
          />
        </ImageGallery>
        <Modal
          bigPhotoUrl={this.state.biggerImgUrl}
          closeModal={this.closeModal}
          tags={this.state.tags}
          isModalVisable={this.state.isModalVisable}
        />
      </div>
    );
  }
}
