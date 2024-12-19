import { LAYOUT_CONSTANTS } from '@/lib/constants';

export function VenturesContainer({ children }) {
  return (
    <div 
      className="max-w-7xl mx-auto"
      style={{ 
        paddingLeft: LAYOUT_CONSTANTS.CONTAINER_PADDING.X,
        paddingRight: LAYOUT_CONSTANTS.CONTAINER_PADDING.X
      }}
    >
      {children}
    </div>
  );
}