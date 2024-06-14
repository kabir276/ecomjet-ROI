import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-black p-14 rounded-lg shadow-lg text-white text-center w-[30rem] ">
        <h2 className="text-3xl mb-4">Success!</h2>
        <p className='text-xl mt-8 text-center'>Your ebook is on the way! <br /> Please check your email.</p>
       
        <button 
          className="mt-8  px-4 py-2 bg-[#a67aff6d] text-[#d8d8d8] font-semibold text-lg rounded hover:bg-[#a67aff82]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;