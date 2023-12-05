import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function Controls(props) {
  const { onModalBtnClick, btnText } = props

  return (
    <span className="Controls">
      <button
        onClick={() => onModalBtnClick((prev) => !prev)}
        className="Controls-btn"
      >
        {btnText}
      </button>
    </span>
  )
}
// Define prop types for type checking
Controls.propTypes = {
  onModalBtnClick: PropTypes.func,
  btnText: PropTypes.string,
}
// Provide default values for props
Controls.defaultProps = {
  onModalBtnClick: () => {},
}
// Memoize the Controls component for performance optimization
export default React.memo(Controls)
