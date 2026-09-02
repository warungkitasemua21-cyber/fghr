import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer} from 'recharts';
import './style.css';

const data=[{name:'Lead',value:180},{name:'Visit',value:45},{name:'Booking',value:35}];

function App(){
const [page,setPage]=useState('CEO Dashboard');
return <div className="app">
<aside>
<h1>JAGARA</h1>
<button onClick={()=>setPage('CEO Dashboard')}>CEO Dashboard</button>
<button onClick={()=>setPage('Sales Input')}>Sales PIC Input</button>
<button onClick={()=>setPage('Digital Marketing')}>Digital Marketing</button>
<button onClick={()=>setPage('KPI Scorecard')}>KPI Scorecard</button>
</aside>
<main>
<h1>{page}</h1>
<div className="cards">
<div className="card">Revenue<h2>Rp150 Juta</h2></div>
<div className="card">Booking<h2>35</h2></div>
<div className="card">Lead<h2>180</h2></div>
<div className="card">KPI<h2>91%</h2></div>
</div>
<div className="panel">
<ResponsiveContainer width="100%" height={300}>
<BarChart data={data}><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="value"/></BarChart>
</ResponsiveContainer>
</div>
{page==='Sales Input'&&<div className="panel">
<h2>Input Aktivitas Sales Harian</h2>
<input placeholder="Nama Sales"/><input placeholder="Customer"/>
<input placeholder="Follow Up"/><input placeholder="Revenue"/>
<button>Simpan</button>
</div>}
{page==='Digital Marketing'&&<div className="panel">
<h2>Digital Marketing Control</h2>
<p>Content | Reach | Engagement | WhatsApp Lead | Conversion</p>
</div>}
{page==='KPI Scorecard'&&<div className="panel">
<h2>KPI Score</h2>
<p>Sales Activity 40%</p><p>Sales Result 35%</p><p>Digital Marketing 25%</p>
<h2>Final Score 91%</h2>
</div>}
</main></div>}
createRoot(document.getElementById('root')).render(<App/>);