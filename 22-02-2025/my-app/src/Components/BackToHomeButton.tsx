import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackToHomeButton :React.FC= () => {
const navigate = useNavigate();

  return (
    <div>
        <button className='Back-to-home-page' onClick={()=>{navigate('/')}}>Back To Home</button>
    </div>
  )
}

export default BackToHomeButton