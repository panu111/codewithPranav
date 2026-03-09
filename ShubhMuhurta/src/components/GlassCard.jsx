export default function GlassCard({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl
        bg-[rgba(15,23,42,0.6)]
        backdrop-blur-xl
        border border-yellow-400/15
        shadow-lg
        transition-all duration-300
        ${hover ? "hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400/40" : ""}
        ${className}
      `}
    >
      {/* ✨ Shine effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-700" />
      </div>

      {children}
    </div>
  );
}