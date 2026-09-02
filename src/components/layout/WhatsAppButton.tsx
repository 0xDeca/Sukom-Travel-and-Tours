"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348075126874"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 left-6 z-40 lg:hidden"
      style={{ bottom: "80px" }}
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
        <MessageCircle className="w-6 h-6 text-white" />
      </div>
    </motion.a>
  );
}
