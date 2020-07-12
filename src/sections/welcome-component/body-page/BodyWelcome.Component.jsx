import React from 'react';
import './BodyWelcome.Component.css';
import {MDBAnimation, MDBCol, MDBContainer, MDBRow} from 'mdbreact';

export const BodyWelcomeComponent = () => {
    return (
        <MDBContainer>
            <MDBRow className="top-space-row">
                <MDBCol>
                    <MDBAnimation type="fadeInLeft" className="slow" reveal>
                        <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid"
                             alt=""/>
                    </MDBAnimation>
                </MDBCol>
                <MDBCol>
                    <MDBAnimation type="fadeIn" className="slower" reveal>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor
                            (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los
                            mezcló
                            de tal manera que logró hacer un libro de textos especimen</p>
                    </MDBAnimation>
                </MDBCol>
            </MDBRow>
            <MDBRow className="top-space-row">
                <MDBCol>
                    <MDBAnimation type="fadeIn" className="slower" reveal>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor
                            (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los
                            mezcló
                            de tal manera que logró hacer un libro de textos especimen</p>
                    </MDBAnimation>
                </MDBCol>
                <MDBCol>
                    <MDBAnimation type="fadeInRight" className="slow" reveal>
                        <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid"
                             alt=""/>
                    </MDBAnimation>
                </MDBCol>
            </MDBRow>
            <MDBRow className="top-space-row">
                <MDBCol>
                    <MDBAnimation type="fadeInLeft" className="slow" reveal>
                        <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid"
                             alt=""/>
                    </MDBAnimation>
                </MDBCol>
                <MDBCol>
                    <MDBAnimation type="fadeIn" className="slower">
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
                            Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
                            impresor
                            (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los
                            mezcló
                            de tal manera que logró hacer un libro de textos especimen</p>
                    </MDBAnimation>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};