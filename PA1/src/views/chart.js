import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function CanvasChart({datap, datac,n,w}) {

    const options = {
        title: {
            text: "Round: " + n + ", Half Block Size: " + w
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,

        },
        data: [
            {
                type: "line",
                showInLegend: true,
                name: "plaintext",
                dataPoints: [
                    { y: datap[0] },
                    { y: datap[1] },
                    { y: datap[2] },
                    { y: datap[3] },
                    { y: datap[4] },
                    { y: datap[5] },
                    { y: datap[6] },
                    { y: datap[7] },
                    { y: datap[8] },
                    { y: datap[9] },
                    { y: datap[10] },
                    { y: datap[11] },
                    { y: datap[12] },
                    { y: datap[13] },
                    { y: datap[14] },
                    { y: datap[15] }
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "ciphertext",
                dataPoints: [
                    { y: datac[0] },
                    { y: datac[1] },
                    { y: datac[2] },
                    { y: datac[3] },
                    { y: datac[4] },
                    { y: datac[5] },
                    { y: datac[6] },
                    { y: datac[7] },
                    { y: datac[8] },
                    { y: datac[9] },
                    { y: datac[10] },
                    { y: datac[11] },
                    { y: datac[12] },
                    { y: datac[13] },
                    { y: datac[14] },
                    { y: datac[15] }
                ]
            }
        ]
    }
    return (
        <CanvasJSChart options={options} />
    );

}
