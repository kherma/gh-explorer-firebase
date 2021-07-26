import React from 'react';
import { ClipboardIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';

type InnerProps = {
  text: string;
  value: string;
};

const BtnCopyToClipboard = ({ text, value }: InnerProps) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`Copied`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <button
      className="flex items-center justify-between w-full px-3 py-1 bg-gray-200 dark:bg-gray-600 focus:outline-none rounded-md dark:focus:bg-gray-500 focus:bg-gray-400 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
      onClick={handleCopyToClipboard}
    >
      <p className="uppercase">{text}</p>
      <ClipboardIcon className="text-gray-700 w-7 h-7 dark:text-white transition-colors" />
    </button>
  );
};

export default BtnCopyToClipboard;
