"use client";
import Image from "next/image";

const CustomButton = () => {
  return (
    <button disabled={false} className={`custom-btn`} onClick={() => {}}>
      <span className={`flex-1`}>title</span>
    </button>
  );
};

export default CustomButton;
