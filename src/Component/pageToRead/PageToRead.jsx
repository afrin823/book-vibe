import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PageToRead = () => {
    const [bookChart, setBookChart] = useState([]);
    
    useEffect(() => {
        fetch('../../../public/Data/Data.json')
            .then(res => res.json())
            .then(data => setBookChart(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
        <div className="container mt-10 mx-auto">
            <div className="overflow-x-auto">
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart
                        data={bookChart}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {bookChart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
           
        </div>
    );
};

PageToRead.propTypes ={
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default PageToRead;
