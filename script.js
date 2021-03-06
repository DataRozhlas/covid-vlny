Highcharts.chart('cvd-compare-cases', {
    chart: {
        type: 'line',
        spacingLeft: 0,
        spacingRight: 0,
    },
    credits: {
        href: 'https://onemocneni-aktualne.mzcr.cz/vakcinace-cr',
        text: 'Zdroj dat: ÚZIS',
    },
    title: {
        text: 'Nakažení během podzimních vln epidemie',
        align: 'left',
        style: {
            fontWeight: 'bold',
        },
    },
    subtitle: {
        text: `2020 a 2021`,
        align: 'left',
        useHTML: true,
    },
    xAxis: {
        categories: [
            '1. 10.', '2. 10.', '3. 10.', '4. 10.', '5. 10.', '6. 10.', '7. 10.', '8. 10.', '9. 10.', '10. 10.', '11. 10.', '12. 10.', '13. 10.', '14. 10.', '15. 10.', '16. 10.', '17. 10.', '18. 10.', '19. 10.', '20. 10.', '21. 10.', '22. 10.', '23. 10.', '24. 10.', '25. 10.', '26. 10.', '27. 10.', '28. 10.', '29. 10.', '30. 10.', '31. 10.', '1. 11.', '2. 11.', '3. 11.', '4. 11.', '5. 11.', '6. 11.', '7. 11.', '8. 11.', '9. 11.', '10. 11.', '11. 11.', '12. 11.', '13. 11.', '14. 11.', '15. 11.', '16. 11.', '17. 11.', '18. 11.', '19. 11.', '20. 11.', '21. 11.', '22. 11.', '23. 11.', '24. 11.', '25. 11.', '26. 11.', '27. 11.', '28. 11.', '29. 11.', '30. 11.', '1. 12.', '2. 12.', '3. 12.', '4. 12.', '5. 12.', '6. 12.', '7. 12.', '8. 12.', '9. 12.', '10. 12.', '11. 12.', '12. 12.', '13. 12.', '14. 12.', '15. 12.', '16. 12.', '17. 12.', '18. 12.', '19. 12.', '20. 12.', '21. 12.', '22. 12.', '23. 12.', '24. 12.', '25. 12.', '26. 12.', '27. 12.', '28. 12.', '29. 12.', '30. 12.', '31. 12.'
        ],
    },
    annotations: [{
        draggable: '',
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,1)',
            verticalAlign: 'top',
            y: 10
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 13,
                y: 9242
            },
            text: 'Uzavření škol'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 21,
                y: 13886
            },
            text: 'Zavření obchodů'
        }]
    }],
    yAxis: [{
        labels: {
            format: '{value}',
        },
        title: {
            text: 'nakažení',
        },
    }],
    tooltip: {
        shared: true,
        formatter() {
            const p = this.points;
            let tx21 = '';
            if (p[1]) { tx21 = `<br>rok 2021: ${p[1].y}` }
            return `${p[0].x}<br>rok 2020­: ${p[0].y} ${tx21}`;
        },
    },
    plotOptions: {
        series: {
            animation: false,
        },
        line: {
            marker: {
                enabled: false,
            },
        },
    },
    series: [{
        name: 'podzim 2020­',
        data: [3445, 3732, 2510, 1783, 3028, 4341, 5148, 5225, 8341, 4535, 3017, 4117, 8013, 9242, 9316, 10769, 8551, 4987, 7897, 11776, 14732, 13886, 14927, 12360, 7209, 10058, 15338, 12679, 12866, 13395, 11293, 6506, 9133, 12000, 15639, 13151, 11477, 7689, 3590, 6015, 9004, 8870, 7820, 7318, 4181, 1884, 5340, 4211, 5482, 6428, 5757, 3173, 1495, 4340, 5825, 4890, 4004, 4402, 2622, 1050, 3523, 5107, 4499, 4561, 4691, 3271, 1087, 4207, 5798, 6351, 5814, 6149, 3595, 1977, 5128, 7809, 8149, 7504, 8701, 5239, 3368, 7818, 10843, 14052, 4332, 2654, 3010, 3760, 10884, 16411, 16944, 13238],
        color: '#3182bd',
    }, {
        name: 'podzim 2021­',
        data: [821, 552, 315, 791, 1102, 1039, 980, 1013, 660, 333, 1331, 1496, 1496, 1525, 1766, 1154, 792, 2513, 3236, 3261, 3625, 4211, 2740, 1823, 4263, 6254, 5821, 4327, 5720, 5022, 2717, 7564, 9867, 9434, 8412, 9204, 5702, 2985, 9230, 14516, 13445],
        color: '#de2d26',
    }],
});

// JIPky
Highcharts.chart('cvd-compare-jip', {
    chart: {
        type: 'line',
        spacingLeft: 0,
        spacingRight: 0,
    },
    credits: {
        href: 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19',
        text: 'Zdroj dat: ÚZIS',
    },
    title: {
        text: 'Lidé na JIP během podzimních vln epidemie',
        align: 'left',
        style: {
            fontWeight: 'bold',
        },
    },
    subtitle: {
        text: `2020 a 2021`,
        align: 'left',
        useHTML: true,
    },
    xAxis: {
        categories: [
            '1. 10.', '2. 10.', '3. 10.', '4. 10.', '5. 10.', '6. 10.', '7. 10.', '8. 10.', '9. 10.', '10. 10.', '11. 10.', '12. 10.', '13. 10.', '14. 10.', '15. 10.', '16. 10.', '17. 10.', '18. 10.', '19. 10.', '20. 10.', '21. 10.', '22. 10.', '23. 10.', '24. 10.', '25. 10.', '26. 10.', '27. 10.', '28. 10.', '29. 10.', '30. 10.', '31. 10.', '1. 11.', '2. 11.', '3. 11.', '4. 11.', '5. 11.', '6. 11.', '7. 11.', '8. 11.', '9. 11.', '10. 11.', '11. 11.', '12. 11.', '13. 11.', '14. 11.', '15. 11.', '16. 11.', '17. 11.', '18. 11.', '19. 11.', '20. 11.', '21. 11.', '22. 11.', '23. 11.', '24. 11.', '25. 11.', '26. 11.', '27. 11.', '28. 11.', '29. 11.', '30. 11.', '1. 12.', '2. 12.', '3. 12.', '4. 12.', '5. 12.', '6. 12.', '7. 12.', '8. 12.', '9. 12.', '10. 12.', '11. 12.', '12. 12.', '13. 12.', '14. 12.', '15. 12.', '16. 12.', '17. 12.', '18. 12.', '19. 12.', '20. 12.', '21. 12.', '22. 12.', '23. 12.', '24. 12.', '25. 12.', '26. 12.', '27. 12.', '28. 12.', '29. 12.', '30. 12.', '31. 12.'
        ],
    },
    annotations: [{
        draggable: '',
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,1)',
            verticalAlign: 'top',
            y: 10
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 13,
                y: 478
            },
            text: 'Uzavření škol'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 21,
                y: 751
            },
            text: 'Zavření obchodů'
        }]
    }],
    yAxis: [{
        labels: {
            format: '{value}',
        },
        title: {
            text: 'nakažení',
        },
    }],
    tooltip: {
        shared: true,
        formatter() {
            const p = this.points;
            let tx21 = '';
            if (p[1]) { tx21 = `<br>rok 2021: ${p[1].y}` }
            return `${p[0].x}<br>rok 2020­: ${p[0].y} ${tx21}`;
        },
    },
    plotOptions: {
        series: {
            animation: false,
        },
        line: {
            marker: {
                enabled: false,
            },
        },
    },
    series: [{
        name: 'podzim 2020­',
        data: [219, 225, 254, 268, 282, 316, 346, 358, 389, 420, 411, 435, 452, 478, 514, 555, 573, 598, 622, 642, 704, 751, 762, 760, 802, 884, 876, 888, 995, 1030, 1069, 1118, 1154, 1180, 1166, 1176, 1212, 1157, 1167, 1181, 1169, 1110, 1105, 1101, 1068, 1045, 1040, 996, 1007, 974, 960, 944, 958, 950, 881, 856, 843, 800, 780, 765, 791, 733, 717, 718, 715, 692, 680, 714, 702, 687, 713, 702, 696, 710, 728, 725, 735, 725, 729, 746, 755, 765, 770, 780, 749, 769, 806, 846, 906, 941, 956, 974],
        color: '#3182bd',
    }, {
        name: 'podzim 2021­',
        data: [45, 44, 52, 58, 72, 86, 75, 78, 77, 77, 99, 113, 114, 116, 115, 112, 116, 133, 146, 138, 142, 152, 150, 162, 170, 192, 214, 208, 237, 239, 268, 312, 318, 346, 346, 384, 389, 424, 470, 485, 509, 501],
        color: '#de2d26',
    }],
});