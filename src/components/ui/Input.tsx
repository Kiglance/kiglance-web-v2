interface InputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
}: InputProps) => {
  const baseInputClasses =
    'w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors duration-200';

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block font-medium text-white">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseInputClasses} min-h-[120px] resize-none`}
          required={required}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClasses}
          required={required}
        />
      )}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};
