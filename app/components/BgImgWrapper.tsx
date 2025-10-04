"use client";

import Image from "next/image";

const BgImgWrapper = () => {
  return (
    <>
      <Image
        src={"/Images/BG.JPG"}
        alt="Background Image"
        fill
        priority
        quality={100}
        className="brightness-70"
        style={{ objectFit: "cover" }}
      />
    </>
  );
};

export default BgImgWrapper;
