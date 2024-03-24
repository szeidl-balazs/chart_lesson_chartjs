import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";


/*Technology_1: the data and the chart is in the same file, if there are few data:*/
/*module from: https://recharts.org/*/

const DataWithChart = () => {
    

    const data = [

        {name: "P9944", yield: 13.48 },
        {name: "KWS OLTENIO", yield: 13.42},
        {name: "RGT Alexx", yield: 13.16}
      ]

    return (
        <div className="chart-wrap">
            <h1>Magyar Kukorica Klub</h1>
            <h2>Termés verseny 2023.</h2>
            <h2>FAO300 csoport</h2>
            <h2>Termés eredmények t/ha</h2>


            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"  font-weight="bold"/>
                <YAxis  
                    title="t/ha" 
                    domain={['dataMin-1', 'dataMax']}
                    label={{
                        value: "t/ha",
                        position: "insideLeft",
                        angle: -90
                    }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="yield" fill="orange" label={{position: "insideTopCenter", fill: "#000000"}}/>
            </BarChart>
        </div>
    )
}

export default DataWithChart;