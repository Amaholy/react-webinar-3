import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function Head({ title, Header, setOpenModal }) {
  const renderHeaderContent = () => (
    <>
      <h1>{Header}</h1>
      <button className="Head-btn" onClick={() => setOpenModal(false)}>
        Закрыть
      </button>
    </>
  )

  return (
    <div className={`Head${title ? '' : ' Header'}`}>
      {title ? (
        <h1>{title}</h1>
      ) : (
        <div className="Head">{renderHeaderContent()}</div>
      )}
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
  Header: PropTypes.node,
  setOpenModal: PropTypes.func,
}

export default React.memo(Head)
