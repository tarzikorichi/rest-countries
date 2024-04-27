import './style.css'
import { darkMode2, back, contentDetails } from './deff'
import { darkOnOf, backto } from './funcitons'
import data from './data.json';


darkMode2.addEventListener('click', darkOnOf)
back.addEventListener('click', backto)

const urlSearch = window.location.search;
const urlParams = new URLSearchParams(urlSearch);
const name = urlParams.get("name");
main2()

darkOnOf()


function main2() {
    let f = name.toLocaleLowerCase()
    var det = data.filter(function (i) {
        return i.name.toLocaleLowerCase() == name  //i.name.toLocaleLowerCase().includes(f);
    });
    det = det[0]
    console.log(det)

    if (det) {
        document.getElementById("fflag").src = det.flags.png
        document.getElementById("name").innerText = det.name
        document.getElementById("Nname").innerText = det.nativeName
        document.getElementById("pop").innerHTML = det.population
        document.getElementById("region").innerText = det.region
        document.getElementById("sub").innerText = det.subregion
        document.getElementById("cap").innerText = det.capital
        document.getElementById("level").innerText = det.topLevelDomain[0]
        document.getElementById("curr").innerText = det.currencies[0].code
        document.getElementById("lang").innerText = laguage(det.languages)
        document.getElementById("borderF").innerHTML = getBorderCou(det.borders)
    }
}

function laguage(arr) {
    // console.log(arr)
    let re = ''
    arr.forEach(e => {
        re += e.name + ', '
    });
    return re
}

//borderF
function getBorderCou(arr) {
    let gg = ''
    let g = getNames(arr)
    console.log(g)
    g.forEach(g => {
        gg += `
        <div
        class="px-3 bg-[--Very-Light-Gray] shadow-md mx-2 text-[--Very-Dark-Blue] dark:text-[--White] dark:bg-[--Dark-Blue]"
      >
        ${g}
      </div>
        `
    })

    return gg
}

function getNames(arr) {
    let g = []

    arr.forEach(e => {
        data.forEach(ee => {
            if (ee.alpha3Code == e) {
                g.push(ee.name)
            }
        })
    })
    return g
}