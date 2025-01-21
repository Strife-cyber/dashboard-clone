import "react-table";

declare module "react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface TableInstance<D extends object = object> {
    setGlobalFilter: (filterValue: string | undefined) => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface TableState<D extends object = object> {
    globalFilter: string | undefined;
  }
}
