"use client";

export function FooterBottom() {
  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-sm text-gray-400">
          © 2024 TRESCON
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Code of Conduct
          </a>
          <a href="#" className="hover:text-white transition-colors">
            General Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
}