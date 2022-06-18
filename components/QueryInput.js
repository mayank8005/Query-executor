import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-sql";

import ToggleButton from "@mui/material/ToggleButton";
import CheckIcon from "@mui/icons-material/Check";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const QueryInput = (props) => {
  const [query, setQuery] = useState("");
  const [suggestedQuery, setSuggestedQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleExpansionToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const executeQuery = async () => {
    await props.execute(query.toLowerCase());
    setIsExpanded(false);
  };

  const handleSuggestedQueryChange = (event) => {
    setSuggestedQuery(event.target.value);
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (!isExpanded) return;
    Prism.highlightAll();
  }, [query, isExpanded]);

  return (
    <div className="w-3/4 mt-12">
      <h2 className="mb-4 text-white font-semibold text-lg flex justify-between flex-col md:flex-row">
        Query
        <div>
          <span className="font-light"> query panel expanded toggle:</span>
          <ToggleButton
            value="check"
            className="mx-4 bg-red-500"
            selected={isExpanded}
            onChange={handleExpansionToggleClick}
          >
            <CheckIcon className="h-4 w-4" />
          </ToggleButton>
        </div>
        {isExpanded ? (
          <div>
            <span className="font-light">example SQL queries:</span>
            <Select
              labelId="example query"
              id="example query"
              value={suggestedQuery}
              label="Age"
              className="mx-4 h-8"
              onChange={handleSuggestedQueryChange}
            >
              <MenuItem value={"select * from small-table"}>
                small table
              </MenuItem>
              <MenuItem value={"select * from large-table"}>
                large table
              </MenuItem>
              <MenuItem value={"select * from xl-table"}>
                extra large table
              </MenuItem>
            </Select>
          </div>
        ) : (
          <div></div>
        )}
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
            <button
              onClick={executeQuery}
              className="bg-sky-400 text-white py-2 px-8 rounded-lg"
            >
              Execute
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QueryInput;
