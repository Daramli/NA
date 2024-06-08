// SCROLL TO THE TOP BUTTON

// Step 1: Create a const (const scrollToTopBtn) for button class and
// ask(document.querySelector) for that class ('.scrollToTopBtn').

// Step 2: Apply function(() =>{}) for a screen itself (window), by adding
// event(.addEventListener ('scroll').

// Step 3: Add condition (if (document.documentElement.scrollTop > 800)-what happens,
// when you scrolled over 800px.

// Step 4: If condition is true, we will merge class .scrollToTopBtn with class .active.
// Step 5: If condition is not true,we will disconnect class .active from class  .scrollToTopBtn.

const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 800) {
    scrollToTopBtn.classList.add('active');
  } else {
    scrollToTopBtn.classList.remove('active');
  }
});
//
//
//
//

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
      'Crossland|Crossland X',
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
//
//
// WISHLIST JavaScript
let wishlist = [];

function setup() {
  console.log('window loaded');
  const products = document.querySelectorAll('.card_btn');
  for (let i = 0; i < products.length; i++) {
    products[i].onclick = function (e) {
      addItem(e);
    };
  }
}

function addItem(e) {
  const productId = e.target.getAttribute('id');
  const productDiv = document.getElementById('product' + productId);

  if (!wishlist.find((item) => item === productId)) {
    const wishDiv = document.createElement('div');
    wishDiv.setAttribute('id', 'wish' + productId);
    wishDiv.setAttribute('class', 'product');
    wishDiv.innerHTML = productDiv.innerHTML;

    const removeBtn = document.createElement('input');
    removeBtn = setAttribute('type', 'button');
    removeBtn = setAttribute('value', 'Remove');
    removeBtn.onlick = function () {
      removeItem(productId);
    };
    wishDiv = appendChid(removeBtn);

    let aside = document.getElementById('wishlist');
    aside.appendChid(wishDiv);

    wishlist.push(productId);
    console.log(wishlist);
  }
}

function removeItem(productId) {
  const product = document.getElementById('wish' + productId);
  product.remove();
  wishlist = wishlist.filter((item) => item !== productId);
  console.log(wishlist);
}

window.addEventListener('load', setup);

//
//
//
//
// Form Reset Functionality
function handleReset() {
  let form = document.getElementById('filter');

  // Loop through each form element
  form.querySelectorAll('select').forEach((select) => {
    select.selectedIndex = 0; // Reset selected index to default (first option)
  });
}

// Event listener for form reset
document.getElementById('reset').addEventListener('click', handleReset);

// Event listeners for dropdown selections
document.getElementById('make').addEventListener('input', handleSelect);
document.getElementById('model').addEventListener('input', handleSelect);
document.getElementById('price').addEventListener('input', handleSelect);

// Consolidated handleSelect function
function handleSelect(e) {
  let select = e.target;
  console.log(select.value); // Log the selected value

  // Determine the dropdown based on the ID of the select element
  switch (select.id) {
    case 'make':
      // Handle make selection
      break;
    case 'model':
      // Handle model selection
      break;
    case 'price':
      // Handle price selection
      break;
    default:
      break;
  }
}

// Define the enableSingleBrand function outside of handleSubmit
function enableSingleBrand(answer) {
  console.log(answer.value);
  const makeValue = answer.value;

  // Hide all product elements
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    product.style.display = 'none';
  });

  // Show products for the selected make
  // const selectedMake = document.querySelectorAll(
  //   `.product[data-make="${makeValue}"]`
  // );
  const selectedMake = document.querySelectorAll('.bmw');
  console.log("hii", selectedMake);
  selectedMake.forEach((product) => {
    product.style.display = 'block';
  });
}

function handleSubmit() {
  const makeSelect = document.getElementById('make');
  const selectedMake = makeSelect.value;

  // Call the enableSingleBrand function with the selected make
  enableSingleBrand({ value: selectedMake });
}
//
//
//
//
//
//SIDEBAR BUTTON
//
//

window['twn-starter-config'] = {
  // Potential other options...

  on: {
    'twn.request.navigation.success': function (e) {
      var products = e.target.productId;

      // Using JavaScript code fetch product IDs added to a wishlist
      let addedProducts = document.getElementById('product');

      // Iterate products::var product of products
      for (let i = 0; i < products.lenght; i++) {
        // Check if added to a wishlist
        if (!addedProducts.includes(product.itemno)) return;

        // Query the product tile,
        // leveraging its unique ID defined by the product's ID (itemno)
        var element = document.getElementById(`twn-${product.itemno}`);
        if (!element) return;

        // Query the favorites button within the product tile
        var collection = element.getElementsByClassName(
          'twn-product-tile__add-to-favorites'
        );
        if (!collection[0]) return;

        // Add `is-added` class name to the element
        collection[0].classList.add('is-added');
      }
    },
  },
};

//OPEN WISHLIST
function openWishlist() {
  document.getElementById('wishlist').style.width = '300px';
  document.getElementById('openWishlist').style.marginLeft = '5px';
}

//SOUND EFFECT ON OPEN

const audio = new Audio();
audio.src = './button_click_sound.mp3';

//CLOSE WISHLIST

function closeWishlist() {
  document.getElementById('wishlist').style.width = '0';
  document.getElementById('openWishlist').style.marginLeft = '0';
}
//
//
//
//
//Search Model

// Define the enableSingleBrand function outside of handleSubmit
function enableSingleModel(answer) {
  console.log(answer.value);
  const modelValue = answer.value;

  // Hide all product elements
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    product.style.display = 'none';
  });

  // Show products for the selected model
  const selectedModel = document.querySelectorAll(
    `.product[data-model="${modelValue}"]`
  );
  selectedModel.forEach((product) => {
    product.style.display = 'block';
  });
}

function handleSubmitModel() {
  const modelSelect = document.getElementById('model');
  const selectedModel = modelSelect.value;

  // Call the enableSingleBrand function with the selected model
  // enableSingleModel({ value: selectedModel });
}
//
//
// Search Price
//
// Define the enableSingleBrand function outside of handleSubmit
function enableSinglePrice(answer) {
  console.log(answer.value);
  const priceValue = answer.value;

  // Hide all product elements
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    product.style.display = 'none';
  });

  // Show products for the selected price
  const selectedPrice = document.querySelectorAll(
    `.product[data-price="${priceValue}"]`
  );
  selectedPrice.forEach((product) => {
    product.style.display = 'block';
  });
}

function handleSubmitPrice() {
  const priceSelect = document.getElementById('price');
  const selectedPrice = priceSelect.value;

  // Call the enableSingleBrand function with the selected model
  // enableSinglePrice({ value: selectedPrice });
}

// <div class="resultCalculated"> We found <b id="calculate">
// <!--Some JavaScript function that shows the result here--> (number of results here)
// </b> cars for you! </div>
// <!--Form ends here-->
// </div>

//Search We found...cars
