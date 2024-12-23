"use client";

import { MessageContainer } from './message-container';
import { MessageContent } from './message-content';
import { MessageImage } from './message-image';

export function MessageSection() {
  return (
    <section
  className=" bg-white"
  style={{
    // background: "linear-gradient(104.88deg, #01373D 10.45%, #015153 89.47%)",
  }}
>
  <MessageContainer>
    <div className='px-24'>
    <h2 className="text-lg font-semibold pb-4 border-b border-[#00A5A3] relative top-14 z-10">
      Message from Chairman
    </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="relative">
        <div className="absolute top-96 left-80 z-10">
          <h3 className="font-anek-devanagari text-6xl font-medium text-white">
            Mohammed Saleem
          </h3>
          <p className="text-[#00A5A3] font-manrope">Founder & CEO</p>
        </div>
        <MessageImage />
      </div>
      <MessageContent />
    </div>
  </MessageContainer>
    </section>

  
  );
}