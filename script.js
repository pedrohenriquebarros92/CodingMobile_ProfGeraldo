const apiKey = "e5b7cd1174fde670407eb52b460bcc72"; // 🔑 Coloque sua chave da OpenWeatherMap

async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("weather-result");

  if (city === "") {
    result.innerHTML = "Por favor, digite uma cidade.";
    return;
  }

  try { /*O bloco try-catch é uma funcionalidade que permite que o programador lide com exceções que ocorram, controlando o fluxo de execução do código em situações imprevistas*/
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    if (!response.ok) throw new Error("Cidade não encontrada");
    const data = await response.json();

    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ ${data.main.temp}°C</p>
      <p>${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    `;
  } catch (error) {
    result.innerHTML = "Erro: " + error.message;
  }
}
