import React, { useState } from "react";
import checkboxData from "../../data/nestedCheckbox.json";

type Checkbox = {
  id: number;
  label: string;
  checked: boolean;
  children?: Checkbox[];
};

type CheckboxProps = {
  data: Checkbox[];
  checkedInput: Record<number, boolean>;
  setIsCheckedInput: React.Dispatch<
    React.SetStateAction<Record<number, boolean>>
  >;
};

const CheckBoxes = ({
  data,
  checkedInput,
  setIsCheckedInput,
}: CheckboxProps) => {
  const handleCheckbox = (isChecked: boolean, item: Checkbox) => {
    setIsCheckedInput((prev) => {
      const newState = { ...prev, [item.id]: isChecked };

      function updateChildren(node: Checkbox) {
        if (!node.children) return;
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      }
      updateChildren(item);

      function isParentChecked(node: Checkbox): boolean {
        if (!node.children?.length) {
          return newState[node.id] ?? node.checked;
        }

        const isAllChildrenChecked = node.children.every((child) =>
          isParentChecked(child),
        );

        newState[node.id] = isAllChildrenChecked;

        return isAllChildrenChecked;
      }

      for (const checkbox of checkboxData) {
        isParentChecked(checkbox);
      }

      return newState;
    });
  };

  return (
    <div className="text-left pl-4">
      {data.map((item) => (
        <div key={item.id}>
          <input
            id={`checkbox-${item.id}`}
            type="checkbox"
            checked={checkedInput[item.id] ?? item.checked}
            onChange={(e) => handleCheckbox(e.target.checked, item)}
          />
          <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>

          {item.children && item.children.length > 0 && (
            <CheckBoxes
              data={item.children}
              checkedInput={checkedInput}
              setIsCheckedInput={setIsCheckedInput}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheckbox = () => {
  const [checkedInput, setIsCheckedInput] = useState<Record<number, boolean>>(
    {},
  );

  return (
    <div>
      <CheckBoxes
        data={checkboxData as Checkbox[]}
        checkedInput={checkedInput}
        setIsCheckedInput={setIsCheckedInput}
      />
    </div>
  );
};

export default NestedCheckbox;
