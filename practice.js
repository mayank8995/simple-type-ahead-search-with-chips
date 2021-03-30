const countries = [
    {
        "country": "AD",
        "name": "Sant Julià de Lòria",
        "lat": "42.46372",
        "lng": "1.49129"
    },
    {
        "country": "AD",
        "name": "Pas de la Casa",
        "lat": "42.54277",
        "lng": "1.73361"
    },
    {
        "country": "AD",
        "name": "Ordino",
        "lat": "42.55623",
        "lng": "1.53319"
    },
    {
        "country": "AD",
        "name": "les Escaldes",
        "lat": "42.50729",
        "lng": "1.53414"
    },
    {
        "country": "AD",
        "name": "la Massana",
        "lat": "42.54499",
        "lng": "1.51483"
    },
    {
        "country": "AD",
        "name": "Encamp",
        "lat": "42.53474",
        "lng": "1.58014"
    },
    {
        "country": "AD",
        "name": "Canillo",
        "lat": "42.5676",
        "lng": "1.59756"
    },
    {
        "country": "AD",
        "name": "Arinsal",
        "lat": "42.57205",
        "lng": "1.48453"
    },
    {
        "country": "AD",
        "name": "Andorra la Vella",
        "lat": "42.50779",
        "lng": "1.52109"
    },
    {
        "country": "AE",
        "name": "Umm al Qaywayn",
        "lat": "25.56473",
        "lng": "55.55517"
    },
    {
        "country": "AE",
        "name": "Ras al-Khaimah",
        "lat": "25.78953",
        "lng": "55.9432"
    },
    {
        "country": "AE",
        "name": "Muzayri‘",
        "lat": "23.14355",
        "lng": "53.7881"
    },
    {
        "country": "AE",
        "name": "Murbaḩ",
        "lat": "25.27623",
        "lng": "56.36256"
    },
    {
        "country": "AE",
        "name": "Khawr Fakkān",
        "lat": "25.33132",
        "lng": "56.34199"
    },
    {
        "country": "AE",
        "name": "Dubai",
        "lat": "25.0657",
        "lng": "55.17128"
    },
    {
        "country": "AE",
        "name": "Dibba Al-Fujairah",
        "lat": "25.59246",
        "lng": "56.26176"
    },
    {
        "country": "AE",
        "name": "Dibba Al-Hisn",
        "lat": "25.61955",
        "lng": "56.27291"
    },
    {
        "country": "AE",
        "name": "Sharjah",
        "lat": "25.33737",
        "lng": "55.41206"
    },
    {
        "country": "AE",
        "name": "Ar Ruways",
        "lat": "24.11028",
        "lng": "52.73056"
    },
    {
        "country": "AE",
        "name": "Al Fujayrah",
        "lat": "25.11641",
        "lng": "56.34141"
    },
    {
        "country": "AE",
        "name": "Al Ain",
        "lat": "24.19167",
        "lng": "55.76056"
    },
    {
        "country": "AE",
        "name": "Ajman",
        "lat": "25.41111",
        "lng": "55.43504"
    },
    {
        "country": "AE",
        "name": "Adh Dhayd",
        "lat": "25.28812",
        "lng": "55.88157"
    },
    {
        "country": "AE",
        "name": "Abu Dhabi",
        "lat": "24.46667",
        "lng": "54.36667"
    },
    {
        "country": "AF",
        "name": "Zorkot",
        "lat": "33.54149",
        "lng": "69.73446"
    },
    {
        "country": "AF",
        "name": "Wulêswālī Bihsūd",
        "lat": "34.3436",
        "lng": "67.90567"
    },
    {
        "country": "AF",
        "name": "Kuhsān",
        "lat": "34.65389",
        "lng": "61.19778"
    },
    {
        "country": "AF",
        "name": "Lāsh",
        "lat": "35.3782",
        "lng": "64.77457"
    },
    {
        "country": "AF",
        "name": "Tukzār",
        "lat": "35.94831",
        "lng": "66.42132"
    },
    {
        "country": "AF",
        "name": "Mīray",
        "lat": "33.32462",
        "lng": "68.44068"
    },
    {
        "country": "AF",
        "name": "Āq Kupruk",
        "lat": "36.08352",
        "lng": "66.84029"
    },
    {
        "country": "AF",
        "name": "Zurmat",
        "lat": "33.43778",
        "lng": "69.02774"
    },
    {
        "country": "AF",
        "name": "Zaybāk",
        "lat": "36.52947",
        "lng": "71.3441"
    },
    {
        "country": "AF",
        "name": "Zīārat-e Shāh Maqşūd",
        "lat": "31.9848",
        "lng": "65.4736"
    },
    {
        "country": "AF",
        "name": "Zindah Jān",
        "lat": "34.34264",
        "lng": "61.74675"
    },
    {
        "country": "AF",
        "name": "Zarghūn Shahr",
        "lat": "32.84734",
        "lng": "68.44573"
    },
    {
        "country": "AF",
        "name": "Zaṟah Sharan",
        "lat": "33.14641",
        "lng": "68.79213"
    },
    {
        "country": "AF",
        "name": "Zaranj",
        "lat": "30.95962",
        "lng": "61.86037"
    },
    {
        "country": "AF",
        "name": "Zamtō Kêlay",
        "lat": "32.3726",
        "lng": "66.17708"
    },
    {
        "country": "AF",
        "name": "Yangī Qal‘ah",
        "lat": "37.46572",
        "lng": "69.61131"
    }
];
function filterNames(wordToMatch, countries) {
    return countries.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex)
    })
}

function displaySuggestions() {
    const matches = filterNames(this.value, countries);
    console.log(matches);
    const html = matches.map((country) => {
        return `<li id="list-item">
            <span id="countryName" onclick="makePills(this)">${country.name}</span>
        </li>`
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('#search');
const suggestions = document.querySelector('.suggestion');
searchInput.addEventListener('change', displaySuggestions);
searchInput.addEventListener('keyup', displaySuggestions);
const list = document.querySelector('#list');
let id = 0;
function makePills(obj) {
    console.log("obj>>>", obj);
    const listElem = document.querySelectorAll('li.item');
    console.log(listElem);
    let array = [...listElem];
    console.log(array);
    let newArr = array.find((item) => item.innerText.substring(0, item.innerText.length - 1) === obj.innerHTML);
    console.log(newArr);
    if (!newArr) {
        const ele = document.createElement('li');
        const sibElem = document.createElement('span');
        const button = document.createElement('button');
        ele.className = 'item';
        list.appendChild(ele);
        ele.appendChild(button);
        button.setAttribute('class', 'pill');
        button.innerHTML = obj.innerHTML;
        id++;
        sibElem.innerHTML = 'X';
        sibElem.style.paddingLeft = '2px';
        sibElem.style.color = 'green';
        sibElem.style.cursor = 'pointer';
        sibElem.addEventListener('click', deleteListItem);
        sibElem.setAttribute('id', 'delete-' + id);
        button.appendChild(sibElem);
        button.addEventListener('click', () => {
            event.preventDefault();
        });
    }
}
function deleteListItem($event) {
    $event.stopPropagation();
    console.log($event);
    const elem = document.getElementById($event.target.id).parentElement.parentElement;
    console.log(elem);
    elem.remove();
    if (!checkIfChildIsLeft()) {
        while (suggestions.firstChild) {
            suggestions.removeChild(suggestions.lastChild);
            searchInput.value = '';
        }
    }
}
function checkIfChildIsLeft() {
    console.log("length", list.childNodes.length);
    return list.childNodes.length - 1 > 0 ? true : false;
}
