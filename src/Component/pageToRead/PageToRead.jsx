import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useLoaderData } from "react-router-dom";

const PageToRead = () => {
    const page = useLoaderData();
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const fallbackColor = 'gray'; // Fallback color for bars

    const data = [
        { name: 'Book A', totalPages: 300 },
        { name: 'Book B', totalPages: 250 },
        { name: 'Book C', totalPages: 400 },
        // Add more books as needed
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height} Z`;
    };

    const TriangleBar = ({ fill, x, y, width, height }) => {
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <BarChart className='mx-auto my-4'
                width={900}
                height={400}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length] || fallbackColor} />
                    ))}
                </Bar>
            </BarChart>
            <h2>{page.bookId}</h2>
        </div>
    );
};

export default PageToRead;
