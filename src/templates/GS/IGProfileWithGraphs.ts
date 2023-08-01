export const IGProfileWithGraphs = ({
    children,
    stringifiedData,
}: {
    children: string;
    stringifiedData: string;
}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            "primary": '#350E5F',
                            "primary-50": '#350e5f0D',
                            "secondary": '#9E4AD1',
                            "secondary-100": 'rgba(158, 74, 209, 0.10)',
                        }
                    }
                }
            }
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Roboto', sans-serif;
            }

            .p-headx {
                font-size: 2.5rem;
            }

            .p-head {
                font-size: 2rem;
            }

            .p-subhead {
                font-size: 1.5rem;
            }

            .card-title {
                color: rgba(0, 0, 0, 0.50);
                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
                font-weight: 500;
            }

            .card {
                border-radius: 10px;
                border: 1px solid rgba(0, 0, 0, 0.10);
                background: #FFF;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
                padding: 1rem;
            }
        </style>
    </head>

    <body>
        ${children}

        <!-- scripts -->
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

            // ---------------  All necessary Data   ----------------
            const data = JSON.parse('${stringifiedData}')

            const {
                statHistory,
                credibility,
                genders,
                gendersPerAge,
                recentPosts,
            } = data


            // ---------------  Followers Growth Graph Logic   ----------------
            const FG_Series = [
                {
                    name: 'Followers',
                    data: statHistory.map(({ month, followers }) => ({
                        x: new Date(month),
                        y: followers,
                    })),
                },
            ];

            const FG_Options = {
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'area',
                    height: 350,
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    formatter: (value) => {
                        return millify(+value);
                    },
                    enabled: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 400
                    },
                    background: {
                        enabled: true,
                        padding: 20,
                        borderWidth: 0,
                    },
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        style: {
                            fontSize: '14px',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: (value) => {
                            return millify(+value);
                            // return value
                        },
                        style: {
                            fontSize: '14px',
                        }
                    },
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy',
                    },
                },
                series: FG_Series,
                colors: ['#9f4bd1'],
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0,
                        onClick: undefined,
                        onDblClick: undefined,
                        showNullDataPoints: true,
                        hover: {
                            size: undefined,
                            sizeOffset: 3,
                        },
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0,
                    },
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
            };

            const followerGrowthChart = new ApexCharts(document.querySelector("#followers-growth-graph"), FG_Options);
            followerGrowthChart.render();

            // ---------------  Likes Growth Graph Logic   ----------------
            const LG_Series = [
                {
                    name: 'Likes',
                    data: statHistory.map(({ month, avgLikes }) => ({
                        // x: new Date(month),
                        x: month,
                        y: avgLikes,
                    })),
                },
            ];

            const LG_Options = {
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'area',
                    height: 350,
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    formatter: (value) => {
                        return millify(+value);
                    },
                    enabled: true,
                    style: {
                        fontSize: '14px',
                        fontWeight: 400
                    },
                    background: {
                        enabled: true,
                        padding: 20,
                        borderWidth: 0,
                    },
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        style: {
                            fontSize: '14px',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: (value) => {
                            return millify(+value);
                        },
                        style: {
                            fontSize: '14px',
                        }
                    },
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy',
                    },
                },
                series: LG_Series,
                colors: ['#9f4bd1'],
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0,
                        onClick: undefined,
                        onDblClick: undefined,
                        showNullDataPoints: true,
                        hover: {
                            size: undefined,
                            sizeOffset: 3,
                        },
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0,
                    },
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
            };

            const likesGrowthChart = new ApexCharts(document.querySelector("#likes-growth-graph"), LG_Options);
            likesGrowthChart.render();


            // ---------------  Recent Post Engagement Graph Logic   ----------------
            const RPE_Options = {
                series: [
                    {
                        name: 'Likes',
                        data: recentPosts?.map((item) => (item.likes))
                    },
                    {
                        name: 'Comments',
                        data: recentPosts?.map((item) => (item.comments))
                    }
                ],
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'bar',
                    height: 350,
                    stacked: false,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                dataLabels: {
                    position: "top",
                    offsetX: 0,
                    offsetY: -20,
                    formatter: (v) => millify(v),
                    enabled: true,
                    style: {
                        fontSize: '13px',
                        fontWeight: 600
                    },
                    background: {
                        enabled: true,
                        padding: 10,
                        borderWidth: 0,
                        foreColor: '#111',
                        opacity: 0,
                    },
                },
                colors: ['#350e5f', '#9e4ad1'],
                xaxis: {
                    categories: recentPosts?.map((e) => moment(e.created).format('DD-MM-YY')),
                    labels: {
                        style: {
                            fontSize: '14px',
                        }
                    }
                },
                yaxis: {
                    labels: {
                        formatter: (val) => millify(val),
                        style: {
                            fontSize: '14px',
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'top'
                        },
                        borderRadius: 4,

                    }
                },
                stroke: {
                    colors: ["transparent"],
                    width: 5
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                fill: {
                    opacity: 1
                },
            };

            const recentPostEngagementsChart = new ApexCharts(document.querySelector("#post-engagement-graph"), RPE_Options);
            recentPostEngagementsChart.render();

            // ---------------  Age and Gender ratio Graph Logic   ----------------
            const AnG_Options = {
                series: [
                    {
                        name: 'Male',
                        // group: 'male',
                        data: gendersPerAge?.map((item) => (item.male * 100).toFixed(2))
                    },
                    {
                        name: 'Female',
                        // group: 'female',
                        data: gendersPerAge?.map((item) => (item.female * 100).toFixed(2))
                    },
                ],
                dataLabels: {
                    formatter: (val) => val + '%',
                },
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    stacked: true,
                    type: 'bar',
                    height: 350,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                colors: ['#350e5f', '#9e4ad1'],
                yaxis: {
                    labels: {
                        formatter: (val) => {
                            return val + '%'
                        }
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 5,
                        dataLabels: {
                            formatter: (val) => val.toFixed(2),
                            total: {
                                formatter: (val) => val.toFixed(2) + '%',
                                enabled: true,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: '#101010',
                                }
                            }
                        }
                    },
                },
                xaxis: {
                    categories: gendersPerAge?.map((e) => e.code)
                },
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "15px"
                },
                fill: {
                    opacity: 1
                }
            };

            const ageAndGenderRatioChart = new ApexCharts(document.querySelector("#age-n-gender-ratio"), AnG_Options);
            ageAndGenderRatioChart.render();

            // ---------------  Gender split Graph Logic   ----------------

            // All this to make sure first goes male and then female in -> series + labels
            const maleLabel = genders
                ?.filter((e) => e.code.toLowerCase() === 'male')
                ?.map((e) => ('' + e.code + '' + ' \t:' + '' + (e.weight * 100).toFixed(2) + '%')) || []

            const femaleLabel = genders
                ?.filter((e) => e.code.toLowerCase() === 'female')
                ?.map((e) => ('' + e.code + '' + ' \t:' + '' + (e.weight * 100).toFixed(2) + '%')) || []

            const maleSeries = genders
                ?.filter((e) => e.code.toLowerCase() === 'male')
                ?.map((e) => parseFloat((e.weight * 100).toFixed(2))) || []

            const femaleSeries = genders
                ?.filter((e) => e.code.toLowerCase() === 'female')
                ?.map((e) => parseFloat((e.weight * 100).toFixed(2))) || []

            const GSplit_options = {
                series: [...maleSeries, ...femaleSeries],
                labels: [...maleLabel, ...femaleLabel],
                stroke: {
                    width: 0,
                    colors: ['#fff']
                },
                theme: {
                    mode: "light",
                    palette: "palette2",
                    monochrome: {
                        enabled: false,
                        color: "#9e4ad1",
                        shadeTo: "light",
                        shadeIntensity: 0.65,
                    },
                },
                dataLabels: {
                    formatter: (val) => {
                        return ''
                    }
                },
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    type: 'donut',
                    height: 300,
                    width: 500,
                },
                colors: ['#350e5f', '#9e4ad1'],
                legend: {
                    centered: true,
                    position: "bottom",
                    horizontalAlign: "center",
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: "#fff",
                        fillColors: undefined,
                        radius: 2,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
            };

            const genderSplitChart = new ApexCharts(document.querySelector("#gender-group-split"), GSplit_options);
            genderSplitChart.render();

            // ---------------  Credibility Graph Logic   ----------------

            const CR_Options = {
                series: [parseFloat((credibility * 100).toFixed(2))],
                chart: {
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 0,
                    },
                    height: 300,
                    type: 'radialBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    fontFamily: "Roboto",
                    radialBar: {
                        startAngle: -180,
                        endAngle: 180,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#808080',
                                fontSize: '16px',
                                fontFamily: 'Roboto',
                                fontWeight: '400'
                            },
                            value: {
                                formatter: function (val) {
                                    return '' + parseFloat(val) + '%';
                                },
                                color: '#333',
                                fontSize: '30px',
                                fontFamily: 'Roboto',
                                fontWeight: '600',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    fontFamily: 'Roboto',
                    type: "gradient",
                    colors: ["#6832A3", "#350e5f"],
                    gradient: {
                        shade: "dark",
                        type: "vertical",
                        shadeIntensity: 0.5,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Audience Credibility'],
            }

            const credibilityChart = new ApexCharts(document.querySelector("#credibility-graph"), CR_Options);
            credibilityChart.render();
            
        </script>
    </body>

    </html>
    `;
};
