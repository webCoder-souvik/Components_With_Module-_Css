import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Define the shape of a single column
export interface Column {
  id: string;
  label: string;
  align?: "left" | "right" | "center";
  minWidth?: number;
  format?: (value: any, row: any) => React.ReactNode; // For custom rendering (e.g., chips, buttons)
}

interface CustomTableProps {
  columns: Column[];
  rows: any[];
  stickyHeader?: boolean;
  maxHeight?: number | string;
}

const CustomTable = ({
  columns,
  rows,
  stickyHeader = true,
  maxHeight = 440,
}: CustomTableProps) => {
  return (
    <TableContainer sx={{ maxHeight }}>
      <Table stickyHeader={stickyHeader} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row, index) => {
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.id || index}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })} */}
          {rows.map((row, rowIndex) => (
            <TableRow key={row.id || rowIndex}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {/* We pass both value AND the full row object here */}
                    {column.format ? column.format(value, row) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
