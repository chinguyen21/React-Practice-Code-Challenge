import React, { Fragment } from 'react'
import Form from '../components/Form'

const Table = ({currentMoney, eatenSushis, handleDisplayForm, displayForm, handleAddMoney}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${currentMoney} remaining!
        <button onClick={handleDisplayForm}>Add more money</button>
        {displayForm ? <Form handleAddMoney={handleAddMoney}/> : null}
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(eatenSushis)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table