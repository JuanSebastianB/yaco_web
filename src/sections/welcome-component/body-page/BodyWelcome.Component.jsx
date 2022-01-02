import React from 'react';
import './BodyWelcome.Component.css';
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import { products } from './mocks';

export const BodyWelcomeComponent = () => {
  const itemTemplate = ({ title, image }) => <React.Fragment>
    <Image src={image} className={'center-image-carousel'} alt="Image Text"/>
  </React.Fragment>;
  return (<React.Fragment>
    <div className="p-grid">
      <div className="p-col-12">
        <Carousel value={products} circular autoplayInterval={5000} itemTemplate={itemTemplate}/>
      </div>
    </div>
    <div className="p-grid">
      <div className="p-col">
        <div>
          <span>Deseas conocer lugares mágicos!</span>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book</span>
        </div>
      </div>
      <div className="p-col">
        <lord-icon
          src="https://cdn.lordicon.com/apuwlldu.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: '250px', height: '250px' }}>
        </lord-icon>
      </div>
    </div>
    <div className="p-grid">
      <div className="p-col">
        <lord-icon
          src="https://cdn.lordicon.com/itmmouju.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: '250px', height: '250px' }}>
        </lord-icon>
      </div>
      <div className="p-col">
        <div><span>Da a concer tu establecimiento o evento!</span>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book</span>
        </div>
      </div>
    </div>
    <div className="p-grid">
      <div className="p-col">
        <div>
          <span>Juntos logramos más!</span>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book</span>
        </div>
      </div>
      <div className="p-col">
        <lord-icon
          src="https://cdn.lordicon.com/zpxybbhl.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: '250px', height: '250px' }}>
        </lord-icon>
      </div>
    </div>
  </React.Fragment>);
};
