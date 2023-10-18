import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {ColDef} from "ag-grid-community";

type SapOrder={
    id: string;
    order_id: number;
    retry: number;
    status: string;
    batch_id: string;
    entry_timestamp: number;
    update_timestamp: number;
    order_timestamp: number;
}

const RowSapOrders: SapOrder[] = [
    { id: "1232132", order_id :64589022, retry: 1, status: "new", batch_id: "32854375423dfefr", entry_timestamp: Date.now(), order_timestamp: Date.now(), update_timestamp: Date.now()},
    { id: "1232132", order_id :64589022, retry: 1, status: "new", batch_id: "32854375423dfefr", entry_timestamp: Date.now(), order_timestamp: Date.now(), update_timestamp: Date.now()},
    { id: "1232132", order_id :64589022, retry: 1, status: "new", batch_id: "32854375423dfefr", entry_timestamp: Date.now(), order_timestamp: Date.now(), update_timestamp: Date.now()},
    { id: "1232132", order_id :64589022, retry: 1, status: "new", batch_id: "32854375423dfefr", entry_timestamp: Date.now(), order_timestamp: Date.now(), update_timestamp: Date.now()},
    { id: "1232132", order_id :64589022, retry: 1, status: "new", batch_id: "32854375423dfefr", entry_timestamp: Date.now(), order_timestamp: Date.now(), update_timestamp: Date.now()},
    { id: "1232132", order_id :64589022, retry: 1, status: "new", batch_id: "32854375423dfefr", entry_timestamp: Date.now(), order_timestamp: Date.now(), update_timestamp: Date.now()}
];

const columnDefs: ColDef[]=[
    {headerName: "id", field: "id"},
    {headerName: "order id", field: "order_id"},
    {headerName: "retry", field: "retry"},
    {headerName: "status", field: "status"},
    {headerName: "batch id", field: "batch_id"},
    {headerName: "entry timestamp", field: "entry_timestamp"},
    {headerName: "update timestamp", field: "update_timestamp"},
    {headerName: "order timestamp", field: "order_timestamp"}
];
export default function SapOrderService() {
    return  [{RowSapOrders, columnDefs}];
}
