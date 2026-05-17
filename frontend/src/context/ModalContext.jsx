import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({children}) {
    const [modal, setModal] = useState(false);
    const [type, setType] = useState("");

    const openModal = (type) => {
        setType(type);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <ModalContext.Provider value={{modal, type, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);
