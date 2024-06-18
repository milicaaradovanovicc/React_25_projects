import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open modal popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          id={"custom-id"}
          header={
            <div>
              <h1>Customized header</h1>
            </div>
          }
          body={
            <div>
              <h2>Customized body</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                maxime, nam delectus possimus nihil earum maiores provident
                itaque deserunt voluptatibus officiis quas, est odit architecto,
                quis aliquam commodi dolorum quaerat.
              </p>
            </div>
          }
          footer={
            <div>
              <h1>Customized footer</h1>
            </div>
          }
        />
      )}
    </div>
  );
}
