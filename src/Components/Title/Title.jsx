/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

Title.propTypes = {
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired 
};

export default Title;
