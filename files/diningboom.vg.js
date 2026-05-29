{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Two Decades of Melbourne's Dining Boom",
    "subtitle": [
      "Distinct cafes and restaurants in the City of Melbourne, 2002–2024 — the hospitality scene",
      "that Melbourne's coffee culture grew within.",
      "Source: City of Melbourne CLUE census. Counts distinct venues; indoor and outdoor seating combined."
    ],
    "anchor": "start",
    "fontSize": 20,
    "subtitleFontSize": 12,
    "subtitleColor": "#666",
    "color": "#3C1F0F"
  },
  "width": 560,
  "height": 380,
  "data": {
    "values": [
      {"year": 2010, "venues": 1862},
      {"year": 2011, "venues": 1941},
      {"year": 2012, "venues": 1986},
      {"year": 2013, "venues": 2079},
      {"year": 2014, "venues": 2191},
      {"year": 2015, "venues": 2252},
      {"year": 2016, "venues": 2334},
      {"year": 2017, "venues": 2361},
      {"year": 2018, "venues": 2383},
      {"year": 2019, "venues": 2391},
      {"year": 2020, "venues": 2219},
      {"year": 2021, "venues": 2172},
      {"year": 2022, "venues": 2083},
      {"year": 2023, "venues": 2105},
      {"year": 2024, "venues": 2248}
    ]
  },
  "layer": [
    {
      "mark": {
        "type": "line",
        "color": "#6B3410",
        "strokeWidth": 2.5,
        "interpolate": "monotone"
      },
      "encoding": {
        "x": {
          "field": "year",
          "type": "quantitative",
          "scale": {"domain": [2010, 2024], "nice": false},
          "axis": {
            "format": "d",
            "values": [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024],
            "title": "Year",
            "labelColor": "#666",
            "titleColor": "#3C1F0F",
            "domainColor": "#D89651"
          }
        },
        "y": {
          "field": "venues",
          "type": "quantitative",
          "scale": {"domain": [1600, 2600]},
          "title": "Number of venues",
          "axis": {
            "titleColor": "#3C1F0F",
            "labelColor": "#666",
            "grid": true,
            "gridColor": "#f0f0f0"
          }
        }
      }
    },
    {
      "mark": {"type": "point", "filled": true, "color": "#6B3410", "size": 45},
      "encoding": {
        "x": {"field": "year", "type": "quantitative"},
        "y": {"field": "venues", "type": "quantitative"},
        "tooltip": [
          {"field": "year", "type": "quantitative", "title": "Year", "format": "d"},
          {"field": "venues", "type": "quantitative", "title": "Venues"}
        ]
      }
    },
    {
      "data": {"values": [{"x": 2019.5, "y1": 2391, "y2": 2083}]},
      "mark": {"type": "rule", "color": "#3C1F0F", "strokeDash": [3, 2], "strokeWidth": 1},
      "encoding": {
        "x": {"field": "x", "type": "quantitative"},
        "y": {"field": "y1", "type": "quantitative"},
        "y2": {"field": "y2"}
      }
    },
    {
      "data": {
        "values": [
          {"x": 2019, "y": 2540, "t": "Peak: 2,391 venues (2019)"},
          {"x": 2016, "y": 1850, "t": "COVID-19 closures: a 13% drop"},
          {"x": 2016, "y": 1790, "t": "from peak to 2022 trough."},
          {"x": 2010, "y": 2000, "t": "1,862 venues in 2010"}
        ]
      },
      "mark": {"type": "text", "align": "left", "fontStyle": "italic", "fontSize": 11, "color": "#3C1F0F"},
      "encoding": {
        "x": {"field": "x", "type": "quantitative"},
        "y": {"field": "y", "type": "quantitative"},
        "text": {"field": "t"}
      }
    }
  ],
  "config": {"view": {"stroke": null}, "background": "transparent"}
}
