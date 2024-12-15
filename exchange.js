const EUR = 0.95;
const GBP = 0.79;
const AUD = 1.57;
const CAD = 1.36;
const JPY = 141.21;
const CHF = 0.91;
const CNY = 7.32;
const INR = 83.05;
const MXN = 18.28;
const NZD = 1.70;
const SEK = 10.45;   
const NOK = 10.54;   
const DKK = 7.08;    
const ZAR = 18.78;   
const BRL = 5.19;   
const RUB = 103.22;  
const asciiArt = `
   ________________  ____ 
  / ____/ ____/ __ \\/ __ \\
 / /   / __/ / /_/ / /_/ /
/ /___/ /___/ _, _/ ____/ 
\\____/_____/_/ |_/_/      
                          
     Currency Exchange Rate Program
               by Adrian S.
               
               **All currencies true as of Sunday, 15-Dec-2024 08:58:20 GMT+0000**
`;

console.log(asciiArt);

let amount = parseFloat(prompt("\nEnter amount of USD to convert (with cents): \n"));
let currency = prompt("Enter currency you would like to convert into (EUR, AUD, GBP, CAD, JPY, CHF, CNY, INR, MXN, NZD, SEK, NOK, DKK, ZAR, BRL, RUB): ").toUpperCase();

if (isNaN(amount) || amount <= 0) {
    console.log("\nPlease enter a valid amount greater than 0.");
} else {
    let conversionRate;
    switch (currency) {
        case "EUR":
            conversionRate = EUR;
            break;
        case "AUD":
            conversionRate = AUD;
            break;
        case "GBP":
            conversionRate = GBP;
            break;
        case "CAD":
            conversionRate = CAD;
            break;
        case "JPY":
            conversionRate = JPY;
            break;
        case "CHF":
            conversionRate = CHF;
            break;
        case "CNY":
            conversionRate = CNY;
            break;
        case "INR":
            conversionRate = INR;
            break;
        case "MXN":
            conversionRate = MXN;
            break;
        case "NZD":
            conversionRate = NZD;
            break;
        case "SEK":
            conversionRate = SEK;
            break;
        case "NOK":
            conversionRate = NOK;
            break;
        case "DKK":
            conversionRate = DKK;
            break;
        case "ZAR":
            conversionRate = ZAR;
            break;
        case "BRL":
            conversionRate = BRL;
            break;
        case "RUB":
            conversionRate = RUB;
            break;
        default:
            console.log("\nNot a valid currency! Please enter one of: EUR, AUD, GBP, CAD, JPY, CHF, CNY, INR, MXN, NZD, SEK, NOK, DKK, ZAR, BRL, RUB.");
            break;
    }

    // Return the final conversion
    if (conversionRate) {
        let convertedAmount = (amount * conversionRate).toFixed(2);
        console.log(amount, " USD is equal to ", convertedAmount, " ", currency, ".");
    }
}
