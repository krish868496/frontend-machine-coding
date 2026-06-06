import { useState } from "react";
import nestedFolderData from "../../data/nestedFolder.json";

type FolderItem = {
  id: number;
  name: string;
  isFolder: boolean;
  children?: FolderItem[];
};

type RenderFolderProps = {
  folders: FolderItem[];
  openedFolders: Record<number, boolean>;
  toggleFolder: (id: number) => void;
  handleAddItem: (parentId: number) => void;
  handleEditItem: (id: number) => void;
  handleDeleteItem: (id: number) => void;
};

const RenderFolder = ({
  folders,
  openedFolders,
  toggleFolder,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
}: RenderFolderProps) => {
  return (
    <ul role="group" className="pl-6">
      {folders.map((item) => {
        const isOpen = openedFolders[item.id];

        return (
          <li
            key={item.id}
            role="treeitem"
            aria-expanded={item.isFolder ? isOpen : undefined}
            className="my-1"
          >
            <div
              className="
                flex
                items-center
                gap-2
                rounded-md
                px-2
                py-1
                hover:bg-gray-100
              "
            >
              {item.isFolder ? (
                <button
                  type="button"
                  onClick={() => toggleFolder(item.id)}
                  aria-expanded={isOpen}
                  aria-label={
                    isOpen ? `Collapse ${item.name}` : `Expand ${item.name}`
                  }
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded
                    border
                    hover:bg-gray-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                >
                  {(item.children ?? []).length > 0
                    ? isOpen
                      ? "−"
                      : "+"
                    : "•"}
                </button>
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center"
                >
                  •
                </span>
              )}

              <span className="text-lg" aria-hidden="true">
                {item.isFolder ? "📁" : "📄"}
              </span>

              <span className="font-medium">{item.name}</span>

              <div className="ml-auto flex items-center gap-2">
                {item.isFolder && (
                  <button
                    type="button"
                    onClick={() => handleAddItem(item.id)}
                    aria-label={`Add item inside ${item.name}`}
                    className="
                      rounded
                      p-1
                      hover:bg-green-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-green-500
                    "
                  >
                    ➕
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleEditItem(item.id)}
                  aria-label={`Edit ${item.name}`}
                  className="
                    rounded
                    p-1
                    hover:bg-yellow-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-yellow-500
                  "
                >
                  ✏️
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteItem(item.id)}
                  aria-label={`Delete ${item.name}`}
                  className="
                    rounded
                    p-1
                    hover:bg-red-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                  "
                >
                  🗑️
                </button>
              </div>
            </div>

            {item.isFolder &&
              isOpen &&
              item.children &&
              item.children.length > 0 && (
                <RenderFolder
                  folders={item.children}
                  openedFolders={openedFolders}
                  toggleFolder={toggleFolder}
                  handleAddItem={handleAddItem}
                  handleEditItem={handleEditItem}
                  handleDeleteItem={handleDeleteItem}
                />
              )}
          </li>
        );
      })}
    </ul>
  );
};

const NestedFolder = () => {
  const [folderData, setFolderData] = useState<FolderItem[]>(
    nestedFolderData as FolderItem[],
  );

  const [openedFolders, setOpenedFolders] = useState<Record<number, boolean>>(
    {},
  );

  const toggleFolder = (id: number) => {
    setOpenedFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddItem = (parentId: number) => {
    const newName = prompt("Enter folder/file name");

    if (!newName?.trim()) return;

    const addItem = (data: FolderItem[], parentId: number): FolderItem[] => {
      return data.map((item) => {
        if (item.id === parentId) {
          const newItem: FolderItem = {
            id: Date.now(),
            name: newName,
            isFolder: true,
            children: [],
          };

          return {
            ...item,
            children: [...(item.children ?? []), newItem],
          };
        }

        return {
          ...item,
          children: addItem(item.children ?? [], parentId),
        };
      });
    };

    setFolderData((prev) => addItem(prev, parentId));

    setOpenedFolders((prev) => ({
      ...prev,
      [parentId]: true,
    }));
  };

  const findItem = (data: FolderItem[], id: number): FolderItem | null => {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }

      const found = findItem(item.children ?? [], id);

      if (found) {
        return found;
      }
    }

    return null;
  };

  const handleEditItem = (id: number) => {
    const item = findItem(folderData, id);

    if (!item) return;

    const newName = prompt("Enter new name", item.name);

    if (!newName?.trim()) return;

    const editItem = (data: FolderItem[], id: number): FolderItem[] => {
      return data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: newName,
          };
        }

        return {
          ...item,
          children: editItem(item.children ?? [], id),
        };
      });
    };

    setFolderData((prev) => editItem(prev, id));
  };

  const handleDeleteItem = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?",
    );

    if (!confirmed) return;

    const deleteItem = (data: FolderItem[], id: number): FolderItem[] => {
      return data
        .filter((item) => item.id !== id)
        .map((item) => ({
          ...item,
          children: deleteItem(item.children ?? [], id),
        }));
    };

    setFolderData((prev) => deleteItem(prev, id));
  };

  return (
    <section className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Nested Folder Explorer</h1>

      <div
        role="tree"
        aria-label="Folder Structure"
        className="
          rounded-lg
          border
          bg-white
          p-4
          shadow-sm
        "
      >
        <RenderFolder
          folders={folderData}
          openedFolders={openedFolders}
          toggleFolder={toggleFolder}
          handleAddItem={handleAddItem}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </section>
  );
};

export default NestedFolder;
