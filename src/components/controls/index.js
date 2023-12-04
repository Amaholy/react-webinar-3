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

Controls.propTypes = {
  onModalBtnClick: PropTypes.func,
  btnText: PropTypes.string,
}

Controls.defaultProps = {
  onModalBtnClick: () => {},
}

export default React.memo(Controls)
