import type { PostItem } from "@app/types/types";
import s from "./PostsItems.module.scss";
import { forwardRef, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PostsItems = forwardRef<HTMLLIElement, PostItem>(
  ({ title, body }, ref) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
      setModalIsOpen(true);
    };

    const handleCloseModal = () => {
      setModalIsOpen(false);
    };
    console.log(modalIsOpen);

    return (
      <li className={s.item} ref={ref}>
        <div className={s.itemWrapper} onClick={handleOpenModal}>
          <p className={s.title}>{title}</p>
          <div className="border-b-1" />
          <p className={s.body}>Body: {body}</p>
        </div>
        <Modal
          isOpen={modalIsOpen}
          shouldCloseOnEsc={true}
          className={{
            base: s.modal,
            afterOpen: s.modalOpen,
            beforeClose: s.modalClose,
          }}
          onRequestClose={handleCloseModal}
          ariaHideApp={false}
        >
          <div className={s.modalContent}>
            <p className={s.title}>{title}</p>
            <div className="border-b-1 border-black" />
            <p className={s.title}>{body}</p>
          </div>
        </Modal>
      </li>
    );
  }
);

export default PostsItems;
