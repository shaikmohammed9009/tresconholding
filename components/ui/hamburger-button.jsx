export function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-white hover:text-[#00A5A3] transition-colors"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="w-6 h-6 flex flex-col justify-around">
        <span
          className={`block h-0.5 w-full bg-current transform transition-transform ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-current transition-opacity ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-current transform transition-transform ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        />
      </div>
    </button>
  );
}