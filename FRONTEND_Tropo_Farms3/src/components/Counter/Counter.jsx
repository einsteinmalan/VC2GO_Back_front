import React from "react";
import styles from "./Counter.module.scss";
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline/index'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid/esm'



const Counter = ({ productQuantity, updateQuantity }) => {
  const increment = () => {
    updateQuantity(productQuantity + 1);
  };

  const decrement = () => {
    if (productQuantity > 1) {
      updateQuantity(productQuantity - 1);
    }
  };

  const feed = (e) => {
    updateQuantity(parseInt(e.target.value, 10));
  };

  // const resetQuantity = () => {
  //   updateQuantity(1);
  // };

  return (
    <div className={styles.stepperInput}>
        <button className="rounded-full border-2 p-1  border-blueGray-500" onClick={decrement} type="button">
        <MinusIcon width={22}/>

      </button>

      <input
        type="number"
        className="rounded w-85-px h-65-px ml-2 mr-2 "
        value={productQuantity}
        onChange={feed}
      />

        <button className="rounded-full border-2 p-1 border-blueGray-500" onClick={increment} type="button">
            <PlusIcon width={22}/>
        </button>

    </div>
  );
};

export default Counter;
