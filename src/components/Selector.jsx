import { Icon } from "@iconify/react";

export default function Selector({ value, onChange }) {
  const options = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
  ];

  return (
    <div className=" rounded-xs p-3 bg-gray-300 ">
      <select
        className="border-0 outline-0 cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="p-2">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
