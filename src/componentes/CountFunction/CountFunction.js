const CountFunction = (props) => {
    let count = 0

    const decrement = () =>{
        count = count--
    }

    const increment = () =>{
        count = count++
    }


    return ( <div style={{display:"flex"}}>
                <button onClick={decrement}>-</button>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
            </div>)
}

export default CountFunction