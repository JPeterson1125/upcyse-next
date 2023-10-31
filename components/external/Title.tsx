"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Title() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-[-1] bg-black">
        <Image
          src={"/images/samples/sample7.jpg"}
          alt="cover-image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="text-center px-2 py-8 max-w-3xl">
        <h1 className="text-white text-4xl font-bold mb-8 text-shadow:_0_2px_0_rgb(0_2_1_/_80%)">
          Upcyse Delivers Unparalleled Property Management at an Industry-Low
          Cost
        </h1>
        <p className="text-white text-lg mb-16 text-shadow:_0_2px_0_rgb(0_2_1_/_80%)">
          Upcyse outperforms traditional property managers by taking a modern
          approach to scale your short term rental property! Plus we don't make
          money unless you are making money!
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button className="text-lg px-8 py-6 hover:accent">
              Get Started With Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
