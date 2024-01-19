// app.js

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Replace 'YOUR_API_KEY' with your actual API key from Open Exchange Rates
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        const conversionRate = data.rates[toCurrency];
        const convertedAmount = amount * conversionRate;

        // Display the result
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        alert('Error fetching exchange rates. Please try again later.');
    }
}
