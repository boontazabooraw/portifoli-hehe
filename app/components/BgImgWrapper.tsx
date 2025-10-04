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
        className="brightness-50"
        style={{ objectFit: "cover" }}
      />
    </>
  );
};

export default BgImgWrapper;
