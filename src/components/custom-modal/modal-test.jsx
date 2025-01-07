import { useState } from "react"
import Modal from "./modal";
import './modal.css'


export default function ModalTest() {


    const [showModal, setShowModal] = useState(false);

    function handleToggleModal() {
        setShowModal(!showModal)
    }

    function onClose(){
        setShowModal(false)
    }


    return <div>

        <button onClick={handleToggleModal}>Open Modal Popup</button>
        {
            showModal && <Modal onClose={onClose} body={<div>Customized Body</div>}/>
        }
    </div>
}