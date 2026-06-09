import React, { useEffect, useRef, useState } from "react";
import Usedbounce from "../Usedebounce";

type Product = {
  id: number;
  title: string;
};

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const [memo, setMemo] = useState<Record<string, Product[]>>({});

  const abortControllerRef = useRef<AbortController | null>(null);

  const debouncedSearch = Usedbounce(search, 500);

  const fetchData = async (query: string) => {
    if (!query.trim()) {
      setData([]);
      return;
    }

    if (memo[query]) {
      setData(memo[query]);
      return;
    }

    abortControllerRef.current?.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=10`,
        {
          signal: controller.signal,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const json = await response.json();

      setData(json.products);

      setMemo((prev) => ({
        ...prev,
        [query]: json.products,
      }));
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(debouncedSearch);
  }, [debouncedSearch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        setActiveIndex((prev) => (prev < data.length - 1 ? prev + 1 : prev));
        break;

      case "ArrowUp":
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;

      case "Escape":
        setData([]);
        break;

      case "Enter":
        if (activeIndex >= 0) {
          setSearch(data[activeIndex].title);
          setData([]);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="min-w-xl text-left mx-auto mt-16 px-4">
      <div className="relative">
        <label
          htmlFor="product-search"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Search Products
        </label>

        <input
          id="product-search"
          type="text"
          value={search}
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={data.length > 0}
          aria-controls="search-results"
          aria-autocomplete="list"
          className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        />

        {loading && <p className="mt-2 text-sm text-gray-500">Loading...</p>}

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        {data.length > 0 && (
          <ul
            id="search-results"
            role="listbox"
            className="
              absolute
              z-10
              mt-2
              w-full
              max-h-80
              overflow-y-auto
              rounded-xl
              border
              border-gray-200
              bg-white
              shadow-lg
              h-auto
            "
          >
            {data.map((item, index) => (
              <li
                key={item.id}
                role="option"
                aria-selected={activeIndex === index}
                onMouseDown={() => {
                  setSearch(item.title);
                  setData([]);
                }}
                className={`
                  cursor-pointer
                  px-4
                  py-3
                  transition
                  ${activeIndex === index ? "bg-blue-100" : "hover:bg-gray-100"}
                `}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}

        {!loading && search && data.length === 0 && !error && (
          <div className="mt-2 rounded-lg border p-3 text-sm text-gray-500">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
