import { LAYOUT_CONSTANTS } from '@/lib/constants';

export function AboutContainer({ children }) {
  return (
    <div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{ 
        paddingLeft: LAYOUT_CONSTANTS.CONTAINER_PADDING.X,
        paddingRight: LAYOUT_CONSTANTS.CONTAINER_PADDING.X
      }}
    >
      {children}
    </div>
  );
}