import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      {/* image */}
      <div className="w-[298px] h-[265px] xl:w-[498px] xl:h-[450px] mix-blend-lighten absolute flex justify-center items-center">
        <Image
          src="/assets/Cat.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
        />
      </div>

      {/* circle */}
      <svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Photo;
