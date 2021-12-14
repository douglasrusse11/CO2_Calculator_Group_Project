import HighchartsReact from 'highcharts-react-official'
import HighMaps from "highcharts/highmaps";
import { useState, useEffect } from 'react';

const CountrySelectorMap = ({ data, mapData, updateDisplayMap, updateSelectedCountry }) => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [displayChart, setDisplayChart] = useState(false);
    const [mapRotation, setMapRotation] = useState([0, 0]);

    useEffect(() => {
        (data && mapData) ? setDisplayChart(true): setDisplayChart(false);
    }, [data, mapData]);

    useEffect(() => {
        if (selectedCountry) {
            console.log(`Name: ${selectedCountry.name}\nCountry Code: ${selectedCountry.id}`)
            updateSelectedCountry(selectedCountry.id)
        }
    }, [selectedCountry]);

    const handleClick = (e) => {
        e.preventDefault();
        updateDisplayMap();
    }

    const handleSelect = (event) => {
        try {
            event.preventDefault();
            const country = data.find(country => country.id === event.target.id)
            setSelectedCountry(country)
            setMapRotation([-country.coords[1], -country.coords[0]])
        } catch (error) {
            console.error(error)
        }
    }

    const onLoad = (event) => {
        event.target.series[1].data.find(country => country.id === 'gb').select()
    }

    const getGraticule = () => {
        const data = [];

        // Meridians
        for (let x = -180; x <= 180; x += 15) {
            data.push({
                geometry: {
                    type: 'LineString',
                    coordinates: x % 90 === 0 ? [
                        [x, -90],
                        [x, 0],
                        [x, 90]
                    ] : [
                        [x, -80],
                        [x, 80]
                    ]
                }
            });
        }

        // Latitudes
        for (let y = -90; y <= 90; y += 10) {
            const coordinates = [];
            for (let x = -180; x <= 180; x += 5) {
                coordinates.push([x, y]);
            }
            data.push({
                geometry: {
                    type: 'LineString',
                    coordinates
                },
                lineWidth: y === 0 ? 2 : undefined
            });
        }

        return data;
    };

    const renderSea = (event) => {
        let verb = 'animate';
        if (!event.target.sea) {
            event.target.sea = event.target.renderer
                .circle()
                .attr({
                    fill: {
                        radialGradient: {
                            cx: 0.4,
                            cy: 0.4,
                            r: 1
                        },
                        stops: [
                            [0, 'white'],
                            [1, 'lightblue']
                        ]
                    },
                    zIndex: -1
                })
                .add(event.target.get('graticule').group);
            verb = 'attr';
        }

        const bounds = event.target.get('graticule').bounds,
            p1 = event.target.mapView.projectedUnitsToPixels({
                x: bounds.x1,
                y: bounds.y1
            }),
            p2 = event.target.mapView.projectedUnitsToPixels({
                x: bounds.x2,
                y: bounds.y2
            });
        event.target.sea[verb]({
            cx: (p1.x + p2.x) / 2,
            cy: (p1.y + p2.y) / 2,
            r: Math.min(p2.x - p1.x, p1.y - p2.y) / 2
        });
    };

    const options = {
        chart: {
            map: mapData,
            events: {
                load: onLoad,
                redraw: renderSea,
                // selection: (event) => {console.log("Chart Selection", event)}
            }
        },

        title: {
            text: 'Airport density per country',
            floating: true,
            align: 'left',
            style: {
                textOutline: '2px white',
                display: "None"
            }
        },

        subtitle: {
            text:
                'Click and drag to rotate globe<br>',
            floating: true,
            y: 34,
            align: 'left'
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        mapView: {
            maxZoom: 30,
            projection: {
                name: 'Orthographic',
                rotation: mapRotation
            }
        },

        colorAxis: {
            tickPixelInterval: 100,
            minColor: '#31784B',
            maxColor: '#31784B',
            max: 1000
        },

        tooltip: {
            pointFormat: '{point.name}'
        },

        plotOptions: {
            series: {
                animation: {
                    duration: 750
                },
                clip: false,
                point: {
                    events: {
                        select: handleSelect
                    }
                }
            },
        },

        series: [{
            name: 'Graticule',
            id: 'graticule',
            type: 'mapline',
            data: getGraticule(),
            nullColor: 'rgba(0, 0, 0, 0.05)'
        }, {
            data,
            joinBy: 'name',
            name: 'Country',
            states: {
                hover: {
                    color: '#49b872',
                    borderColor: '#333333'
                },
                select: {
                    color: '#49b872',
                    borderColor: '#fc0000'
                }
            },
            allowPointSelect: true,
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            }
        }]
    }

    return (
        <>
            { displayChart ? <HighchartsReact highcharts={HighMaps} options={options} constructorType={'mapChart'}/> : <p>Map Loading...</p>}
            <input type="submit" value="Dropdown" onClick={handleClick} />
        </>
    );
}

export default CountrySelectorMap;