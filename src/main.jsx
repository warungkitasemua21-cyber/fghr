import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {LineChart,Line,BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer} from "recharts";
import * as XLSX from "xlsx";
import "./style.css";

const sample=[
{date:"02-09-2026",sales:"Andi",customer:"PT ABC",activity:"Site Visit",status:"Proposal",revenue:20000000}
];

function App(){

const [salesData,setSalesData]=useState(sample);
const [menu,setMenu]=useState("CEO Dashboard");

const [form,setForm]=useState({
date:"",sales:"",customer:"",activity:"Follow Up",status:"Lead",revenue:""
});

function save(){
setSalesData([...salesData,{...form,revenue:Number(form.revenue)}]);
}

function exportExcel(){
const ws=XLSX.utils.json_to_sheet(salesData);
const wb=XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb,ws,"Sales Activity");
XLSX.writeFile(wb,"Jagara_Sales_Report.xlsx");
}

return <div className="layout">

<aside>
<h1>JAGARA</h1>
<p>Eco Park CRM</p>

<button onClick={()=>setMenu("CEO Dashboard")}>CEO Dashboard</button>
<button onClick={()=>setMenu("Sales Input")}>Sales Input</button>
<button onClick={()=>setMenu("Digital Marketing")}>Digital Marketing</button>
<button onClick={()=>setMenu("KPI Scorecard")}>KPI Scorecard</button>
<button onClick={exportExcel}>Download Excel</button>

</aside>

<main>
<h1>{menu}</h1>

<div className="cards">
<Card t="Revenue" v="Rp 1,45 M"/>
<Card t="Lead" v="412"/>
<Card t="Booking" v="98"/>
<Card t="KPI" v="91%"/>
</div>

{menu==="CEO Dashboard" &&
<div className="panel">
<h2>Sales Trend</h2>
<ResponsiveContainer height={250}>
<LineChart data={[{m:"Jan",v:50},{m:"Feb",v:80},{m:"Mar",v:120}]}>
<XAxis dataKey="m"/><YAxis/><Tooltip/><Line dataKey="v"/>
</LineChart>
</ResponsiveContainer>
</div>
}

{menu==="Sales Input" &&
<div className="panel">
<h2>Sales Activity Input</h2>
<input placeholder="Tanggal" onChange={e=>setForm({...form,date:e.target.value})}/>
<input placeholder="Nama Sales" onChange={e=>setForm({...form,sales:e.target.value})}/>
<input placeholder="Customer" onChange={e=>setForm({...form,customer:e.target.value})}/>

<select onChange={e=>setForm({...form,activity:e.target.value})}>
<option>Call</option>
<option>Follow Up</option>
<option>Meeting</option>
<option>Site Visit</option>
<option>Proposal</option>
<option>Negotiation</option>
<option>Closing</option>
</select>

<select onChange={e=>setForm({...form,status:e.target.value})}>
<option>Lead</option>
<option>Qualified</option>
<option>Proposal</option>
<option>Won</option>
<option>Lost</option>
</select>

<input placeholder="Revenue" onChange={e=>setForm({...form,revenue:e.target.value})}/>

<button onClick={save}>Simpan</button>

<table>
<tr><th>Sales</th><th>Customer</th><th>Activity</th><th>Status</th></tr>
{salesData.map(x=>
<tr><td>{x.sales}</td><td>{x.customer}</td><td>{x.activity}</td><td>{x.status}</td></tr>
)}
</table>
</div>
}

{menu==="Digital Marketing" &&
<div className="panel">
<h2>Digital Marketing Activity Input</h2>
<input placeholder="PIC Marketing"/>
<input placeholder="Campaign"/>
<select>
<option>Instagram</option>
<option>TikTok</option>
<option>Facebook</option>
<option>Google</option>
<option>WhatsApp</option>
</select>
<input placeholder="Content Published"/>
<input placeholder="Reach"/>
<input placeholder="Lead"/>
<input placeholder="Booking"/>
<input placeholder="Revenue Contribution"/>
<button>Simpan Campaign</button>
</div>
}

{menu==="KPI Scorecard" &&
<div className="panel">
<h2>KPI Calculation</h2>
<table>
<tr><th>KPI</th><th>Weight</th></tr>
<tr><td>Sales Activity</td><td>40%</td></tr>
<tr><td>Sales Result</td><td>35%</td></tr>
<tr><td>Digital Marketing</td><td>25%</td></tr>
</table>
</div>
}

</main>
</div>
}

function Card({t,v}){
return <div className="card"><small>{t}</small><h2>{v}</h2></div>
}

createRoot(document.getElementById("root")).render(<App/>);