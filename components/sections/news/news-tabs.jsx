"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = ['All', 'News', 'Events', 'Media'];

export function NewsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 alignItems-[center] mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "px-4 py-2 rounded-full transition-colors w-[120px] items-center",
            activeTab === tab 
              ? "bg-[#C0F43C] text-white" 
              : "text-gray-600 hover:text-[#C0F43C] border border-[#C0F43C]"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}