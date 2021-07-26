import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { formatNumberToLetterIndex } from '../../../utils/formatNumberToLetterIndex';

type InnerProps = {
  stargazersCount: number;
};

const StarCount = ({ stargazersCount }: InnerProps) => (
  <div className="flex items-center justify-between px-1 border-2 border-gray-500 rounded-md">
    <StarIcon className="mr-1 text-yellow-500 border-r-2 border-gray-500 w-7 h-7" />
    <p className="w-16 font-bold text-center text-gray-700 dark:text-white transition-colors text-md">
      {formatNumberToLetterIndex(stargazersCount)}
    </p>
  </div>
);

export default StarCount;
