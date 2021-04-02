import React from 'react'

function Categories({filter,categories}) {
    return (
        <div className="buttons">
            {
                categories.map((cat,i)=>{
                    return <button key={i} className="btn-port" onClick={()=> filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories
