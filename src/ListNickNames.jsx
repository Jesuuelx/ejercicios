import React from 'react'

export const ListNickNames = ({ names, order}) => {
 
    
 
 
    return (
    <>
        {
        order === 'ASC'

        &&

        names.sort().map(name => (
            <li>{name}</li>
        ))
    }

    {
        order === 'DESC'

        &&

        names.sort().reverse().map(name => (
            <li>{name}</li>
        ))
    }
    </>
  )
}
