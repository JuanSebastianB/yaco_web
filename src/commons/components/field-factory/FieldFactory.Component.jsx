import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { COMPONENT_TYPES, COMPONENTS } from "./FieldFactory.Labels";

const FieldFactoryComponent = ({ type, properties, bind }) => {
  const componentDefinition = COMPONENTS[type];
  const Component = componentDefinition ? componentDefinition.component : null;

  return (
    <React.Fragment>
      {componentDefinition && <Component {...bind(properties)} />}
    </React.Fragment>
  );
};

FieldFactoryComponent.propTypes = {
  type: PropTypes.oneOf(COMPONENT_TYPES),
};

export default FieldFactoryComponent;
