import { FaHandHoldingUsd, FaCameraRetro, FaChartLine } from "react-icons/fa";
import Image from "next/image";

export default function Promo() {
  return (
    <div className="">
      <div className="flex flex-row p-12 items-center justify-center mt-12">
        <div className="flex flex-col items-center p-12">
          <FaHandHoldingUsd className="text-9xl text-black hover:text-green-600 dark:invert" />
          <h3 className="font-bold py-6">Strategic Marketing</h3>
          <p>
            Our goal is to achieve the maximum potential of your property
            through generating more web traffic and funneling it back to your
            listing.
          </p>
        </div>

        <div className="flex flex-col items-center p-12">
          <FaCameraRetro className="text-9xl text-black hover:text-green-600 dark:invert" />
          <h3 className="font-bold py-6">World-Class Photography</h3>
          <p>
            Nothing makes a property more appealing to a guest than stunning
            photos that grab their attention and make guests want to see your
            beautiful home for themselves.
          </p>
        </div>

        <div className="flex flex-col items-center p-12">
          <FaChartLine className="text-9xl text-black hover:text-green-600 dark:invert" />
          <h3 className="font-bold py-6">Consistent Engagement</h3>
          <p>
            Our focus is to keep guests coming through the door so that there is
            no wasted potential of your attractive rental property.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex w-full md:w-1/2 lg:w-1/6 p-2 items-center justify-center">
          <Image
            className="w-full h-auto"
            src={"/images/designs/airbnb.png"}
            alt="airbnb-logo"
            width={200}
            height={267}
          />
        </div>
        <div className="flex w-full md:w-1/2 lg:w-1/6 p-2 items-center justify-center">
          <Image
            className="w-full h-auto"
            src={"/images/designs/vrbo.png"}
            alt="vrbo-logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex w-full md:w-1/2 lg:w-1/6 p-2 items-center justify-center">
          <Image
            className="w-full h-auto"
            src={"/images/designs/expedia.png"}
            alt="expedia-logo"
            width={200}
            height={1}
          />
        </div>
        <div className="flex w-full md:w-1/2 lg:w-1/6 p-2 items-center justify-center">
          <Image
            className="w-full h-auto"
            src={"/images/designs/google.png"}
            alt="google-logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
