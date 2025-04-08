import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image src="/loading.gif" alt="" width={50} height={50} />
    </div>
  );
};

export default Loading;
