import { useMemo } from "react";
import { AutoSizer, Column, Table } from "react-virtualized";
import Tooltip from "@mui/material/Tooltip";

const QueryResult = (props) => {
  
  const cols = useMemo(() => {
    if (!props.queryResult || !props.queryResult.length) return [];
    return props.queryResult[0].map((header) => ({
      label: header,
      dataKey: header,
      width: 200,
    }));
  }, [props.queryResult]);

  const rows = useMemo(() => {
    if (!props.queryResult || !props.queryResult.length >= 2) return [];
    return props.queryResult
      .slice(1)
      .map((row) =>
        row.reduce(
          (acc, curr, idx) => ({ ...acc, [props.queryResult[0][idx]]: curr }),
          {}
        )
      );
  }, [props.queryResult]);

  if (props.executingQuery) {
    return (
      <div className="mt-4 w-3/4 p-8 rounded-md bg-sky-300 border-white border-2">
        Executing...
      </div>
    );
  }

  const cellRenderer = ({ cellData }) => (
    <div>
      <Tooltip title={cellData}>
        <div className="text-black whitespace-nowrap overflow-hidden font-bold text-sm text-ellipsis w-11/12">
          {cellData}
        </div>
      </Tooltip>
    </div>
  );

  const headerRenderer = ({ label }) => (
    <div>
      <span className="text-white font-bold text-sm">{label}</span>
    </div>
  );

  return (
    <>
      <div className="mt-4 w-3/4 rounded-md bg-sky-300 border-white border-2 grow">
        <AutoSizer>
          {({ height, width }) => (
            <Table
              height={height}
              width={width}
              rowHeight={25}
              headerHeight={25}
              rowCount={rows.length}
              rowGetter={({ index }) => rows[index]}
            >
              {cols.map(({ dataKey, label }) => {
                return (
                  <Column
                    key={dataKey}
                    width={300}
                    headerRenderer={(headerProps) =>
                      headerRenderer({ ...headerProps })
                    }
                    cellRenderer={cellRenderer}
                    dataKey={dataKey}
                    label={label}
                  />
                );
              })}
            </Table>
          )}
        </AutoSizer>
      </div>
      <div className="w-3/4 my-4 flex text-white font-bold">
        Row count: {rows.length}
      </div>
    </>
  );
};

export default QueryResult;
