import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={()=>props.greetHander('child')}>Click</button>
        </div>
    )
}

 export default Child
