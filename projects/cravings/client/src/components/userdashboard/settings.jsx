import React from 'react'

export const settings = () => {
    const {user} = useAuth();

  return (

<> <div classname='flex'>
     <div classname='w-1/4 p-4'>sidebar</div>
    <div> content </div>
</div>
 
   


</>
  )
}
