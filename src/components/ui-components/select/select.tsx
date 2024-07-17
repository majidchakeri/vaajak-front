import { forwardRef } from "react";
import { CircleAlert } from "lucide-react";

interface ISelectProps {
  options?: any[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  value?: string;
  error?: string;
  name?:string;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ options, onChange, value, label, error, name }, ref) => {
    return (
      <div className="flex flex-col w-full py-4">
        <label
          className={`px-4 py-1 ${
            error ? "text-red-500" : "text-alis-accordion"
          } text-sm`}
          htmlFor="select"
        >
          {label}
        </label>
        <select
          id="select"
          ref={ref}
          value={value}
          name={name}
          onChange={onChange}
          className={`w-full  text-sm bg-gray-50 border ${
            error ? "border-red-500" : "border-gray-300"
          } text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}

          //className={`w-full m-1 text-sm bg-gray-50 border ${errors.select ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        >
          <option value="">انتخاب کنید...</option>

          {options && options.length > 0 ? (
            options?.map((el: any, i: number) => (
              <option key={i} value={el.id} >
                {el.groupName || el.fullName}
              </option>
            ))
          ) : (
            <option>در حال بارگذاری...</option>
          )}
        </select>
        {error && (
          <div className="flex items-center text-red-500 text-xs mt-2 gap-1">
            <CircleAlert size="16px" />
            <p className="text-red-500 text-xs">{error}</p>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
