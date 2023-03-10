import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
}

export interface ResponseBody {
  r030: number,
  txt: string,
  rate:number,
  cc: string,
  exchangedate: string
}

export interface CurrencyAPI {
  provider: string,
  WARNING_UPGRADE_TO_V6: string,
  terms: string,
  base: string,
  date: string,
  time_last_updated: string,
  rates: Rates
}

export interface CurrencyUAH {
  USD: number,
  EUR: number
}

export interface CurrencyUSD {
  UAH: number,
  EUR: number
}

export interface CurrencyEUR {
  USD: number,
  UAH: number
}
export interface Rates {
  "UAH": number,
  "AED": number,
  "AFN": number,
  "ALL": number,
  "AMD": number,
  "ANG": number,
  "AOA": number,
  "ARS": number,
  "AUD": number,
  "AWG": number,
  "AZN": number,
  "BAM": number,
  "BBD": number,
  "BDT": number,
  "BGN": number,
  "BHD": number,
  "BIF": number,
  "BMD": number,
  "BND": number,
  "BOB": number,
  "BRL": number,
  "BSD": number,
  "BTN": number,
  "BWP": number,
  "BYN": number,
  "BZD": number,
  "CAD": number,
  "CDF": number,
  "CHF": number,
  "CLP": number,
  "CNY": number,
  "COP": number,
  "CRC": number,
  "CUP": number,
  "CVE": number,
  "CZK": number,
  "DJF": number,
  "DKK": number,
  "DOP": number,
  "DZD": number,
  "EGP": number,
  "ERN": number,
  "ETB": number,
  "EUR": number,
  "FJD": number,
  "FKP": number,
  "FOK": number,
  "GBP": number,
  "GEL": number,
  "GGP": number,
  "GHS": number,
  "GIP": number,
  "GMD": number,
  "GNF": number,
  "GTQ": number,
  "GYD": number,
  "HKD": number,
  "HNL": number,
  "HRK": number,
  "HTG": number,
  "HUF": number,
  "IDR": number,
  "ILS": number,
  "IMP": number,
  "INR": number,
  "IQD": number,
  "IRR": number,
  "ISK": number,
  "JEP": number,
  "JMD": number,
  "JOD": number,
  "JPY": number,
  "KES": number,
  "KGS": number,
  "KHR": number,
  "KID": number,
  "KMF": number,
  "KRW": number,
  "KWD": number,
  "KYD": number,
  "KZT": number,
  "LAK": number,
  "LBP": number,
  "LKR": number,
  "LRD": number,
  "LSL": number,
  "LYD": number,
  "MAD": number,
  "MDL": number,
  "MGA": number,
  "MKD": number,
  "MMK": number,
  "MNT": number,
  "MOP": number,
  "MRU": number,
  "MUR": number,
  "MVR": number,
  "MWK": number,
  "MXN": number,
  "MYR": number,
  "MZN": number,
  "NAD": number,
  "NGN": number,
  "NIO": number,
  "NOK": number,
  "NPR": number,
  "NZD": number,
  "OMR": number,
  "PAB": number,
  "PEN": number,
  "PGK": number,
  "PHP": number,
  "PKR": number,
  "PLN": number,
  "PYG": number,
  "QAR": number,
  "RON": number,
  "RSD": number,
  "RUB": number,
  "RWF": number,
  "SAR": number,
  "SBD": number,
  "SCR": number,
  "SDG": number,
  "SEK": number,
  "SGD": number,
  "SHP": number,
  "SLL": number,
  "SOS": number,
  "SRD": number,
  "SSP": number,
  "STN": number,
  "SYP": number,
  "SZL": number,
  "THB": number,
  "TJS": number,
  "TMT": number,
  "TND": number,
  "TOP": number,
  "TRY": number,
  "TTD": number,
  "TVD": number,
  "TWD": number,
  "TZS": number,
  "UGX": number,
  "USD": number,
  "UYU": number,
  "UZS": number,
  "VES": number,
  "VND": number,
  "VUV": number,
  "WST": number,
  "XAF": number,
  "XCD": number,
  "XDR": number,
  "XOF": number,
  "XPF": number,
  "YER": number,
  "ZAR": number,
  "ZMW": number,
  "ZWL": number
}



