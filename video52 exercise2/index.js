// SAAS project / software as a service 
// (business name generator )

// Create a business name generator by combinign list of adjectives and shop name and another word

// Adjectives:
// crazy
// Fire 
// amazing

// Shop name:
// Engine 
// Foods
// Garments

// Another word:
// BRos
// limited
// hub

// caution--> don't use arrays

function BusinessNameGeneretor(){
    const adjectives=["crazy" ,"Fire ","amazing"];
    const Shopname=["Engine","Food","Garments"];
    const AnotherWord=["BRos","limited","hub"];

   const randomAdjective= Math.floor(Math.random()*adjectives.length);
    const randomShopname= Math.floor(Math.random()*Shopname.length);
    const randomAnotherWord= Math.floor(Math.random()*AnotherWord.length);

const businessName=adjectives[randomAdjective]+" "+ Shopname[randomShopname]+" "+ AnotherWord[randomAnotherWord];
return businessName;
}

console.log("generated business name:" ,BusinessNameGeneretor());