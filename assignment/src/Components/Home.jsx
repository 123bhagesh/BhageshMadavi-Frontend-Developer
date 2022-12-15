import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/action'

export const Home = () => {

  const data = useSelector((store)=> store)
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getData())
  },[])
  console.log(data)
  return (
    <div>
      
    </div>
  )
}
