$(function () {
  $('#container').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Cotacoes'
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: {
        text: 'Valor'
      },
      min: 0,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: []
    },
    tooltip: {
      valueSuffix: ''
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 3
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 86400000,
        pointStart: Date.UTC(2019, -1, 20 - 7, 0, 0, 0)
      }
    },
    series: [{
      name: 'Euro',
      data: [<%= @quotations[6][0]["quotes"]["USDEUR"] %>,
             <%= @quotations[5][0]["quotes"]["USDEUR"] %>,
             <%= @quotations[4][0]["quotes"]["USDEUR"] %>,
             <%= @quotations[3][0]["quotes"]["USDEUR"] %>,
             <%= @quotations[2][0]["quotes"]["USDEUR"] %>,
             <%= @quotations[1][0]["quotes"]["USDEUR"] %>,
             <%= @quotations[0][0]["quotes"]["USDEUR"] %>
            ]
    }, {
      name: 'Dolar',
      data: [0.0, 50.0, 40.0, 0.0, 0.0, 40.0, 0.0]
    }, {
      name: 'Peso argentino',
      data: [10.0, 30.0, 10.0, 20.0,  0.0, 0.0, 65.0]
    }]
    ,
    navigation: {
      menuItemStyle: {
        fontSize: '15px'
      }
    }
  });
});
