"use client";

import { SetStateAction, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function handleImageClick(image: SetStateAction<string | null>) {
    setSelectedImage(image);
    document.body.classList.add("overflow-hidden");
  }

  function handleCloseClick() {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="grid lg:grid-cols-4 gap-2 p-10 mt-4 md:grid-cols-2 sm:grid-cols-1">
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample1.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/samples/sample1.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample2.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/samples/sample2.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample3.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/samples/sample3.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample4.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/samples/sample4.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample5.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="/images/samples/sample5.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample6.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          <Image
            src="/images/samples/sample6.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample7.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          <Image
            src="/images/samples/sample7.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample8.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/samples/sample8.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample9.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <Image
            src="/images/samples/sample9.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample10.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <Image
            src="/images/samples/sample10.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample11.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/samples/sample11.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample12.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <Image
            src="/images/samples/sample12.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample13.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.7 }}
        >
          <Image
            src="/images/samples/sample13.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample14.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <Image
            src="/images/samples/sample14.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample15.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.9 }}
        >
          <Image
            src="/images/samples/sample15.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div
        className="relative mt-8 cursor-pointer flex items-center justify-center hover:scale-110 transform transition duration-200"
        onClick={() => handleImageClick("/images/samples/sample16.jpg")}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0 }}
        >
          <Image
            src="/images/samples/sample16.jpg"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="w-full sm:w-3/4" onClick={handleCloseClick}>
            <div className="smt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={selectedImage}
                  alt=""
                  width={800}
                  height={800}
                  layout="responsive"
                  objectFit="contain"
                  className="p-12"
                />
              </motion.div>
              <button
                className="absolute top-0 right-0 p-4 text-white"
                onClick={handleCloseClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
