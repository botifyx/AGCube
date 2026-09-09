interface ClassicWMSLogoProps {
  className?: string;
  variant?: 'full' | 'mark-only' | 'horizontal';
  width?: number | string;
}

export function ClassicWMSLogo({ className = '', variant = 'full', width }: ClassicWMSLogoProps) {
  if (variant === 'mark-only') {
    return (
      <svg
        viewBox="0 0 110 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: width || 'auto' }}
      >
        {/* Upper orange interlocking piece */}
        <path d="M 0 0 L 110 0 L 110 52 L 62 52 L 62 90 L 0 90 Z" fill="#F57C00" />
        {/* Lower grey interlocking piece */}
        <path d="M 0 102 L 48 102 L 48 64 L 110 64 L 110 142 L 0 142 Z" fill="#5A5B5E" />
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <svg
          viewBox="0 0 110 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-auto flex-shrink-0"
        >
          <path d="M 0 0 L 110 0 L 110 52 L 62 52 L 62 90 L 0 90 Z" fill="#F57C00" />
          <path d="M 0 102 L 48 102 L 48 64 L 110 64 L 110 142 L 0 142 Z" fill="#5A5B5E" />
        </svg>
        <div className="flex flex-col">
          <div className="flex items-baseline font-bold tracking-wider leading-none">
            <span className="text-orange-500 text-lg">CLASSIC</span>
            <span className="text-zinc-600 dark:text-zinc-300 text-lg ml-1">WMS</span>
            <span className="text-[10px] text-zinc-500 font-medium ml-0.5 relative -top-1.5">®</span>
          </div>
          <span className="text-[8px] font-semibold text-zinc-500 dark:text-zinc-400 tracking-[0.2em] uppercase mt-0.5">
            Robust Chained Automation
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center select-none ${className}`} style={{ width: width || 'auto' }}>
      {/* Interlocking Symbol Mark */}
      <svg
        viewBox="0 0 110 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 sm:h-12 w-auto mb-2 drop-shadow-sm"
      >
        <path d="M 0 0 L 110 0 L 110 52 L 62 52 L 62 90 L 0 90 Z" fill="#F57C00" />
        <path d="M 0 102 L 48 102 L 48 64 L 110 64 L 110 142 L 0 142 Z" fill="#5A5B5E" />
      </svg>

      {/* Brand Name */}
      <div className="flex items-baseline font-bold tracking-[0.15em] leading-none">
        <span className="text-orange-500 text-xl sm:text-2xl font-black">CLASSIC</span>
        <span className="text-zinc-700 dark:text-zinc-200 text-xl sm:text-2xl font-black ml-1.5">WMS</span>
        <span className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5 relative -top-2">®</span>
      </div>

      {/* Subtitle */}
      <div className="text-[9px] sm:text-[10px] font-bold text-zinc-500 dark:text-zinc-400 tracking-[0.25em] uppercase mt-1.5 whitespace-nowrap">
        * ROBUST CHAINED AUTOMATION *
      </div>
    </div>
  );
}
