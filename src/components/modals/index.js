import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function CustomModal({ children, isOpened }) {
  console.log('modal is rendered')

  const onContentClick = (e) => {
    e.stopPropagation()
  }

  const modalClasses = isOpened ? 'Modal Modal-opened' : 'Modal'

  return (
    <div className={modalClasses}>
      <div className="Modal-overlay">
        <div className="Modal-content" onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  )
}

CustomModal.propTypes = {
  children: PropTypes.node,
  isOpened: PropTypes.bool,
}

export default React.memo(CustomModal)
