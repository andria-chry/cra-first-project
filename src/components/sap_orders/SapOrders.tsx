import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css';
import SapOrderService from "./SapOrderService";


export default function SapOrders() {
    const [{RowSapOrders, columnDefs}] = SapOrderService();
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 1600 }}>
            <AgGridReact rowData={RowSapOrders} columnDefs={columnDefs}></AgGridReact>
        </div>
    );
}
