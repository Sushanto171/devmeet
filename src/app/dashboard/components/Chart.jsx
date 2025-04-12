"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const data = [
    { name: "Users", uv: 50, pv: 2400, amt: 2400 },
    { name: "Posts", uv: 300, pv: 1398, amt: 2210 },
    { name: "Comments", uv: 500, pv: 9800, amt: 2290 },
    { name: "Active usrs", uv: 40, pv: 3908, amt: 2000 },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    }
            ${x + width},${y + height}
            Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="w-full h-72 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" shape={TriangleBar} label={{ position: "top" }}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
