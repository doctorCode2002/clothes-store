export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        mx-auto w-full
        px-4 sm:px-6 lg:px-8
        max-w-screen-sm
        sm:max-w-3xl
        md:max-w-5xl
        lg:max-w-7xl
        xl:max-w-screen-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}