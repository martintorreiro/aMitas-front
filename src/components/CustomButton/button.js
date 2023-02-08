import "./button.css"
export const CustomButton = ({children,handleClick})=>{

return(
    <button className="customButton" onClick={handleClick}>{children}</button>
)
}