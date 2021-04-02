import React from 'react'

function Categories({filter,categories}) {
    return (
        <div>
            {
                categories.map((cat,i)=>{
                    return <button key={i} onClick={()=> filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories
