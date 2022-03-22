import React from 'react'

const Profil = ({fullName,bio,profission,handlClick,children,address,tel}) => {
  return (
    <div>
   <h1 className='title'>{fullName}</h1>

   <h1 className='title'>Iam a{profission} {bio}</h1>
   
   
   
   {children}
   <h1 className='title'>{address}</h1>
   <h1 className='title'>{tel}</h1>
   <button onClick ={handlClick} >clik Me</button>
  
   
    </div>
  )
}

export default Profil
