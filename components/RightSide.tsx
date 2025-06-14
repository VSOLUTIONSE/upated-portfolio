import React from "react";

const RightSide = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full h-full gap-6 text-textLight">
      <a href="mailto:femmaje@gmail.com">
        <p className="text-sm tracking-widest rotate-90 w-72 text-textGreen">
          reactbd@proton.me
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
