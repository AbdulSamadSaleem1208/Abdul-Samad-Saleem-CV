"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
}

export default function ResumeModal({ isOpen, onClose, imageUrl }: ResumeModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-[#0A0A0F] rounded-2xl border border-white/20 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
                        >
                            <X size={24} />
                        </button>
                        <div className="p-2 md:p-6 min-h-[400px] flex items-center justify-center">
                            <img
                                src={imageUrl}
                                alt="Abdul Samad CV"
                                className="w-full h-auto rounded-lg shadow-lg border border-white/5"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x1100?text=Resume+Image+Loading+Error';
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
