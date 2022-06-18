import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-sql";

import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleExpansionToggleClick = () => {
      setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    Prism.highlightAll();
  }, [query]);

  return (
    <div className="w-3/4 mt-12">
      <h2 className="mb-4 text-white font-semibold text-lg">
          Query
          <ToggleButton
            value="check"
            className="mx-4"
            selected={isExpanded}
            onChange={handleExpansionToggleClick}
            >
            <CheckIcon className="h-4 w-4"/>
          </ToggleButton>
      </h2>
      {isExpanded ? (
        <div>
          <pre className="language-sql h-32 w-full p-4 rounded-lg">
            <code>{query}</code>
          </pre>
          <textarea
            onChange={handleQueryChange}
            placeholder="Write your query here"
            value={query}
            className="w-full h-32 resize-none p-4 font-medium bg-sky-100 rounded-lg"
          ></textarea>
          <div className="w-full flex justify-end mt-4">
            <button className="bg-sky-400 text-white py-2 px-8 rounded-lg">
              Execute
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QueryInput;
