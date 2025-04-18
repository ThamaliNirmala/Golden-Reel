"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <motion.div
        key={searchQuery} // Re-trigger animation on search
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Movies searchQuery={searchQuery} />
      </motion.div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
