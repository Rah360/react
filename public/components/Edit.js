import React from 'react'

const EditPage=(props)=>{
    
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default EditPage