interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export default function Card({
  children,
  className = "",
  hover = true,
  id,
}: CardProps) {
  return (
    <div
      id={id}
      className={`bg-fb-white rounded-2xl border border-fb-outline-variant/30 shadow-sm ${
        hover ? "hover:shadow-md transition-shadow duration-200" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
