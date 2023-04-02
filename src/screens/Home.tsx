import React from 'react'
import { useDispatch } from 'react-redux';
import { API } from '../api';
import { productsAction, productsMethods } from '../store/actions/productsActions';

const Home = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>productsMethods.addProductReview(dispatch, "61faad1a2fca380004c72e81",{
        rating: 4,
        comment: 'good'
      })}>add review</button>
    </div>
  )
}


export default Home;
