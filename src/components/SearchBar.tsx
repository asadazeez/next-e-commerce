import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

type SearchBarProps = {
  placeholder?: string;
  suggestionsData: string[];  // Pass suggestions data as props
  onSearch: (query: string) => void;  // Callback to handle search action
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search", suggestionsData, onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Show suggestions based on input value
    if (value.length > 1) {
      const filteredSuggestions = suggestionsData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);  // Trigger the search action through the callback
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <form onSubmit={handleSearch} className="relative">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full h-7 pl-10   bg-inherit placeholder-inherit  rounded-full border text-base font-normal border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />

        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <FiSearch size={20} color='currentColor' />
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full bg-black border border-gray-300 rounded shadow-md mt-2">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setQuery(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;