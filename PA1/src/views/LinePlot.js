import React from 'react';
import Plot from 'react-plotly.js';
function LinePlot({xs, ys}) {
    const data = {
        x: xs,
        y: ys,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
    }
    const layout = {
        title: "Avalanche effect",
        xaxis: {
            title: "Round ->"
        },
        yaxis: {
            title: "No of bit changed ->"
        }
    };
    return (
        <Plot
            data={[data]}
            layout={layout}
        />
    );
}
export default LinePlot;
