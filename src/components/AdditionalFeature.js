import React from 'react';

import { connect } from 'react-redux';

import { addPart } from '../actions/SalesAction';

const AdditionalFeature = props => {

const feature = props.feature;

const handleClick = () => {
  props.addPart(feature);
  console.log('I WORK!!!')
}

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {handleClick()}} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = (state) => {
//   return {

//   }
// }

export default connect(() => {}, { addPart })(AdditionalFeature);
