import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './AllSites.Component.css';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage, MDBCardText, MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBFormInline,
    MDBRow
} from 'mdbreact';
import {setShowSiteDetailFlagAction} from '../../../../store/sections/home/main-page/all-sites/all-sites.actions';

const arrayTest = [1, 2, 3, 4, 5];

export const AllSitesComponent = () => {
    const dispatch = useDispatch();

    return (
        <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBFormInline className="md-form mr-auto mb-6">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                   aria-label="Search"/>
                            <MDBBtn outline color="primary" rounded size="sm" type="submit" className="mr-auto">
                                Search
                            </MDBBtn>
                        </MDBFormInline>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    {arrayTest.map((item, index) => <MDBCol md="4">
                        <MDBCard className={'margin-card'}>
                            <MDBCardImage className="img-fluid"
                                          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                          waves/>
                            <MDBCardBody>
                                <MDBCardTitle>Card
                                    title {item.toString().concat(' ').concat(index.toString())}</MDBCardTitle>
                                <MDBCardText>Some quick example text to build on the card title and make up the bulk of
                                    the
                                    card's content.</MDBCardText>
                                <MDBBtn href="#"
                                        onClick={() => dispatch(setShowSiteDetailFlagAction(true))}>Click</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>)}
                </MDBRow>
            </MDBContainer>);
};