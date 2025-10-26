export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-3 py-2 rounded-md font-medium bg-primary text-white hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}
