import React from 'react';
import './RenderImg.scss';
import { banner1, banner2, banner3 } from '../../constants/imgs/intro-banner';

const images = [banner1, banner2, banner3];
export const INTERVAL = 4000;

class RenderImg extends React.Component {
  state = {
    activeIdx: 0,
  };

  componentDidMount() {
    let index = 0;
    setInterval(() => {
      index = images.length - 1 > index
        ? index + 1
        : 0;
      this.setState({ activeIdx: index });
    }, INTERVAL);
  }

  render() {
    const { activeIdx } = this.state;

    return (
      <div className="intro-banner-images">
        {images.map((img, idx) => (
          <div className="image" key={img}>
            <img className={activeIdx === idx ? 'show' : 'hide'} src={img} alt="img" />
          </div>
        ))}
      </div>
    );
  }
}

export default RenderImg;
