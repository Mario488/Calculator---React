function Button({btnStyles, value, handleClick, OMD, OMU, colspan}){
    
    return(
        <td style={btnStyles} colSpan={colspan} onClick={() => handleClick(value)} onMouseDown={() => OMD(value)} onMouseUp={() => OMU(value)}>
            {value}
        </td>
    )
}

export default Button