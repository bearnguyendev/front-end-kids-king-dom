import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Sản phẩm đã bán",
                        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
                        backgroundColor: 'yellow',
                        borderColor: 'green',
                        tension: 0.4,
                        fill: true,
                        pointStyle: 'rect',
                        pointBorderColor: 'blue',
                        pointBackgroundColor: '#fff',
                        showLine: true
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }

    render() {
        return (
            <div className="chart" style={{ width: '800px', height: '800px' }}>
                <Line
                    data={this.state.chartData}
                    options={{
                        // title: {
                        //     display: this.props.displayTitle,
                        //     text: 'Largest Cities In ' + this.props.location,
                        //     fontSize: 25
                        // },
                        // legend: {
                        //     display: this.props.displayLegend,
                        //     position: this.props.legendPosition
                        // }
                    }}
                />

                {/* <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Largest Cities In ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Largest Cities In ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                /> */}
            </div>
        )
    }
}

export default Chart;