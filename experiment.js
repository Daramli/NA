//SEARCH(SUBMIT) FORM

// <!--Hyundai Car Models-->
// <div class="product">
//   <div id="product30">
//     <img class="card_img" src="./db/img/Hyundai_Bayon_22420.jpg" />
//     <button class="card_btn" id="30"><span>&#9829</span></button>
//     <div class="card_content">
//       <h3 class="card_header">Price:£22420</h3>
//       <p class="card_text">Make:Hyundai</p>
//       <p class="card_text">Model:Bayon</p>
//     </div>

// var productCard =document.getElementByClass('.product');
// var productIdee=document.getElementId('#product+index');//???
// var cardImage=document.getElementByClass('card_img');
// var cardButton= document.getElementByClass('card_btn');
// var cardContent=document.getElementByClass('card_content');
// var cardHeader=document.getElementByClass('card_header');
// var cardP1=document.getElementByClass('card_text');
// var cardP2=document.getElementByClass('card_text');

// function filterSearch() {

// var filterProduct = document.getElementById('submit');
// var productSelected = filterProduct.value; //array of products

//
//
//
//

// // Form Reset Functionality
// function handleReset() {
//   let form = document.getElementById('filter');

//   // Loop through each form element
//   form.querySelectorAll('select').forEach((select) => {
//     select.selectedIndex = 0; // Reset selected index to default (first option)
//   });
// }

// // Event listener for form reset
// document.getElementById('reset').addEventListener('click', handleReset);

// // Event listeners for dropdown selections
// document.getElementById('make').addEventListener('input', handleSelect);
// document.getElementById('model').addEventListener('input', handleSelect);
// document.getElementById('price').addEventListener('input', handleSelect);

// // Consolidated handleSelect function
// function handleSelect(e) {
//   let select = e.target;
//   console.log(select.value); // Log the selected value

//   // Determine the dropdown based on the ID of the select element
//   switch (select.id) {
//     case 'make':
//       // Handle make selection
//       break;
//     case 'model':
//       // Handle model selection
//       break;
//     case 'price':
//       // Handle price selection
//       break;
//     default:
//       break;
//   }
// }

// // Define the enableSingleBrand function outside of handleSubmit
// function enableSingleBrand(answer) {
//   console.log(answer.value);
//   const makeValue = answer.value;

//NEW ARRAYS TO RE-INVENT THE CARD
//including make model price id
var cardMake = document.getElementById(cardMake); //loop through all the makes
var cardModel = document.getElementById(cardModel); //loop through all the models
var cardPrice = document.getElementById(cardPrice); //loop through all the prices
var cardImage = document.getElementById(cardImage); //loop through all the images
var cardIdee = document.getElementById(cardIdee); //loop through card id.

var cardMake = new cardMakeArray[
  ('Any',
  'Audi',
  'BMW',
  'Chrysler',
  'Ford',
  'Honda',
  'Hyundai',
  'Jaguar',
  'Kia',
  'Lexus',
  'Merceder',
  'Nissan',
  'Seta',
  'Toyota',
  'Vauxhall')
]();

var cardIdee = new cardIdeeArray[
  ('product0',
  'product1',
  'product2',
  'product3',
  'product4',
  'product5',
  'product6',
  'product7',
  'product8',
  'product9',
  'product10',
  'product11',
  'product12',
  'product13',
  'product14',
  'product15',
  'product16',
  'product17',
  'product18',
  'product19',
  'product20',
  'product21',
  'product22',
  'product23',
  'product24',
  'product25',
  'product26',
  'product27',
  'product28',
  'product29',
  'product30',
  'product31',
  'product32',
  'product33',
  'product34',
  'product35',
  'product36',
  'product37',
  'product38',
  'product39',
  'product40',
  'product41',
  'product42',
  'product43',
  'product44',
  'product45',
  'product46',
  'product47',
  'product48',
  'product49',
  'product50',
  'product51',
  'product52',
  'product53',
  'product54',
  'product55',
  'product56',
  'product57',
  'product58',
  'product59',
  'product60',
  'product61',
  'product62',
  'product63',
  'product64',
  'product65',
  'product66',
  'product67',
  'product68',
  'product69',
  'product70',
  'product71',
  'product72',
  'product73',
  'product74',
  'product75',
  'product76',
  'product77',
  'product78',
  'product79',
  'product80',
  'product81',
  'product83',
  'product84')
]();

var cardModel = new cardModelArray[
  ('Any',
  'A3',
  'e-tron',
  'Q5',
  'RS7',
  'SQ2',
  'TT',
  '3 Series',
  'Alpina B8',
  'i7',
  'X5',
  'M6',
  'Z3',
  '300C',
  'Crossfire',
  'Delta',
  'Grand Voyager',
  'PT Cruiser',
  'Ypsilon',
  'B-Max',
  'C-Max',
  'Escape',
  'Fiesta',
  'Focus',
  'Mustang Mach',
  'Accord',
  'Civic',
  'CR-X',
  'HR-V',
  'Jazz',
  'ZR-V',
  'Bayon',
  'i20',
  'i30',
  'IONIQ',
  'Kona',
  'TUCSON',
  'E-PACE',
  'F-PACE',
  'XE',
  'XF',
  'XKR',
  'X-Type',
  'Ceed',
  'Picanto',
  'Sportage',
  'Stonic',
  'Venga',
  'XCeed',
  'CT|CT',
  'ES|ES',
  'IS|IS',
  'NX|NX',
  'RX|RX',
  'RXL|RXL',
  'A Class',
  'C Class',
  'CLA Class',
  'E Class',
  'GLA Class',
  'GLE',
  'ARIYA',
  'Juke',
  'Micra',
  'Pulsar',
  'Qashqai',
  'X-Trail',
  'Alhambra',
  'Arona',
  'Ateca',
  'Ibiza',
  'Leon',
  'Tarraco',
  'Auris',
  'AYGO',
  'Corolla',
  'Estima',
  'PROACE Verso',
  'Yaris Cross',
  'Astra',
  'Crossland X',
  'Grandland X',
  'Mokka',
  'Mokka X',
  'Zafira Tourer')
]();

var cardPrice = [
  ('Any', '£2000-£10000', '£10001-£20000', '£20001-£50000', '£50001+'),
]();

var newImage = new Image();
(newImage.src = './db/img/Audi_A3_9095.jpg'),
  (newImage.src = './db/img/Audi_Etron_35000.jpg'),
  (newImage.src = './db/img/Audi_q5_33995.jpg'),
  (newImage.src = './db/img/Audi_RS7_37450.jpg'),
  (newImage.src = './db/img/Audi_SQ2_19000.jpg'),
  (newImage.src = './db/img/Audi_Tt_24990.jpg'),
  (newImage.src = './db/img/BMW_3_Series_10395.jpg'),
  (newImage.src = './db/img/BMW_Alpina_22995.jpg'),
  (newImage.src = './db/img/BMW_I7_118355.jpg'),
  (newImage.src = './db/img/BMW_m6_12995.jpg'),
  (newImage.src = './db/img/BMW_X5_48995.jpg'),
  (newImage.src = './db/img/BMW_Z3_7950.jpg'),
  (newImage.src = './db/img/Chrysler_300c_8995.jpg'),
  (newImage.src = './db/img/Chrysler_Crossfire_7500.jpg'),
  (newImage.src = './db/img/Chrysler_delta_3899.jpg'),
  (newImage.src = './db/img/Chrysler_pt_Cruiser_2250.jpg'),
  (newImage.src = './db/img/Chrysler_Voyager_2495.jpg'),
  (newImage.src = './db/img/Chrysler_Ypsilon_2390.jpg'),
  (newImage.src = './db/img/Ford_B_max_4490.jpg'),
  (newImage.src = './db/img/Ford_C_Max_8399.jpg'),
  (newImage.src = './db/img/Ford_escape_4800.jpg'),
  (newImage.src = './db/img/Ford_fiesta_8694.jpg'),
  (newImage.src = './db/img/Ford_Focus_13500.jpg'),
  (newImage.src = './db/img/Ford_mustang_21989.jpg'),
  (newImage.src = './db/img/Honda_Accord_9425.jpg'),
  (newImage.src = './db/img/Honda_civic_54950.jpg'),
  (newImage.src = './db/img/Honda_CR_X__9999.jpg'),
  (newImage.src = './db/img/Honda_HR_v_37270.jpg'),
  (newImage.src = './db/img/Honda_Jazz_29125.jpg'),
  (newImage.src = './db/img/Honda_ZR_v_34495.jpg'),
  (newImage.src = './db/img/Hyundai_Bayon_22420.jpg'),
  (newImage.src = './db/img/Hyundai_i_20_27030.jpg'),
  (newImage.src = './db/img/Hyundai_I_30_32995.jpg'),
  (newImage.src = './db/img/Hyundai_iONIC_14990.jpg'),
  (newImage.src = './db/img/Hyundai_KONA_25495.jpg'),
  (newImage.src = './db/img/Hyundai_TUSCOn_8500.jpg'),
  (newImage.src = './db/img/Jaguar_E_PACE_9989.jpg'),
  (newImage.src = './db/img/Jaguar_F_pace_10990.jpg'),
  (newImage.src = './db/img/Jaguar_X_Type_4495.jpg'),
  (newImage.src = './db/img/Jaguar_XE_3500.jpg'),
  (newImage.src = './db/img/Jaguar_XF_52430.jpg'),
  (newImage.src = './db/img/Jaguar_xkr_8450.jpg'),
  (newImage.src = './db/img/KIA_ceed_2225.jpg'),
  (newImage.src = './db/img/KIA_Picanto_2100.jpg'),
  (newImage.src = './db/img/KIA_sportage_41995.jpg'),
  (newImage.src = './db/img/KIA_Stonic_26375.jpg'),
  (newImage.src = './db/img/KIA_venga_11995.jpg'),
  (newImage.src = './db/img/KIA_XCeed_13750.jpg'),
  (newImage.src = './db/img/Lexus_ct_6795.jpg'),
  (newImage.src = './db/img/Lexus_ES_20430.jpg'),
  (newImage.src = './db/img/Lexus_is_2289.jpg'),
  (newImage.src = './db/img/Lexus_NX_13490.jpg'),
  (newImage.src = './db/img/Lexus_rx_51419.jpg'),
  (newImage.src = './db/img/Lexus_RXL_41710.jpg'),
  (newImage.src = './db/img/Mercedes_a_class_3700.jpg'),
  (newImage.src = './db/img/Mercedes_C_Class_38495.jpg'),
  (newImage.src = './db/img/Mercedes_cla_class_33253.jpg'),
  (newImage.src = './db/img/Mercedes_E_Class_88995.jpg'),
  (newImage.src = './db/img/Mercedes_gla_14999.jpg'),
  (newImage.src = './db/img/Mercedes_GLE_59000.jpg'),
  (newImage.src = './db/img/Nissan_ariya_36950.jpg'),
  (newImage.src = './db/img/Nissan_Juke_3395.jpg'),
  (newImage.src = './db/img/Nissan_micra_13995.jpg'),
  (newImage.src = './db/img/Nissan_Pulsar_20200.jpg'),
  (newImage.src = './db/img/Nissan_Qashqai_37495.jpg'),
  (newImage.src = './db/img/Nissan_X_Trail_40095.jpg'),
  (newImage.src = './db/img/SEAT_Alhambra_3299.jpg'),
  (newImage.src = './db/img/SEAT_arona_6990.jpg'),
  (newImage.src = './db/img/SEAT_Ateca_29950.jpg'),
  (newImage.src = './db/img/SEAT_ibiza_13995.jpg'),
  (newImage.src = './db/img/SEAT_Leon_21495.jpg'),
  (newImage.src = './db/img/SEAT_Tarraco_33995.jpg'),
  (newImage.src = './db/img/Toyota_auris_9989.jpg'),
  (newImage.src = './db/img/Toyota_AYGO_12987.jpg'),
  (newImage.src = './db/img/Toyota_corolla_19995.jpg'),
  (newImage.src = './db/img/Toyota_Estima_6495.jpg'),
  (newImage.src = './db/img/Toyota_Land_Cruiser_57999.jpg'),
  (newImage.src = './db/img/Toyota_prius_23450.jpg'),
  (newImage.src = './db/img/Vauxhall_Astra_26444.jpg'),
  (newImage.src = './db/img/Vauxhall_corsa_2995.jpg'),
  (newImage.src = './db/img/Vauxhall_crossland_16350.jpg'),
  (newImage.src = './db/img/Vauxhall_Grandland_X_19249.jpg'),
  (newImage.src = './db/img/Vauxhall_mokka_8265.jpg'),
  (newImage.src = './db/img/Vauxhall_Vivaro_E_Life_26444.jpg');

cardImageArray.push(newImage);
let existingImage = document.getElementById('existingImage');
imageArray.push(existingImage);

// Accessing the first image
let firstImage = cardImageArray[0];

// Iterating over all images
imageArray.forEach((img) => {
  console.log(img);
});

//   //If selected product matches either of 3 parameters, submit result.
//   if(product = cardMake||cardModel ||cardPrice){
//     product.showup=on.submit(card display on)
// }else{
//    productSelected.dont.show.up=on.submit(card display off)
// }
// }

//ADDING IMAGES FROM A FOLDER

// var fs=require('fs') //needed module for reading files
// function getImages(rootDirectory){
//   let slash=process.platform=="win32"?"\\":"/" //different slash for folder logic in different operating systems
//   let isFolder=(path)=>fs.lstatSync(path).isDirectory() //checks if something is a folder or not

//   var folders=fs.readdirSync(rootDirectory)
//   .filter(name=> isFolder(rootDirectory+slash+name) ) //only the folders remain
//   var myImages={} //object that will be structured dynamically
//   folders.forEach(folderName=>{
//     var folder=[] //individual folder(like day1)
//     fs.readdirSync(rootDirectory+slash+folderName)
//     .filter(fileName=>{ //only files which are images(like ".img")
//       let imageArr=['jpg','png','gif'] //image suffixes
//       let suffix=fileName.split('.')[1]
//       let condition=suffix? imageArr.includes(suffix.toLowerCase()): false //if a file is an image(from the name at leasts)
//       return !isFolder(rootDirectory+slash+folderName+slash+fileName) && condition
//     })
//     .forEach(imageName=>{
//       let src=folderName+slash+imageName
//       folder.push({src,data:fs.readFileSync(rootDirectory+slash+src)})
//       //now I really don't know how you're getting "name" and "alt".. maybe you could have a hash mapping of those stuff I guess
//     })
//     myImages[folderName]=folder //places a folder(like day1) into the "myImages" object
//   })
//   return myImages
// }

// //usage
// const myImages=getImages(__dirname) //__dirname is the directory of where the program is running
// console.log(myImages)
// //RESET FORM
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('filter').addEventListener('click', handleReset);
// });
// function handleReset(e) {
//   let collectSelectedOptions = [...document.querySelectorAll('i')].filter(
//     (option) => option.innerHtml
//   );

//   for (let i = 0; i < collectSelectedOptions.length; i++) {
//     field_type = collectSelectedOptions[i].type.theInput();

//     if (collectSelectedOptions[i].selected) {
//       collectSelectedOptions[i].selectedIndex = -1;
//     }
//   }
// }

//ALIGN CAR MAKE AND MODLE WHEN SELECTING OPTIONS.

function populate(makeChoice, modelChoice) {
  var makeChoice = document.getElementById(makeChoice);
  var modelChoice = document.getElementById(modelChoice);
  modelChoice.innerHTML = '';

  if (makeChoice.value == 'Audi') {
    var optionArray = [
      'Any|Any',
      'A3|A3',
      'e-tron|e-tron',
      'Q5|Q5',
      'RS7|RS7',
      'SQ2|SQ2',
      'TT|TT',
    ];
  }
  if (makeChoice.value == 'BMW') {
    var optionArray = [
      'Any|Any',
      '3 Series|3 Series',
      'Alpina B8|Alpina B8',
      'i7|i7',
      'X5|X5',
      'M6|M6',
      'Z3|Z3',
    ];
  }
  if (makeChoice.value == 'Chrysler') {
    var optionArray = [
      'Any|Any',
      '300C|300C',
      'Crossfire|Crossfire',
      'Delta|Delta',
      'Grand Voyager|Grand Voyager',
      'PT Cruiser|PT Cruiser',
      'Ypsilon|Ypsilon',
    ];
  }
  if (makeChoice.value == 'Ford') {
    var optionArray = [
      'Any|Any',
      'B-Max|B-Max',
      'C-Max|C-Max',
      'Escape|Escape',
      'Fiesta|Fiesta',
      'Focus|Focus',
      'Mustang Mach-E|Mustang Mach-E',
    ];
  }
  if (makeChoice.value == 'Honda') {
    var optionArray = [
      'Any|Any',
      'Accord|Accord',
      'Civic|Civic',
      'CR-X|CR-X',
      'HR-V|HR-V',
      'Jazz|Jazz',
      'ZR-V|ZR-V',
    ];
  }
  if (makeChoice.value == 'Hyundai') {
    var optionArray = [
      'Any|Any',
      'Bayon|Bayon',
      'i20|20',
      'i30|i30',
      'IONIQ|IONIQ',
      'Kona|Kona',
      'TUCSON|TUCSON',
    ];
  }
  if (makeChoice.value == 'Jaguar') {
    var optionArray = [
      'Any|Any',
      'E-PACE|E-PACE',
      'F-PACE|F-PACE',
      'XE|XE',
      'XF|XF',
      'XKR|XKR',
      'X-Type|X-Type',
    ];
  }
  if (makeChoice.value == 'Kia') {
    var optionArray = [
      'Any|Any',
      'Ceed|Ceed',
      'Picanto|Picanto',
      'Sportage|Sportage',
      'Stonic|Stonic',
      'Venga|Venga',
      'XCeed|XCeed',
    ];
  }
  if (makeChoice.value == 'Lexus') {
    var optionArray = ['CT|CT', 'ES|ES', 'IS|IS', 'NX|NX', 'RX|RX', 'RXL|RXL'];
  }
  if (makeChoice.value == 'Mercedes') {
    var optionArray = [
      'Any|Any',
      'A Class|A Class',
      'C Class|C Class',
      'CLA Class|CLA Class',
      'E Class|E Class',
      'GLA Class|GLA Class',
      'GLE|GLE',
    ];
  }
  if (makeChoice.value == 'Nissan') {
    var optionArray = [
      'Any|Any',
      'ARIYA|ARIYA',
      'Juke|Juke',
      'Micra|Micra',
      'Pulsar|Pulsar',
      'Qashqai|Qashqai',
      'X-Trail|X-Trail',
    ];
  }
  if (makeChoice.value == 'Seat') {
    var optionArray = [
      'Any|Any',
      'Alhambra|Alhambra',
      'Arona|Arona',
      'Ateca|Ateca',
      'Ibiza|Ibiza',
      'Leon|Leon',
      'Tarraco|Tarraco',
    ];
  }
  if (makeChoice.value == 'Toyota') {
    var optionArray = [
      'Any|Any',
      'Auris|AAuris',
      'AYGO|AYGO',
      'Corolla|Corolla',
      'Estima|Estima',
      'PROACE Verso|PROACE Verso',
      'Yaris Cross|Yaris Cross',
    ];
  }
  if (makeChoice.value == 'Vauxhall') {
    var optionArray = [
      'Any|Any',
      'Astra|Astra',
      'Crossland X|Crossland X',
      'Grandland X|Grandland X',
      'Mokka|Mokka',
      'Mokka X|Mokka X',
      'Zafira Tourer|Zafira Tourer',
    ];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split('|');
    var newOption = document.createElement('option');
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    modelChoice.options.add(newOption);
  }
}

// //SELECT MAKE FUNCTION

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('make').addEventListener('input', handleSelect);
// });

// function handleSelect(e) {
//   let select = e.target;
//   console.log(select.value);
//   //works, when "option" matches with "value": <option value="Jaguar">Jaguar</option>.
//   let choices = [];

//   choices = [].map.call(select.selectedOptions, (option) => option.value);

//   console.log(choices);
// }

// //SELECT MODEL FUNCTION
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('model').addEventListener('input', handleSelect);
// });

// function handleSelect(e) {
//   let select = e.target;
//   console.log(select.value); //works, when "option" matches with "value": <option value="Jaguar">Jaguar</option>.
//   let choices = [];

//   choices = [].map.call(select.selectedOptions, (option) => option.value);

//   console.log(choices);
// }

// //SELECT PRICE FUNCTION
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('price').addEventListener('input', handleSelect);
// });

// function handleSelect(e) {
//   let select = e.target;
//   console.log(select.value); //works, when "option" matches with "value": <option value="Jaguar">Jaguar</option>.
//   let choices = [];

//   choices = [].map.call(select.selectedOptions, (option) => option.value);

//   console.log(choices);
// }

//FORM FILTER STARTS HERE

//RESET FORM
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('filter').addEventListener('click', handleReset);
// });
// function handleReset() {
//   let collectSelectedOptions = [...document.querySelectorAll('i')].filter(
//     (option) => option.innerHtml
//   );

//   for (let i = 0; i < collectSelectedOptions.length; i++) {
//     field_type = collectSelectedOptions[i].type.theInput();

//     if (collectSelectedOptions[i].selected) {
//       collectSelectedOptions[i].selectedIndex = -1;
//     }
//   }
// }

// Form Reset Functionality

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('filter').addEventListener('click', handleReset);
// });
// function handleReset() {

//   let form = document.getElementById('filter');
//   form.querySelectorAll('select').forEach((select) => {
//     select.selectedIndex = 0; // Reset selected index to default (first option)
//   });

//   for (let i = 0; i < collectSelectedOptions.length; i++) {
//     field_type = collectSelectedOptions[i].type.theInput();

//     if (collectSelectedOptions[i].selected) {
//       collectSelectedOptions[i].selectedIndex = -1;
//     }
//   }
// }

function handleReset() {
  let form = document.getElementById('filter');

  // Loop through each form element
  form.querySelectorAll('select').forEach((select) => {
    select.selectedIndex = 0; // Reset selected index to default (first option)
  });
}

// Event listener for form reset
document.getElementById('reset').addEventListener('click', handleReset);

//SEARCH BUTTON

//Hide cards that are not included in the result
var productFilter = document.querySelectorAll('.product');
productFilter.forEach((product) => {
  product.style.display = 'none';
});

let div = document.getElementById('.product');
display = 0;

function toggleProductCards() {
  if ((display = 1)) {
    div.style.display = 'flex';
    display = 0;
  } else {
    div.style.display = 'none';
    display = 1;
  }

  //check if display value is empty or none, then set as block otherwise hide
  // 	.product.style.display = div.style.display == '' || div.style.display == 'none' ? 'flex' : 'none';
  // }
}
