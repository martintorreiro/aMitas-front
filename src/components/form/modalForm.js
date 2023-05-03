import "./modalForm.css"

export const ModalForm = ({children,handlerSubmit}) => {

    return(
            <form className="modalForm" onSubmit={handlerSubmit}>{children}</form>
            )
}