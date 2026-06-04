/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SectionHeaderProps {
  sectionNum: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  sectionNum,
  title,
  subtitle,
  badge,
  align = 'center',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 md:mb-20 ${isCenter ? 'items-center text-center' : 'items-start text-left'} select-none`}>
      {/* Small vertical/horizontal calligraphic reference seal */}
      <div className="flex items-center gap-3 mb-3">
        <div className="px-2 py-0.5 bg-cinnabar text-white font-serif text-[11px] font-black tracking-widest rounded-xs shadow-xs">
          {sectionNum}
        </div>
        {badge && (
          <span className="font-serif text-xs font-semibold text-herbal border border-herbal/30 px-2 py-0.5 rounded-full bg-herbal-light/45 tracking-widest">
            {badge}
          </span>
        )}
      </div>

      {/* Main Title */}
      <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-ink-dark tracking-wide leading-tight mt-1">
        {title}
      </h2>

      {/* Underline design with red cinnabar center dot */}
      <div className={`flex items-center w-36 mt-4 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[0.5px] bg-sand-300 flex-1"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-cinnabar mx-2"></div>
        <div className="h-[0.5px] bg-sand-300 flex-1"></div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="font-sans text-[15px] sm:text-[17px] text-sand-700 max-w-2xl font-normal leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
