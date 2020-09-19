import React from 'react';

import { connect } from 'react-redux';
import { removePart } from '../actions/SalesAction';

const AddedFeature = props => {

  const feature = props.feature;

  const handleClick = () => {
    props.removePart(feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {handleClick()}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(() => {}, { removePart })(AddedFeature);
