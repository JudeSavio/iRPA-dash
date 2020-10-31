/* Scripts for css grid dashboard */

$(document).ready(() => {
    dateset();
    console.log('date function called');
    addResizeListeners();
    setSidenavListeners();
    setUserDropdownListener();
    renderChart();
    setMenuClickListener();
    setSidenavCloseListener();
  });
  
  // Set constants and grab needed elements
  const sidenavEl = $('.sidenav');
  const gridEl = $('.grid');
  const SIDENAV_ACTIVE_CLASS = 'sidenav--active';
  const GRID_NO_SCROLL_CLASS = 'grid--noscroll';
  
  function toggleClass(el, className) {
    if (el.hasClass(className)) {
      el.removeClass(className);
    } else {
      el.addClass(className);
    }
  }
  
  // User avatar dropdown functionality
  function setUserDropdownListener() {
    const userAvatar = $('.header__avatar');
  
    userAvatar.on('click', function(e) {
      const dropdown = $(this).children('.dropdown');
      toggleClass(dropdown, 'dropdown--active');
    });
  }
  
  // Sidenav list sliding functionality
  function setSidenavListeners() {
    const subHeadings = $('.navList__subheading'); console.log('subHeadings: ', subHeadings);
    const SUBHEADING_OPEN_CLASS = 'navList__subheading--open';
    const SUBLIST_HIDDEN_CLASS = 'subList--hidden';
  
    subHeadings.each((i, subHeadingEl) => {
      $(subHeadingEl).on('click', (e) => {
        const subListEl = $(subHeadingEl).siblings();
  
        // Add/remove selected styles to list category heading
        if (subHeadingEl) {
          toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
        }
  
        // Reveal/hide the sublist
        if (subListEl && subListEl.length === 1) {
          toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
        }
      });
    });
  }
  
  // Draw the chart
function renderChart() {
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_dataviz);
  
  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.XYChart);
  
  chart.marginRight = 400;
  
  // Add data
  chart.data = [{
    "tcode": "SICK",
    "success": 1,
    "faliure":0,
    "warnings":0
  },
  {
    "tcode": "SM12",
    "success": 2,
    "faliure":0,
    "warnings":0
  },
  {
    "tcode": "SM13",
    "success": 1,
    "faliure":0,
    "warnings":0
  },
  {
    "tcode": "AL08",
    "success": 16,
    "faliure":0,
    "warnings":0
  },
  {
    "tcode": "ST22",
    "success": 1,
    "faliure":0,
    "warnings":0
  },
  {
    "tcode": "SCC4",
    "success": 2,
    "faliure":0,
    "warnings":0
  }];
  //console.log('chart', chart);
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "tcode";
  categoryAxis.title.text = "Checked T-Codes";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  
  
  var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Status (S)";
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "success";
  series.dataFields.categoryX = "tcode";
  series.name = "Success";
  series.tooltipText = "{name}: [bold]{valueY}[/]";
  series.stacked = true;
  
  var series2 = chart.series.push(new am4charts.ColumnSeries());
  series2.dataFields.valueY = "faliure";
  series2.dataFields.categoryX = "tcode";
  series2.name = "Faliure";
  series2.tooltipText = "{name}: [bold]{valueY}[/]";
  series2.stacked = true;
  
  var series3 = chart.series.push(new am4charts.ColumnSeries());
  series3.dataFields.valueY = "warnings";
  series3.dataFields.categoryX = "tcode";
  series3.name = "Warnings";
  series3.tooltipText = "{name}: [bold]{valueY}[/]";
  series3.stacked = true;
// Add cursor
chart.cursor = new am4charts.XYCursor();
  }
  
  function toggleClass(el, className) {
    if (el.hasClass(className)) {
      el.removeClass(className);
    } else {
      el.addClass(className);
    }
  }
  
  // If user opens the menu and then expands the viewport from mobile size without closing the menu,
  // make sure scrolling is enabled again and that sidenav active class is removed
  function addResizeListeners() {
    $(window).resize(function(e) {
      const width = window.innerWidth; console.log('width: ', width);
  
      if (width > 750) {
        sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
        gridEl.removeClass(GRID_NO_SCROLL_CLASS);
      }
    });
  }
  
  // Menu open sidenav icon, shown only on mobile
  function setMenuClickListener() {
    $('.header__menu').on('click', function(e) { console.log('clicked menu icon');
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
  }
  
  // Sidenav close icon
  function setSidenavCloseListener() {
    $('.sidenav__brand-close').on('click', function(e) {
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
  }

function dateset() {
  var today_date=new Date();
  var myyear=today_date.getYear();
  var mymonth=today_date.getMonth() + 1;
  var mytoday=today_date.getDate();
  console.log(mymonth,myyear);
  document.getElementsByClassName('quickview__item-total-date').innerHTML ="<p>" + myyear + "/" + mymonth + "/" + mytoday + "</p>";
}


  