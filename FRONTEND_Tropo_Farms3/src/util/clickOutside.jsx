import { useEffect } from "react";

const useClickOutside = (
  closeModel,
  ref,
  // Added to prevent event propagating to buttons
  activeCheck
) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target )) {
        if (activeCheck) {
          e.stopPropagation();
        }
        // if (activeCheck && ref.current.classList.contains("active")) {
        // inside click

        closeModel();
      }
    };

    // add when mounted
    document.addEventListener("click", handleClickOutside, true);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [activeCheck, closeModel, ref]);
};

export default useClickOutside;
