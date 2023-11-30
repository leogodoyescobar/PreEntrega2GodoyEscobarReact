export const Button = ({text="boton", color, functionClick }) => {
    return (
        <button className={` w-24 h-9 rounded-lg px-1 py-1 ${color} `} onClick={functionClick} >{text}</button>
    )
}
