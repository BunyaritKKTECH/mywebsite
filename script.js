//----------//
function printAlphabets() {
    // สร้างตัวแปรเพื่อเก็บตัวอักษร A-Z
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // ใช้ forEach เพื่อวนลูปผ่านทุกตัวอักษร
    alphabets.split('').forEach((alphabet, index) => {
        // ใช้ setTimeout เพื่อกำหนดระยะเวลาการแสดงผล
        setTimeout(() => {
            document.getElementById("demo").innerHTML = alphabet;
            console.log(alphabet);
        }, index * 1000); // 1000 milliseconds = 1 วินาที
    });
}
printAlphabets();
//-------//
let calculator = {
    read() {
        this.a = prompt('Enter number 1');
        this.b = prompt('Enter number 2');
    },
    sum() {
        return Number(this.a) + Number(this.b);
    },
    mul() {
        return this.a * this.b;
    }
};

function calculateSum() {
    calculator.read();
    alert(calculator.sum());
}

function calculateMul() {
    calculator.read();
    alert(calculator.mul());
}
//---------//
function dayToSeconds() {
    let inputDays = document.getElementById("daysInput").value;
    if (!isNaN(inputDays)) {
        let seconds = inputDays * 86400;
        document.getElementById(
            "show2"
        ).innerText = `จำนวนวัน ${inputDays} วัน: ${seconds} นาที`;
    } else {
        alert("Please enter a valid number of days.");
    }
}
//------//
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

function convertTemperature() {
    const temperatureInFahrenheit = prompt("Enter temperature in Fahrenheit:");
    const temperatureInCelsius = fahrenheitToCelsius(parseFloat(temperatureInFahrenheit));
    alert(`${temperatureInFahrenheit} degrees Fahrenheit is equal to ${temperatureInCelsius.toFixed(2)} degrees Celsius`);
}
//--------//
function Point(amount) {
    // คำนวณจำนวนแต้มที่ได้จากยอดซื้อขาย
    const points = Math.floor(amount / 100);
    return points;
}
//---------//
function displayDatetime() {
    const thaiOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZoneName: 'short' };
    const thaiDatetime = new Date().toLocaleString('th-TH', thaiOptions);
    document.getElementById('datetime').innerText = ` ${thaiDatetime}`;
}
setInterval(displayDatetime, 1000);
displayDatetime();
//---------//
function myFunction() {
    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let txt = "";
            for (let x in data) {
                txt += data[x] + " ";
                document.getElementById("demo2").innerHTML = txt;
            };

            return data;
        })
}
//---------//
function printAlphabets() {
    // สร้างตัวแปรเพื่อเก็บตัวอักษร A-Z
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    // ใช้ forEach เพื่อวนลูปผ่านทุกตัวอักษร
    alphabets.split('').forEach((alphabet, index) => {
      // ใช้ setTimeout เพื่อกำหนดระยะเวลาการแสดงผล
      setTimeout(() => {
        document.getElementById("demo").innerHTML = alphabet;
        console.log(alphabet);
      }, index * 1000); // 1000 milliseconds = 1 วินาที
    });
  }
  printAlphabets();
  //-----------//
  function fetchCryptoPrice() {
    fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
        .then(response => response.json())
        .then(data => {
            const btcPrice = data.data.rates.USD;
            const btcPriceTHB = data.data.rates.THB;
            document.getElementById('cryptoPrice').innerText = `Current BTC Price: $${btcPrice}`;
            document.getElementById('cryptoPriceTHB').innerText = `Current BTC Price: ฿${btcPriceTHB}`;
        })
        .catch(error => {
            console.error('Error fetching crypto price:', error);
        });
}

function updateCryptoPrice() {
    fetchCryptoPrice();
    setTimeout(updateCryptoPrice, 3000);
}
window.onload = function () {
    updateCryptoPrice();
};
//----------//
async function compareAge() {
    const birthYear = document.getElementById('birthYear').value;

    try {
      const response = await fetch('https://api.publicapis.org/entries', {
        method: 'GET',
      });

      const data = await response.json();

      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;

      const resultElement = document.getElementById('result2');
      resultElement.textContent = `your age: ${age}`;
    } catch (error) {
      console.error('Error:', error);
    }
  }
//-----------//
function getRandomcat() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const foxImage = document.getElementById('catImage');
            foxImage.src = data[0].url; // Access the first image URL in the response array
            foxImage.alt = 'Random cat';
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
//-----------//
      const x = document.getElementById("geolo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
//------------///
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ทุเรียน', 'ทุเรียน', 'น้อยหน่า', 'กล้วยหอม', 'ขนุน', 'ชมพู่'],
        datasets: [{
            label: '# of Votes',
            data: [10, 20, 25, 15, 6, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//---------//
// Use an asynchronous function to fetch data
async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();

      // Chart configuration
      const ctx2 = document.getElementById('myChart3');
      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: data.map(item => item.label),
          datasets: [{
            label: '# of Votes',
            data: data.map(item => item.value),
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Call the fetchData function
  fetchData();
//--------//
function myFunction() {
    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let txt = " ";
            for (let x in data) {
                txt += data[x] + " ";
                document.getElementById("demo2").innerHTML = txt;
            };

            return data;
        })
}
//---------//