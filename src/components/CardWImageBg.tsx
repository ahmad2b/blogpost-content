import Link from "next/link";
import React from "react";
import { Blog } from "@/Types";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CardWImageBg = ({
  title,
  content,
  createdAt,
  createdBy,
  image,
}: Blog) => {
  const imageUrl = `${image}`;

  return (
    <div className="  max-w-sm m-4">
      <Link
        className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-slate-700/[.7]"
        href="#"
      >
        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
          <Image
            className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
            src={imageUrl}
            alt="Image Description"
            width={500}
            height={300}
          />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-neutral-800 dark:text-white">
            {title}
          </h3>
          <text className="mt-1 text-neutral-800 dark:text-gray-400">
            {documentToReactComponents(content)}
          </text>
          <p className="mt-5 text-xs text-gray-500">Author: {createdBy}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardWImageBg;
