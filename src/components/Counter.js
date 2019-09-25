import React from 'react'

const Counter = ({count, increment, decrement}) => {
    return (
        <div className="container">   
            <h1 class="card-title">Counter</h1>
            <h2 class="card-subtitle mb-2 text-muted">{count}</h2>
            <button onClick={decrement} className="btn btn-danger m-1"> - </button>
            <button onClick={increment}  className="btn btn-success m-1"> + </button>
            <hr/>
        </div>
    )
}

export default Counter