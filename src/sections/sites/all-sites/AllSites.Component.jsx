import React from 'react';
import {useDispatch} from 'react-redux';
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
import {
    setShowSiteDetailFlagAction,
    setSiteSelectedAction
} from '../../../store/sections/sites/all-sites/all-sites.actions';

const arrayTest = [{name: 'Primera'}, {name: 'Segunda'}];

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
                {//TODO -> arrayTest is going to be the array of sites
                    arrayTest.map((item, index) => <MDBCol md="4">
                        <MDBCard className={'margin-card'}>
                            <MDBCardImage className="img-fluid"
                                          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                          waves/>
                            <MDBCardBody>
                                <MDBCardTitle>Card
                                    title {item.name.toString().concat(' ').concat(index.toString())}</MDBCardTitle>
                                <MDBCardText>Some quick example text to build on the card title and make up the bulk of
                                    the
                                    card's content.</MDBCardText>
                                <MDBBtn href="#"
                                        onClick={() => {
                                            dispatch(setShowSiteDetailFlagAction(true));
                                            dispatch(setSiteSelectedAction(item))
                                        }}>Click</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>)}
            </MDBRow>
        </MDBContainer>);
};