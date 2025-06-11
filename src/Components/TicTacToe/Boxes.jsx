import React from 'react'

const Boxes = ({row,base,click}) => {
  return (
    <div className={row}>
        {[0,1,2].map((i)=>(
          <div key={i} id={`box-${base + i}`} className="boxes" onClick={(e)=>click(e,base+i)}></div>
        ))}
    </div>
  )
}

export default Boxes