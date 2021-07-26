import React from 'react';
import { TerminalIcon } from '@heroicons/react/solid';
import DropdownWrapper from '../DropdownWrapper/DropdownWrapper';
import BtnCopyToClipboard from '../BtnCopyToClipboard/BtnCopyToClipboard';

type InnerProps = {
  cloneUrl: string;
  sshUrl: string;
};

const ForkMenuSection = ({ cloneUrl, sshUrl }: InnerProps) => (
  <DropdownWrapper
    menuIcon={
      <TerminalIcon className="w-10 h-10 text-gray-700 transition-colors dark:text-white md:h-12 md:w-12 xl:h-10 xl:w-10" />
    }
  >
    <ul className="flex flex-col gap-2">
      <li>
        <BtnCopyToClipboard text="https" value={cloneUrl} />
      </li>
      <li>
        <BtnCopyToClipboard text="ssh" value={sshUrl} />
      </li>
    </ul>
  </DropdownWrapper>
);

export default ForkMenuSection;
