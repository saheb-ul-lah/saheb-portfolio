"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants"; // Assuming this is your data source
import { textVariant } from "@/app/utils/motion"; // Assuming this is your motion utility
import { SectionWrapper } from "./HigherOrderComponents"; // Assuming this is your HOC

type FeedbackCardProps = {
    index: number;
    testimonial: string;
    name: string;
    link: string;
    image: string;
    onClick: () => void;
};

const FeedbackCard = ({
    index,
    testimonial,
    name,
    link,
    image,
    onClick,
}: FeedbackCardProps) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="glass-card xs:w-[300px] w-full h-[300px] cursor-pointer"
            onClick={onClick}
        >
            {/* Wrapper for content to stay above the pseudo-element */}
            <div className="card-content-wrapper">
                <div className="p-6 flex-grow flex flex-col">
                    <p className="text-cyan-300 font-black text-4xl opacity-70">&quot;</p>
                    <div className="mt-1 flex-1 overflow-hidden">
                        <p
                            className="text-white/90 tracking-wide text-base"
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                display: "-webkit-box",
                                WebkitLineClamp: 5,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {testimonial}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-2 p-4 bg-black/20 rounded-b-2xl mt-auto">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-sm">
                            <span className="blue-text-gradient">@</span>
                            {name}
                        </p>
                    </div>
                    <Link href={link} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={image}
                            width={36}
                            height={36}
                            alt={`feedback by ${name}`}
                            className="w-9 h-9 rounded-full object-cover border-2 border-white/50 hover:border-cyan-400 transition-all duration-300"
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const Modal = ({
    isOpen,
    onClose,
    testimonial,
    name,
    image,
    link,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
}: {
    isOpen: boolean;
    onClose: () => void;
    testimonial: string;
    name: string;
    image: string;
    link: string;
    onPrev: () => void;
    onNext: () => void;
    hasPrev: boolean;
    hasNext: boolean;
}) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                    initial={{ backdropFilter: "blur(0px)" }}
                    animate={{ backdropFilter: "blur(8px)" }}
                    exit={{ backdropFilter: "blur(0px)" }}
                    onClick={onClose}
                >
                    <motion.div
                        className="glass-modal relative max-w-3xl w-full mx-4"
                        initial={{ scale: 0.95, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-7">
                            <button
                                className="absolute top-4 right-4 text-white/70 bg-white/10 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <span className="text-xl font-bold leading-none">×</span>
                            </button>
                            <div className="flex items-center gap-4 mb-5">
                                <Link href={link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={image}
                                        width={48}
                                        height={48}
                                        alt={`feedback by ${name}`}
                                        className="rounded-full object-cover border-2 border-white/60 hover:border-cyan-300 transition-all duration-300"
                                    />
                                </Link>
                                <p className="text-white font-semibold text-base">
                                    <span className="blue-text-gradient">@</span>
                                    {name}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <p className="text-cyan-300 font-black text-5xl opacity-70 -mt-2">&quot;</p>
                                <p
                                    className="text-white/90 text-lg leading-relaxed"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    {testimonial}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 px-7 pb-6">
                            <button
                                className={`nav-button ${!hasPrev && "opacity-30 cursor-not-allowed"}`}
                                onClick={hasPrev ? onPrev : undefined}
                                disabled={!hasPrev}
                                aria-label="Previous"
                            >
                                ←
                            </button>
                            <button
                                className={`nav-button ${!hasNext && "opacity-30 cursor-not-allowed"}`}
                                onClick={hasNext ? onNext : undefined}
                                disabled={!hasNext}
                                aria-label="Next"
                            >
                                →
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Feedbacks = () => {
    const [modalIndex, setModalIndex] = useState<number | null>(null);
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const openModal = (idx: number) => setModalIndex(idx);
    const closeModal = () => setModalIndex(null);

    const handlePrev = () => {
        if (modalIndex !== null && modalIndex > 0) setModalIndex(modalIndex - 1);
    };
    const handleNext = () => {
        if (modalIndex !== null && modalIndex < testimonials.length - 1)
            setModalIndex(modalIndex + 1);
    };

    return (
        <>
            <style jsx>{`
                .glass-section {
                    background: rgba(10, 25, 47, 0.2);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(8px);
                    border-radius: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden; /* This is crucial for the bubble effect */
                }
                .card-content-wrapper {
                    position: relative;
                    z-index: 2; /* Ensures content is above the bubble */
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .glass-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 0;
                    height: 0;
                    background: radial-gradient(circle at top right, rgba(0, 180, 219, 0.2) 0%, rgba(0, 131, 176, 0) 70%);
                    border-radius: 9999px; /* A large value to ensure it's a circle */
                    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
                    transform-origin: top right;
                    z-index: 1;
                }
                .glass-card:hover::before {
                    width: 250%; /* Large enough to cover the card */
                    height: 250%;
                }
                .glass-card:hover {
                    border-color: rgba(0, 180, 219, 0.3);
                    transform: translateY(-4px) scale(1.02);
                }
                .glass-modal {
                    background: rgba(30, 41, 59, 0.6);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                    backdrop-filter: blur(16px);
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                }
                .blue-text-gradient {
                    background-image: linear-gradient(45deg, #00B4DB, #0083B0);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
                .nav-button {
                    color: white;
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 9999px;
                    padding: 0.5rem;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    transition: all 0.2s ease;
                }
                .nav-button:not(:disabled):hover {
                    background: rgba(0, 180, 219, 0.5);
                    transform: scale(1.1);
                }
            `}</style>
            <div ref={sectionRef} className="mt-12">
                <motion.div 
                    className="glass-section"
                    initial={{ opacity: 0, y: 80 }}
                    animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="sm:px-16 px-6 sm:py-12 py-8 bg-tertiary/30 rounded-t-2xl min-h-[250px] flex flex-col justify-center">
                        <motion.div variants={textVariant()}>
                            <h2 className="sectionHeadText">Social Profiles</h2>
                            <p className="sectionSubText mt-2 mb-12">
                                Click a card to read more, or an icon to visit their profile.
                            </p>
                        </motion.div>
                    </div>
                    <div className="sm:px-12 px-5 -mt-20 pb-12 flex flex-wrap gap-6 justify-center">
                        {testimonials.map((testimonial, index) => (
                            <FeedbackCard
                                key={testimonial.id || index}
                                index={index}
                                {...testimonial}
                                onClick={() => openModal(index)}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
            <Modal
                isOpen={modalIndex !== null}
                onClose={closeModal}
                testimonial={modalIndex !== null ? testimonials[modalIndex].testimonial : ""}
                name={modalIndex !== null ? testimonials[modalIndex].name : ""}
                image={modalIndex !== null ? testimonials[modalIndex].image : ""}
                link={modalIndex !== null ? testimonials[modalIndex].link : ""}
                onPrev={handlePrev}
                onNext={handleNext}
                hasPrev={modalIndex !== null && modalIndex > 0}
                hasNext={modalIndex !== null && modalIndex < testimonials.length - 1}
            />
        </>
    );
};

export default SectionWrapper(Feedbacks, "");