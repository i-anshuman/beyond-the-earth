import { useState } from 'react';
import PropTypes from 'prop-types';

const TextWrap = ({ children, length, className }) => {
  const [wrap, toggleWrap] = useState(true);
  return (
    <p className={className}>
      {
        wrap
          ? children.substr(0, length)
          : children
      }
      {
        (children.length > length && wrap) &&
        <span onClick={() => toggleWrap(false)} style={{
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          ...read more
        </span>
      }
    </p>
  );
};

TextWrap.defaultProps = {
  length: 200,
  className: ""
};

TextWrap.propTypes = {
  length: PropTypes.number,
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TextWrap;
