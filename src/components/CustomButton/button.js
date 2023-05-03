import "./button.css"
export const CustomButton = ({children,handlerClick})=>{

return(
    <button className="customButton" onClick={handlerClick}>{children}</button>
)
}