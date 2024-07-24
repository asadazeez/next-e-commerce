import React from 'react'

const innerpage = ({params}:{params:{id:string}}) => {
  return (
    <div>
    <div>about inner page </div>
    {params.id}
    </div>
  )
}

export default innerpage