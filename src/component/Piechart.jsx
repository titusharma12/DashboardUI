import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
function Piechart() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <PieChart width={230} height={310}  style={{marginTop:'-5rem'}} >
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={80}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default Piechart;
