import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function CTable({
  column,
  colConfig,
  classNameHeader,
  className,
  styleTextCol,
  styleTextHead,
  onClick,
  isLoading = false,
}: ICTable) {
  return (
    <div className={className}>
      <Table>
        <TableHeader className={classNameHeader}>
          <TableRow>
            {colConfig.map((col, id) => (
              <TableHead
                key={id}
                className={cn(
                  "font-medium text-base text-[#010101]",
                  styleTextHead,
                  {
                    "text-right": colConfig.length - 1 === id,
                  },
                )}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {column?.map((row, rowIndex) => (
            <TableRow key={row.invoice}>
              {colConfig.map((col, colIndex) => (
                <TableCell
                  onClick={() => onClick?.(row)}
                  key={`${rowIndex}-${colIndex}`}
                  className={cn(styleTextCol, {
                    "text-right": colConfig.length - 1 === colIndex,
                  })}
                >
                  {col.render(row, rowIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {isLoading && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={colConfig.length}>
                {isLoading ? <p className="text-center">Loading...</p> : null}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}
