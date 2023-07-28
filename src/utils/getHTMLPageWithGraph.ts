export const getHTMLPageWithGraph = (
    children: string,
    stringifiedData: string
) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    </head>

    <body>
        ${children}
        <script>
        const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

            const millify = (number) => {
                // what tier? (determines SI symbol)
                let tier = Math.log10(Math.abs(number)) / 3 | 0;

                // if zero, we don't need a suffix
                if (tier == 0) return number;

                // get suffix and determine scale
                let suffix = SI_SYMBOL[tier];
                let scale = Math.pow(10, tier * 3);

                // scale the number
                let scaled = number / scale;

                // format number and add suffix
                return scaled.toFixed(1) + suffix;
            }

            const data = JSON.parse('${stringifiedData}')

            const series = [
                {
                    name: "Followers",
                    data: data.map(({ month, followers }) => ({
                        x: new Date(month),
                        y: followers
                    }))
                }
            ];

            const options = {
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0, // Set the animation duration to 0 milliseconds
                    },
                    type: "area",
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "smooth"
                },
                xaxis: {
                    type: "datetime",
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        formatter: (value) => {
                            return millify(+value)
                        }
                    }
                },
                tooltip: {
                    x: {
                        format: "dd MMM yyyy"
                    }
                },
                series: series,
                colors: ["#9f4bd1"],
                legend: {
                    position: "bottom",
                    horizontalAlign: "center",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: "#fff",
                        fillColors: undefined,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0,
                        onClick: undefined,
                        onDblClick: undefined,
                        showNullDataPoints: true,
                        hover: {
                            size: undefined,
                            sizeOffset: 3
                        }
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                grid: {
                    borderColor: "#f1f1f1"
                }
            };

            var chart = new ApexCharts(document.querySelector("#graph-div"), options);
            
            chart.render();
            
            // fetch("http://localhost:3003/wait").then((res) => {
            //     document.querySelector("#k-msg").innerHTML = "Waited"
            // }).catch((err) => {
            //     document.querySelector("#k-msg").innerHTML = "Failed"
            // })
        </script>
    </body>

    </html>`;
};
