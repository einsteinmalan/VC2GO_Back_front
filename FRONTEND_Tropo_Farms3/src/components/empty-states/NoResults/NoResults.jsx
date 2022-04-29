import React from "react";
import styles from "./NoResults.module.scss";

const NoResults = () => {
  return (
    <div className={styles.products}>  //{styles.products}
      <div className={styles.noResults}>
        <img
          src="/no_product.png"
          alt="Empty bag"
        />
     {/*   <h2>Sorry, no products matched your search!</h2>*/}
        <p>Enter a different keyword and try.</p>
      </div>
    </div>
  );
};

export default NoResults;
