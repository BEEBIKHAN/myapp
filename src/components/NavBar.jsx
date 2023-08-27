import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ onPreviousClick, onNextClick, isFirst, isLast }) {
  return (
    <div>
      <button onClick={onPreviousClick} disabled={isFirst}>
        Previous
      </button>
      <button onClick={onNextClick} disabled={isLast}>
        Next
      </button>
    </div>
  );
}

NavBar.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default NavBar;
