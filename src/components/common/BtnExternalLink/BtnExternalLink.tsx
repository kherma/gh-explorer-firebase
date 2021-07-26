import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';

type InnerProps = {
  htmlUrl: string;
};

const BtnExternalLink = ({ htmlUrl }: InnerProps) => (
  <a
    className="ml-1 rounded focus:outline-none focus:ring focus:ring-gray-400 hover:bg-gray-400"
    href={htmlUrl}
    target="_blank"
    rel="noreferrer"
  >
    <ExternalLinkIcon className="w-10 h-10 text-gray-700 dark:text-white transition-colors" />
  </a>
);

export default BtnExternalLink;
