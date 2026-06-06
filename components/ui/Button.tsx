import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  id?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  icon,
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none";

  const variantStyles = {
    primary:
      "bg-fb-primary hover:bg-fb-primary-hover text-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
    outline:
      "bg-fb-white hover:bg-fb-gray-50 text-fb-gray-800 border border-fb-outline-variant shadow-sm hover:shadow-md",
    ghost:
      "bg-transparent hover:bg-fb-gray-50 text-fb-gray-600 hover:text-fb-gray-800",
    dark: "bg-fb-primary hover:bg-fb-primary-hover text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} id={id}>
      {icon}
      {children}
    </button>
  );
}
