import React, { Fragment } from 'react'

const Sushi = ({sushi, handleEaten, eatenSushis}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           >
        { 
          eatenSushis.includes(sushi) ?
            null
          :
            <img onClick={() => handleEaten(sushi)} src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi