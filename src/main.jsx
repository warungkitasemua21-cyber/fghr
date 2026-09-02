import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import * as XLSX from "xlsx";
import "./style.css";

const initial=[
{
date:"2026-09-02",
sales:"Andi",
customer:"PT ABC",
activity:"Site Visit",
status:"Proposal",
revenue:20000000
}
];

function App(){

const [page,setPage]=useState("CEO Dashboard");
const [rows,setRows]=useState(initial);

const [form,setForm]=useState({
date:"",
sales:"",
customer:"",
activity:"",
status:"",
revenue:""
});

function save(){
setRows([...rows,{...form,revenue:Number(form.revenue)}]);
setForm({date:"",sales:"",customer:"",activity:"",status:"",revenue:""});
alert("Data berhasil disimpan");
}

function exportExcel(){

const ws=XLSX.utils.json_to_sheet(rows);
const wb=XLSX.utils.book_new();

XLSX.utils.book_append_sheet(
wb,
ws,
"Sales Activity"
);

XLSX.writeFile(
wb,
"Jagara_Sales_Activity_Report.xlsx"
);
}

return <div className="layout">

<aside>
<h1>JAGARA</h1>
<p>Eco Park Sales Center</p>

<select>
<option>All Sales</option>
<option>Andi</option>
<option>Budi</option>
<option>Cindy</option>
</select>

<button onClick={()=>setPage("CEO Dashboard")}>
CEO Dashboard
</button>

<button onClick={()=>setPage("Sales Activity Input")}>
Sales Activity Input
</button>

<button onClick={()=>setPage("Digital Marketing")}>
Digital Marketing
</button>

<button onClick={()=>setPage("KPI Scorecard")}>
KPI Scorecard
</button>

<button onClick={exportExcel} className="download">
Download Excel
</button>

</aside>


<main>

<h1>{page}</h1>

{page==="Sales Activity Input" &&

<div className="panel">

<h2>Input Aktivitas Sales Harian</h2>

<div className="form">

<input placeholder="Tanggal"
value={form.date}
onChange={e=>setForm({...form,date:e.target.value})}/>

<input placeholder="Nama Sales"
value={form.sales}
onChange={e=>setForm({...form,sales:e.target.value})}/>

<input placeholder="Customer"
value={form.customer}
onChange={e=>setForm({...form,customer:e.target.value})}/>

<select
value={form.activity}
onChange={e=>setForm({...form,activity:e.target.value})}>
<option>Follow Up</option>
<option>Meeting</option>
<option>Site Visit</option>
<option>Proposal</option>
<option>Closing</option>
</select>

<select
value={form.status}
onChange={e=>setForm({...form,status:e.target.value})}>
<option>Lead</option>
<option>Qualified</option>
<option>Proposal</option>
<option>Won</option>
<option>Lost</option>
</select>

<input placeholder="Potential Revenue"
value={form.revenue}
onChange={e=>setForm({...form,revenue:e.target.value})}/>

<button onClick={save}>
Simpan Aktivitas
</button>

</div>


<h2>History Input</h2>

<table>
<tr>
<th>Tanggal</th>
<th>Sales</th>
<th>Customer</th>
<th>Activity</th>
<th>Status</th>
<th>Revenue</th>
</tr>

{rows.map(r=>
<tr>
<td>{r.date}</td>
<td>{r.sales}</td>
<td>{r.customer}</td>
<td>{r.activity}</td>
<td>{r.status}</td>
<td>{r.revenue}</td>
</tr>
)}

</table>

</div>
}


{page!=="Sales Activity Input" &&
<div className="panel">
<h2>{page}</h2>
<p>Dashboard live performance Jagara Eco Park</p>
</div>
}

</main>

</div>
}

createRoot(document.getElementById("root")).render(<App/>);