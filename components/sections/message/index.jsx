"use client";

import { MessageContainer } from './message-container';
import { MessageContent } from './message-content';
import { MessageImage } from './message-image';

export function MessageSection() {
  return (
    <section
    className="py-24"
    style={{
      background: "linear-gradient(104.88deg, #01373D 10.45%, #015153 89.47%)",
    }}
  >
    <MessageContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <MessageImage />
        <MessageContent />
      </div>
    </MessageContainer>
  </section>
  
  );
}