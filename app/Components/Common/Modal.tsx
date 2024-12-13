"use client";
import React, { useEffect } from "react";
import { Div } from "../Common/Index";

type ModalProps = {
  onClose: () => void; // Function to close the modal
  children: React.ReactNode; // Modal content
  width?: string; // Dynamic width
  height?: string; // Dynamic height
};

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  width = "90%", // Default width
  height = "auto", // Default height
}) => {
  const handleOutsideClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent clicks inside the modal from closing it
  };

  // Scroll Lock Effect
  useEffect(() => {
    // Add class to disable scroll
    document.body.classList.add("no-scroll");

    // Cleanup on unmount to re-enable scrolling
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div
      onClick={onClose} // Clicking outside closes the modal
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 w-full h-full"
    >
      <Div
        onClick={handleOutsideClick} // Prevent inner clicks from triggering the close
        className={`relative bg-gray-800 p-6 rounded-lg shadow-lg text-white overflow-y-auto`}
        style={{ width, height, maxHeight: "90%" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-slate-50 text-gray-800 hover:text-red-500 rounded-full focus:outline-none"
        >
          ✕
        </button>

        {/* Modal Content */}
        {children}
      </Div>
    </div>
  );
};
