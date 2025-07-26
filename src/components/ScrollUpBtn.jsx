import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 240) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`${
        visible ? "opacity-100 right-5" : "opacity-0 right-[-100px]"
      } transition-all duration-500 fixed bottom-10 z-50 bg-green-400 w-10 h-10 flex items-center justify-center rounded text-black`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollUpBtn;
