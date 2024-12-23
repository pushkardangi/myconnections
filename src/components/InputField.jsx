const InputField = ({ label, type, name, value, placeholder="", onChange }) => {
    return (
        <div className="my-4">
            <label htmlFor={name} className="text-sm font-medium text-slate-700">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 px-3 py-2 bg-gray-900 border text-white border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder={placeholder}
                autoComplete="on"
                required
            />
        </div>
    );
};

export default InputField;
