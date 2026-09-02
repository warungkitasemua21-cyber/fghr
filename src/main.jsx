import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

function App(){

const [role,setRole]=useState("CEO");
const [sales,setSales]=useState([]);
const [digital,setDigital]=useState([]);

return <div className="app">

<aside>
<h1>JAGARA</h1>
<p>Live CRM System</p>
<select onChange={e=>setRole(e.target.value)}>
<option>CEO</option>
<option>Sales Manager</option>
<option>Sales PIC</option>
<option>Digital Marketing</option>
</select>
</aside>

<main>

<h1>Jagara Eco Park Dashboard</h1>
<p>Login Role: {role}</p>

<div className="cards">
<Card title="Sales Activity" value={sales.length}/>
<Card title="Digital Activity" value={digital.length}/>
<Card title="Revenue" value="Rp 0"/>
<Card title="KPI Score" value="Waiting Data"/>
</div>

<section className="panel">
<h2>CEO Overview</h2>
<p>Dashboard akan otomatis berubah setelah input aktivitas dilakukan.</p>
</section>

<section className="panel">
<h2>Sales Manager Control</h2>
<p>Monitoring target, aktivitas, pipeline dan KPI sales.</p>
</section>

<section className="panel">
<h2>Sales PIC Input Flow</h2>
<input placeholder="Customer"/>
<input placeholder="Activity"/>
<button>Save Activity</button>
</section>

<section className="panel">
<h2>Digital Marketing Input Flow</h2>
<input placeholder="Campaign"/>
<input placeholder="Lead"/>
<button>Save Campaign</button>
</section>

<section className="panel">
<h2>KPI Calculation</h2>
<table>
<tr><td>Sales Activity</td><td>40%</td></tr>
<tr><td>Sales Result</td><td>35%</td></tr>
<tr><td>Digital Marketing</td><td>25%</td></tr>
</table>
</section>

</main>
</div>
}

function Card({title,value}){
return <div className="card"><b>{title}</b><h2>{value}</h2></div>
}

createRoot(document.getElementById("root")).render(<App/>);