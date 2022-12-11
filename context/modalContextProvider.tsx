import React, { useState } from "react";
import ModalContext from "./modalContext";

export default function ModalProvider({children} : {children: React.ReactNode}) {
    const [state, setState] = useState({ modalIsOpen : false });

    return(
        <ModalContext.Provider value={ 
            {modalIsOpen : state.modalIsOpen, 
            openModal: () => { setState({modalIsOpen: true})},
            closeModal: () => { setState({modalIsOpen: false})} } 
        }>

            { children }

        </ModalContext.Provider>
    )
}