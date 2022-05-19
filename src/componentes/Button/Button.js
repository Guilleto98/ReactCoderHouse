const Button = (props)=>{
    return <button style={{color: props.color}} onClick={props.handleClick}>{props.label}</button>
}

export default Button