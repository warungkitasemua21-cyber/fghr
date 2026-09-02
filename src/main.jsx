import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {BarChart,Bar,LineChart,Line,PieChart,Pie,Cell,XAxis,YAxis,Tooltip,ResponsiveContainer} from "recharts";
import "./style.css";

const salesTrend=[
{day:"1",revenue:20},{day:"5",revenue:35},{day:"10",revenue:45},
{day:"15",revenue:60},{day:"20",revenue:55},{day:"25",revenue:80}
];

const funnel=[
{name:"Lead",value:640},
{name:"Qualified",value:315},
{name:"Proposal",value:142},
{name:"Negotiation",value:98},
{name:"Won",value:94}
];

const performers=[
{name:"Andi",score:92},
{name:"Budi",score:87},
{name:"Cindy",score:84},
{name:"David",score:79}
];

function App(){
const [filter,setFilter]=useState("All Sales");

return <div className="app">

<aside>
<h1>JAGARA</h1>
<p>Eco Park Sales Center</p>
<select onChange={e=>setFilter(e.target.value)}>
<option>All Sales</option>
<option>Andi</option>
<option>Budi</option>
<option>Cindy</option>
</select>

<button>CEO Dashboard</button>
<button>Sales Activity Input</button>
<button>Digital Marketing</button>
<button>KPI Scorecard</button>
<button>Reports</button>
</aside>

<main>

<header>
<h1>Sales Activity Report</h1>
<p>Performance Overview | {filter}</p>
</header>

<div className="cards">
<Card title="Total Sales" value="Rp 1.45 M"/>
<Card title="New Leads" value="412 Leads"/>
<Card title="Deals Closed" value="98 Deals"/>
<Card title="Avg Deal Value" value="Rp 14.8 Jt"/>
</div>


<div className="grid">

<div className="panel">
<h2>Monthly Sales Trend</h2>
<ResponsiveContainer height={260}>
<LineChart data={salesTrend}>
<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>
<Line dataKey="revenue"/>
</LineChart>
</ResponsiveContainer>
</div>


<div className="panel">
<h2>Lead Funnel</h2>
<ResponsiveContainer height={260}>
<BarChart data={funnel}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="value"/>
</BarChart>
</ResponsiveContainer>
</div>

</div>


<div className="grid">

<div className="panel">
<h2>Top Sales Performance</h2>
<ResponsiveContainer height={250}>
<BarChart data={performers}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="score"/>
</BarChart>
</ResponsiveContainer>
</div>


<div className="panel">
<h2>Recent Activities</h2>
<table>
<tr><th>Time</th><th>Sales</th><th>Activity</th><th>Customer</th></tr>
<tr><td>14:32</td><td>Budi</td><td>Call Qualified</td><td>Mega Corp</td></tr>
<tr><td>11:15</td><td>Andi</td><td>Meeting</td><td>PT ABC</td></tr>
</table>
</div>

</div>


<div className="panel">
<h2>Sales Activity Input</h2>
<div className="form">
<input placeholder="Nama Sales"/>
<input placeholder="Customer"/>
<select><option>Corporate</option><option>School</option><option>Family</option></select>
<select><option>Follow Up</option><option>Site Visit</option><option>Proposal</option><option>Closing</option></select>
<input placeholder="Potential Revenue"/>
<button>Simpan</button>
</div>
</div>


<div className="panel">
<h2>Digital Marketing Performance</h2>
<div className="cards">
<Card title="Content" value="30"/>
<Card title="Reach" value="125K"/>
<Card title="WhatsApp Lead" value="250"/>
<Card title="Conversion" value="18%"/>
</div>
</div>


<div className="panel">
<h2>KPI Scorecard</h2>
<table>
<tr><th>Category</th><th>Weight</th><th>Score</th></tr>
<tr><td>Sales Activity</td><td>40%</td><td>95%</td></tr>
<tr><td>Sales Result</td><td>35%</td><td>90%</td></tr>
<tr><td>Digital Marketing</td><td>25%</td><td>88%</td></tr>
</table>
<h1>Final Company Score: 91%</h1>
</div>


</main>
</div>
}

function Card({title,value}){
return <div className="card"><small>{title}</small><h2>{value}</h2></div>
}

createRoot(document.getElementById("root")).render(<App/>);