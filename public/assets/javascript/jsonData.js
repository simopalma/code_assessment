var Module = Module || {};

/**
 *
 *
 */

Module.jsonData = (function()
{
    var module = {
     "vendor" : {
       "name": "ParkinGo",
       "departureAirport": "Bergamo Orio al Serio",
       "map": "http://lorempixel.com/370/390",
       "features": [
        "Parcheggio ParkinGo della tipologia selezionata",
        "Navetta da/per aeroporto 24h",
        "Vigilanza e custodia del mezzo 24h",
        "Ripristino gratuito del calo di batteria della tua auto"
       ],
      },
      "parkings": [{
        "id": 123,
        "indoor": false,
        "insurance": false,
        "price": "13.56 EUR"
      }, {
        "id": 456,
        "indoor": false,
        "insurance": true,
        "price": "18.99 EUR"
      }, {
        "id": 243,
        "indoor": true,
        "insurance": true,
        "price": "23.56 EUR"
      }, {
        "id": 700,
        "indoor": true,
        "insurance": false,
        "price": "16.49 EUR"
      }],
      "dictionary": {
        "bookYourParking": "Prenota il tuo parcheggio a",
        "featuresTitle": "Sono inclusi i seguenti servizi:",
        "indoorSpace": "Posto auto coperto",
        "outdoorSpace": "Posto auto scoperto",
        "insuranceIncluded": "Assicurazione inclusa",
        "insuranceExcluded": "Assicurazione esclusa"
      }
    };

    return module;
})();
