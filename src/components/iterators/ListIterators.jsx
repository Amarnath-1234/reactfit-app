import React from 'react'

const ListIterator = (props) => {
  return (
    <>
        {props.data.map((ele,index)=>{
            return <li key={index}>{ele}</li>
        })}
    </>
  )
}

export default ListIterator