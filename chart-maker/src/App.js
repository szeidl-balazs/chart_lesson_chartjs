import './App.css';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";

function App() {

  const data = [

    {name: "P9944", yield: 13.48 },
    {name: "KWS OLTENIO", yield: 13.42},
    {name: "RGT Alexx", yield: 13.16}
  ]

  return (
    <div className="App">
      <h1>Magyar Kukorica Klub</h1>
      <h2>Termés verseny 2023.</h2>
      <h2>FAO300 csoport</h2>
      <h2>Termés eredmények t/ha</h2>

    {/*module from: https://recharts.org/*/}

    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="yield" fill="#8884d8" />
    </BarChart>
    </div>
  );
}

export default App;
