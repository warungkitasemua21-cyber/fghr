import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

function App(){

const [page,setPage]=useState("CEO Dashboard");

return <div className="layout">

<aside>
<h1>JAGARA</h1>
<p>Enterprise CRM</p>

{[
"CEO Dashboard",
"Sales Manager",
"Sales Input",
"Digital Marketing",
"KPI Scorecard",
"Reports"
].map(x=>
<button onClick={()=>setPage(x)}>{x}</button>
)}
</aside>

<main>
<h1>{page}</h1>

<div className="cards">
<Card t="Revenue" v="Rp 1,45 M"/>
<Card t="Lead" v="412"/>
<Card t="Booking" v="98"/>
<Card t="KPI Score" v="91%"/>
</div>

{page==="Sales Input" &&
<Panel title="Sales Activity Input">
<label>Sales PIC</label><input placeholder="Nama Sales"/>
<label>Customer</label><input placeholder="Customer"/>
<label>Segment</label>
<select><option>Corporate</option><option>School</option><option>Family</option></select>
<label>Activity</label>
<select>
<option>Call</option>
<option>Follow Up</option>
<option>Meeting</option>
<option>Site Visit</option>
<option>Proposal</option>
<option>Negotiation</option>
<option>Closing</option>
</select>
<input placeholder="Potential Revenue"/>
<input placeholder="Next Follow Up"/>
<button>Simpan Data</button>
</Panel>
}

{page==="Digital Marketing" &&
<Panel title="Digital Marketing Activity Input">
<input placeholder="PIC Marketing"/>
<input placeholder="Campaign Name"/>
<select>
<option>Instagram</option>
<option>TikTok</option>
<option>Facebook</option>
<option>Google</option>
<option>WhatsApp</option>
</select>
<input placeholder="Content Published"/>
<input placeholder="Reach"/>
<input placeholder="Engagement"/>
<input placeholder="Lead Generated"/>
<input placeholder="Booking Generated"/>
<input placeholder="Revenue Contribution"/>
<button>Simpan Campaign</button>
</Panel>
}

{page==="KPI Scorecard" &&
<Panel title="KPI Engine">
<table>
<tr><th>Parameter</th><th>Weight</th></tr>
<tr><td>Sales Activity</td><td>40%</td></tr>
<tr><td>Sales Result</td><td>35%</td></tr>
<tr><td>Digital Marketing</td><td>25%</td></tr>
</table>
</Panel>
}

{page==="Reports" &&
<Panel title="Report Center">
<button>Export Sales Excel</button>
<button>Export Digital Marketing Excel</button>
<button>Export KPI Report PDF</button>
</Panel>
}

{page==="CEO Dashboard" &&
<Panel title="Executive Overview">
<p>Revenue Trend</p>
<p>Sales Funnel</p>
<p>Top Performer</p>
<p>Digital Marketing Contribution</p>
<p>Monthly Performance</p>
</Panel>
}

</main>
</div>
}

function Card({t,v}){
return <div className="card"><small>{t}</small><h2>{v}</h2></div>
}

function Panel({title,children}){
return <div className="panel"><h2>{title}</h2>{children}</div>
}

createRoot(document.getElementById('root')).render(<App/>);