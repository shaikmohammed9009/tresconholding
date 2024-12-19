import { LAYOUT_CONSTANTS } from '@/lib/constants';

export function VisionContainer({ children }) {
  return (
    <div 
      className="mx-auto w-[850px]"
      style={{ 
        paddingLeft: LAYOUT_CONSTANTS.CONTAINER_PADDING.X,
        paddingRight: LAYOUT_CONSTANTS.CONTAINER_PADDING.X
      }}
    >
      {children}
    </div>
  );
}