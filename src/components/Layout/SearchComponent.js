import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

import useAppStore from "../../hooks/use-app-store";

function SearchComponent() {
  const [inputValue, setInputValue] = useState("");

  const setSearchTerm = useAppStore((state) => state.setSearchTerm);

  const debouncedSearch = debounce(() => {
    setSearchTerm(inputValue);
  }, 500);

  useEffect(() => {
    debouncedSearch();

    // Cleanup function to cancel the debounce on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [inputValue, debouncedSearch]);

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="flex-1 p-2 border border-gray-300 rounded mr-2"
        placeholder="Enter search term..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default SearchComponent;
