import React from 'react';
import './BodyWelcome.Component.css';
import {
  MDBAnimation, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView
} from 'mdbreact';
import imageWelcome from '../../../assets/images/back.jpeg';

export const BodyWelcomeComponent = () => {
  return (<MDBContainer fluid>
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={imageWelcome}
              alt="First slide"
            />
            <MDBMask overlay="black-light"/>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Others/documentation/img%20(137)-mini.jpg"
              alt="Second slide"
            />
            <MDBMask overlay="black-strong"/>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
              alt="Third slide"
            />
            <MDBMask overlay="black-slight"/>
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    <MDBContainer>
      <MDBRow className='top-space-row'>
        <MDBCol>
          <MDBView hover zoom>
            <img
              src='https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg'
              className='img-fluid'
              alt=''
            />
            <MDBMask className='flex-center'>
              <p className='white-text'>Zoom effect</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol>
          <MDBAnimation type='fadeIn' className='slower' reveal>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem
              Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando
              un
              impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y
              los
              mezcló
              de tal manera que logró hacer un libro de textos especimen</p>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      <MDBRow className='top-space-row'>
        <MDBCol>
          <MDBAnimation type='fadeIn' className='slower' reveal>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem
              Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando
              un
              impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y
              los
              mezcló
              de tal manera que logró hacer un libro de textos especimen</p>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation type='fadeInRight' className='slow' reveal>
            <img src='https://mdbootstrap.com/img/Others/documentation/1.jpg' className='img-fluid'
                 alt=''/>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      <MDBRow className='top-space-row'>
        <MDBCol>
          <MDBAnimation type='fadeInLeft' className='slow' reveal>
            <img src='https://mdbootstrap.com/img/Others/documentation/1.jpg' className='img-fluid'
                 alt=''/>
          </MDBAnimation>
        </MDBCol>
        <MDBCol>
          <MDBAnimation type='fadeIn' className='slower'>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem
              Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando
              un
              impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y
              los
              mezcló
              de tal manera que logró hacer un libro de textos especimen</p>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBContainer>);
};
