"use client";

type Validation = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

type TextField = {
  type: "text" | "email";
  label: string;
  name: string;
  placeholder: string;
  validation?: Validation;
  defaultValue?: string;
};

type RadioField = {
  type: "radio";
  label: string;
  name: string;
  options: string[];
  validation?: Validation;
  defaultValue?: string;
};

type SelectField = {
  type: "select";
  label: string;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  validation?: Validation;
  defaultValue?: string;
};

type FormField = TextField | RadioField | SelectField;

const formConfig: FormField[] = [
  {
    type: "text",
    label: "First Name",
    name: "firstName",
    placeholder: "Enter your first name",
    validation: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    validation: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  {
    type: "radio",
    label: "Select your Gender",
    name: "gender",
    options: ["Male", "Female", "Other"],
    validation: {
      required: true,
    },
    defaultValue: "Male",
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: [
      {
        label: "United States",
        value: "US",
      },
      {
        label: "India",
        value: "IN",
      },
      {
        label: "United Kingdom",
        value: "UK",
      },
    ],
    validation: {
      required: true,
    },
    defaultValue: "IN",
  },
];

const ConfigDrivenForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const values = Object.fromEntries(formData.entries());

    console.log(values);

    alert(JSON.stringify(values, null, 2));
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            defaultValue={field.defaultValue}
            required={field.validation?.required}
            minLength={field.validation?.minLength}
            maxLength={field.validation?.maxLength}
            pattern={field.validation?.pattern?.source}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        );

      case "radio":
        return (
          <div className="flex gap-5">
            {field.options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  defaultChecked={field.defaultValue === option}
                  required={field.validation?.required}
                />
                {option}
              </label>
            ))}
          </div>
        );

      case "select":
        return (
          <select
            name={field.name}
            defaultValue={field.defaultValue}
            required={field.validation?.required}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          >
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Config Driven Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {formConfig.map((field) => (
            <div key={field.name} className="flex flex-col gap-2 text-left">
              <label className="font-semibold text-gray-700 ">{field.label}</label>

              {renderField(field)}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfigDrivenForm;
