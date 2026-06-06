interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  required?: boolean;
  className?: string;
  endIcon?: React.ReactNode;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  id,
  name,
  required,
  className = "",
  endIcon,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-fb-gray-800"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-3 rounded-lg border border-fb-outline-variant bg-fb-white text-fb-gray-800 placeholder:text-fb-gray-400 focus:outline-none focus:ring-2 focus:ring-fb-primary/30 focus:border-fb-primary transition-all duration-200"
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-fb-gray-400 cursor-pointer hover:text-fb-gray-600 transition-colors">
            {endIcon}
          </div>
        )}
      </div>
    </div>
  );
}
