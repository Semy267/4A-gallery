"use client";
import Image from "next/image";
import React from "react";
import CButton from "../../shared/custome/c-button";
import { AnimatePresence, motion } from "motion/react";
import { MENU_ITEMS } from "@/lib/constants";

export default function Menu({ Title }: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="z-20 w-full h-full flex justify-between flex-col items-center">
      <div className="w-fit z-20 pt-20">
        <Image
          src={Title}
          width={700}
          height={700}
          alt="title"
          className=" object-contain"
        />
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {MENU_ITEMS.map((item, index) => (
              <CButton key={index} isSecondary onClick={item?.action} isHover>
                <span className="">{item.label}</span>
              </CButton>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CButton isSecondary onClick={() => setIsOpen(true)}>
              <span className="">Press Start Button</span>
            </CButton>
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="font-trajan z-20">
        © 1997-2008 FromSoftware, Inc. All Rights Reserved.
      </h1>
    </div>
  );
}
