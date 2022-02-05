import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AllSites.Component.css";

import {
  getAllSiteAction,
  setShowSiteDetailFlagAction,
  setSiteSelectedAction,
} from "../../../store/sections/sites/all-sites/all-sites.actions";

export const AllSitesComponent = () => {
  const dispatch = useDispatch();
  const allSites = useSelector((state) => state.allSitesReducers.allSites);

  useEffect(() => {
    dispatch(getAllSiteAction());
  }, [dispatch]);

  const openDetailSiteSelected = (siteSelected) => {
    dispatch(setShowSiteDetailFlagAction(true));
    dispatch(setSiteSelectedAction(siteSelected));
  };

  return <div></div>;
};
