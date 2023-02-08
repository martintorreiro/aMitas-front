import { useModal } from "../../hooks/useModal";
import { CustomButton } from "../CustomButton/button";
import "./toggleModal.css"

export const ToggleModal = ({children,buttonLabel,closeLabel="X"}) =>{

    const { isOpen, openModal, closeModal } = useModal();
    
    return  isOpen  ?<div className="toggleModal">
                        <div className="closeButton">
                            <button onClick={closeModal}>{closeLabel}</button>
                        </div>
                        {children}
                    </div>
                    :<CustomButton handleClick={openModal}>{buttonLabel}</CustomButton>

}