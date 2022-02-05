import React from "react";
import "./MainPage.Component.css";

import { MostVisitedSitesComponent } from "../../sites/most-visited-sites/MostVisitedSites.Component";
import { AllSitesComponent } from "../../sites/all-sites/AllSites.Component";
import { SiteDetailComponent } from "../../sites/site-detail/SiteDetail.Component";
import { useSelector } from "react-redux";

export const MainPageComponent = () => {
  const showDetailSiteFlag = useSelector(
    (state) => state.allSitesReducers.showDetailSiteFlag
  );
  return showDetailSiteFlag ? (
    <SiteDetailComponent />
  ) : (
    <div>
      <MostVisitedSitesComponent />
      <AllSitesComponent />;
    </div>
  );
};
