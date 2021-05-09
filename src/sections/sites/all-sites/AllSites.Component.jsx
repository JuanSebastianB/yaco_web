import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AllSites.Component.css';
import {
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBFormInline, MDBRow
} from 'mdbreact';
import {
  getAllSiteAction, setShowSiteDetailFlagAction, setSiteSelectedAction
} from '../../../store/sections/sites/all-sites/all-sites.actions';

export const AllSitesComponent = () => {
  const dispatch = useDispatch();
  const allSites = useSelector(state => state.allSitesReducers.allSites);

  useEffect(() => {
    dispatch(getAllSiteAction());
  }, [dispatch]);

  const openDetailSiteSelected = (siteSelected) => {
    dispatch(setShowSiteDetailFlagAction(true));
    dispatch(setSiteSelectedAction(siteSelected));
  };

  return (<MDBContainer fluid>
    <MDBRow>
      <MDBCol md='6'>
        <MDBFormInline className='md-form mr-auto mb-6'>
          <input className='form-control mr-sm-2' type='text' placeholder='Search'
                 aria-label='Search'/>
          <MDBBtn outline color='primary' rounded size='sm' type='submit' className='mr-auto'>
            Search
          </MDBBtn>
        </MDBFormInline>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      {allSites.map((item, index) => <MDBCol md='4' key={index}>
        <MDBCard className={'margin-card'}>
          <MDBCardImage className='img-fluid'
                        src='https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'
                        waves/>
          <MDBCardBody>
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <MDBCardText>{item.description}</MDBCardText>
            <MDBBtn href='#'
                    onClick={() => openDetailSiteSelected(item)}>Click</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>)}
    </MDBRow>
  </MDBContainer>);
};
