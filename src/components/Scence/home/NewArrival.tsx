// import React from 'react'
import newArrival from "../../../assets/454-karina-converse-2.jpg.jpeg"

const NewArrival = () => {
  return (
    <>
    <div className="text-3xl font-bold ml-4 font-serif">New Arrival</div>
    <div className="m my-9">
    <img src={newArrival} alt="homeImg" className="w-full h-full" />
    </div>
    </>
  )
}

export default NewArrival