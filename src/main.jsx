import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {BarChart,Bar,XAxis,YAxis,Tooltip} from "recharts";
import "./style.css";

const funnel=[
{name:"Lead",value:180},
{name:"Follow Up",value:320},
{name:"Visit",value:45},
{name:"Booking",value:35}
];

function App(){

const [role,setRole]=useState("CEO");

return <div className="container">

<h1>JAGARA ECO PARK</h1>
<h2>Sales CRM & Revenue Management V5</h2>

<select onChange={e=>setRole(e.target.value)}>
<option>CEO</option>
<option>Sales Manager</option>
<option>Sales PIC</option>
<option>Digital Marketing</option>
</select>

<div className="cards">
<Card title="Revenue" value="Rp 150 Juta"/>
<Card title="Booking" value="35"/>
<Card title="KPI Score" value="91%"/>
<Card title="Follow Up Due" value="12"/>
</div>

<div className="panel">
<h3>CEO Revenue Dashboard</h3>
<BarChart width={650} height={300} data={funnel}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="value"/>
</BarChart>
</div>

<div className="grid">

<Panel title="Sales CRM">
<ul>
<li>Customer Database</li>
<li>Daily Sales Activity</li>
<li>Follow Up Reminder</li>
<li>Site Visit Tracking</li>
<li>Quotation & Booking</li>
</ul>
</Panel>

<Panel title="Digital Marketing CRM">
<ul>
<li>Content Calendar</li>
<li>Campaign Tracking</li>
<li>Reach & Engagement</li>
<li>WhatsApp Lead</li>
<li>Conversion Tracking</li>
</ul>
</Panel>

</div>

<Panel title="KPI Score Engine">
<table>
<tr><td>Sales Activity</td><td>40%</td></tr>
<tr><td>Sales Result</td><td>35%</td></tr>
<tr><td>Digital Marketing</td><td>25%</td></tr>
</table>
</Panel>

<Panel title="Role Access">
Current User: {role}
</Panel>

</div>
}

function Card({title,value}){
return <div className="card">
<b>{title}</b>
<h2>{value}</h2>
</div>
}

function Panel({title,children}){
return <div className="panel">
<h3>{title}</h3>
{children}
</div>
}

createRoot(document.getElementById("root")).render(<App/>)