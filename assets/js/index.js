// Chart for div 3
var ctx = document.getElementById('Skill_Chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'ML', 'Electron.js', 'RPA', 'Fullstack (NEW)', 'DS'],
        datasets: [{
            label: 'Skill Level',
            data: [3.5,2, 3, 4.2, 1, 2.5],
            backgroundColor: [
                'rgba(255, 99, 132,0.8)',
                'rgba(54, 162, 235,0.8)',
                'rgba(255, 206, 86,0.8)',
                'rgba(75, 192, 192,0.8)',
                'rgba(153, 102, 255,0.8)',
                'rgba(255, 159, 64,0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'white'
            }
        }
    }
});


// Quotes API

var quote = document.getElementById('Quote_Content')
var author = document.getElementById('Author')

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var random = Math.round(Math.random() * 1600)
    console.log(random)
    console.log(data[random].text);
    console.log(data[random].author)
    quote.innerHTML=data[random].text;
    author.innerHTML=data[random].author
  });

//Inserting count of repos

var gauage = document.getElementById('gauge');
var tag = document.createElement("p");
var text = document.createTextNode("5");
tag.appendChild(text);
tag.style.color = 'white';
tag.style.fontSize = 20;
tag.style.fontWeight ='bold'
tag.setAttribute("style", "text-align: center;fontSize:60;fontWeigh:bold;color:white;top:0;left:0;right:0;bottom:0;margin-top:10px");
gauge.appendChild(tag);


//page scroll

function scroll() {
    window.scrollX(10)
}