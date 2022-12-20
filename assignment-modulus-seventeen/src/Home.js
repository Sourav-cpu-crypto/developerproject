import React from 'react'
import {useAuth} from './useContext/AuthProvider';
function Home() {
     const auth =useAuth();

  return (
    <div>Home</div>
  )
}

export default Home