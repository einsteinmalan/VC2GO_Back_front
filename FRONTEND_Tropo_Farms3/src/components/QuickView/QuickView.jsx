import React, { useRef } from "react";

import useClickOutside from "../../util/clickOutside";
import styles from "./QuickView.module.scss";

import { QuickPreview } from "../../context/ShoppingCart";


const QuickView = ({ closeModal, openModalState, product }) => {
  const domNode = useRef();

//    console.log(`FISH...${product.description}`)

  useClickOutside(closeModal, domNode, false);

    function getImage(fishName){

        return `/fishes/${fishName}.jpg`;
    }

  return (
    <div
      className={
        openModalState
          ? `${styles.modalWrapper} ${styles.active}`
          : styles.modalWrapper
      }
    >
      <div className={styles.modal} ref={domNode}>
        <button type="button" className={styles.close} onClick={closeModal}>
          &times;
        </button>
        <div className={styles.quickViewDetails}>
          <div className="object-contain h-48 w-96 grid place-items-center">
            <img src={getImage(product.name)} alt={product.name} />
          </div>
          <div className={styles.quickViewDetails}>
            <span className={styles.productName}>{product.name}</span>
              <span className="text-gray-500 text-sm">{product.description}</span>
            <span className={styles.productPrice}>{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
