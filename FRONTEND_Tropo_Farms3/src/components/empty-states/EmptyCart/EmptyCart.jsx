import React from "react";
import styles from "./EmptyCart.module.scss";

const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <img
        src="/emptycart.png"
        alt="empty-cart"
      />
      <h2>You cart is empty!</h2>
    </div>
  );
};

export default EmptyCart;
