// This is an example of how your Input component could be modified.
// Adjust it to fit your actual component's structure.

export const Input = ({ label, type = 'text', placeholder, icon, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm 
            focus:border-primary focus:ring-primary sm:text-sm
            ${icon ? 'pl-10' : 'pl-3'} 
            py-2.5 
          `}
          {...props}
        />
      </div>
    </div>
  );
};