import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <>
      <div className="fixed inset-0 flex justify-center items-center z-40 bg-black bg-opacity-50 w-full h-full"></div>
      <dialog className="m-0 p-8 fixed top-[10vh] md:left-[calc(50%-15rem)] transform -translate-x-1/2 -translate-y-1/2 flex w-full md:w-[30rem] max-h-[80vh] rounded-md  z-50 bg-slate-50 shadow-lg shadow-slate-500/50  flex-col  modal">
        {/* <dialog className="modal"> */}
        {children}
      </dialog>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
