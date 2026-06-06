interface AvatarProps {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  ringColor?: string;
  className?: string;
}

export default function Avatar({
  name,
  src,
  size = "md",
  ringColor,
  className = "",
}: AvatarProps) {
  const sizeStyles = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "bg-fb-primary text-white",
    "bg-emerald-500 text-white",
    "bg-amber-500 text-white",
    "bg-rose-500 text-white",
    "bg-violet-500 text-white",
    "bg-cyan-500 text-white",
  ];

  const colorIndex =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return (
    <div
      className={`${sizeStyles[size]} rounded-full flex items-center justify-center font-semibold select-none ${
        ringColor ? `ring-2 ${ringColor}` : ""
      } ${src ? "" : colors[colorIndex]} ${className}`}
      title={name}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}
