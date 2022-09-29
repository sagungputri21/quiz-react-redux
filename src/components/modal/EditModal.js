import React from "react"
import EditTodo from "../EditTodo";
import ModalContent from "./ModalContent";

const EditModal = ({ show, onClose }) => {
    if (!show) {
        return null
    }

    return (
      <div className="modal fixed flex justify-center items-center m-auto shadow-2xl">
        <div className="w-fit px-5 py-3 flex flex-col bg-white rounded-lg">
          <div className="p-[10px]">
            <h3 className="text-start font-semibold text-xl">Edit Data</h3>
          </div>
          <div className="p-[10px] border-t-2">
            <EditTodo onClick={onClose} />
          </div>
        </div>
      </div>
    )

}

export default EditModal;