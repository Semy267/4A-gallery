"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [client, setClient] = React.useState(false);

  React.useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }
  return (
    // <AnimatePresence>
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // ini animasi keluar
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
    // </AnimatePresence>
  );
}
