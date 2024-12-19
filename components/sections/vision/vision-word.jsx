export function VisionWord({ children, id, className = '' }) {
  return (
    <span className={`${className}`}>
      {children}
    </span>
  );
}