import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,PieChart,Pie} from "recharts";
import "./style.css";

const kpi=[
["Revenue","Rp 150 Juta"],
["Booking","35"],
["Active Lead","180"],
["Final KPI Score","91%"]
];

const funnel=[
{name:"Inquiry",value:180},
{name:"Follow Up",value:320},
{name:"Site Visit",value:45},
{name:"Proposal",value:30},
{name:"Booking",value:35}
];

const sales=[
{name:"Sales A",value:92},
{name:"Sales B",value:86},
{name:"Sales C",value:78}
];

function App(){
const [menu,setMenu]=useState("CEO Dashboard");

return <div className="layout">
<aside>
<h1>JAGARA</h1>
<p>Eco Park CRM</p>
{["CEO Dashboard","Sales Manager","Sales Input","Digital Marketing","KPI Scorecard","Strategic Account","Report"].map(x=>
<button onClick={()=>setMenu(x)}>{x}</button>)}
</aside>

<main>
<header>
<h1>{menu}</h1>
<p>Real Time Sales & Revenue Performance Management</p>
</header>

<div className="cards">
{kpi.map(x=><div className="card"><span>{x[0]}</span><h2>{x[1]}</h2></div>)}
</div>

{menu==="CEO Dashboard" &&
<div className="panel">
<h2>Executive Performance Overview</h2>
<ResponsiveContainer height={300}>
<BarChart data={funnel}><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="value"/></BarChart>
</ResponsiveContainer>
</div>
}

{menu==="Sales Input" &&
<div className="panel">
<h2>Daily Sales Activity Input</h2>
<form>
<input placeholder="Nama Sales"/>
<input placeholder="Customer"/>
<select><option>Corporate</option><option>School</option><option>Family</option></select>
<input placeholder="Aktivitas"/>
<input placeholder="Potential Revenue"/>
<button>Simpan Data</button>
</form>
<h3>History Activity</h3>
<table><tr><th>Sales</th><th>Customer</th><th>Status</th><th>Revenue</th></tr>
<tr><td>Sales A</td><td>PT ABC</td><td>Proposal</td><td>20 Juta</td></tr></table>
</div>
}

{menu==="Sales Manager" &&
<div className="panel">
<h2>Team Performance Ranking</h2>
<ResponsiveContainer height={250}>
<BarChart data={sales}><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="value"/></BarChart>
</ResponsiveContainer>
</div>
}

{menu==="Digital Marketing" &&
<div className="panel">
<h2>Digital Marketing Control</h2>
<div className="cards">
<div className="card">Content<h2>30</h2></div>
<div className="card">Reach<h2>100K</h2></div>
<div className="card">WA Lead<h2>150</h2></div>
<div className="card">Conversion<h2>25%</h2></div>
</div>
</div>
}

{menu==="KPI Scorecard" &&
<div className="panel">
<h2>KPI Score Engine</h2>
<table>
<tr><th>Kategori</th><th>Bobot</th><th>Score</th></tr>
<tr><td>Sales Activity</td><td>40%</td><td>95%</td></tr>
<tr><td>Sales Result</td><td>35%</td><td>90%</td></tr>
<tr><td>Digital Marketing</td><td>25%</td><td>88%</td></tr>
</table>
<h1>Final Score:91%</h1>
</div>
}

</main>
</div>
}

createRoot(document.getElementById("root")).render(<App/>);