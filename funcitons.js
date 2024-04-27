import { dropd, dropd_content, mainE, allRegions, regionss, searchInput, darkMode, back } from './deff'
import data from './data.json';

export function backto() {
    window.location.href = '/';
    main(data)
}

let isDark = localStorage.getItem("dark");
console.log(isDark)
export function darkOnOf() {
    isDark = localStorage.getItem("dark");
    if (isDark == "0") {
        document.documentElement.classList.add('dark')
        localStorage.setItem("dark", 1);
        console.log("!isDark", isDark)
    } else if (isDark == "1") {
        document.documentElement.classList.remove('dark')
        localStorage.clear()
        localStorage.setItem("dark", 0);
        console.log("else", isDark)
    }
    isDark = localStorage.getItem("dark");

    console.log(localStorage)
}

export function showDrop() {
    // dropd_content.classList.remove('hidden')
    if (dropd_content.classList.contains('hidden')) {
        dropd_content.classList.remove('hidden')
    } else {
        dropd_content.classList.add('hidden')
    }
}

export function search() {
    let selected = this.value
    if (selected == '') {
        main(data)
    } else {
        var wantedData = data.filter(function (i) {
            return i.name.toLocaleLowerCase().includes(selected.toLocaleLowerCase());
        });
        main(wantedData)
    }
}


export function getRegion() {

    for (var i = 0; i < allRegions.length; i++) {
        allRegions[i].addEventListener('click', function () {
            regionss.innerText = this.innerHTML
            let selected = this.innerHTML
            if (selected == 'All Regions') {
                main(data)
            } else {
                var wantedData = data.filter(function (i) {
                    return i.region === selected;
                });
                main(wantedData)
            }

        });
    }
}

export function main(d) {
    let v = ''
    d.forEach(e => {
        v += `
        <a href="details.html?name=${e.name.toLocaleLowerCase()}" class="bg-white grid grid-rows-2 shadow w-full mt-5 cursor-pointer">
            <div class="w-full h-full">
            <img
                class="object-cover h-full w-full"
                src="${e.flags.png}"
                alt=""
            />
            </div>
            <div class="p-6 flex flex-col">
            <h1 class="my-2 pb-2 text-xl font-bold">${e.name}</h1>
            <h2 class="font-semibold">
                Population: <span class="font-normal">${e.population}</span>
            </h2>
            <h2 class="font-semibold">
                Region: <span class="font-normal">${e.region}</span>
            </h2>
            <h2 class="font-semibold">
                Capital:<span class="font-normal">${e.capital}</span>
            </h2>
            </div>
      </a>`
    })
    mainE.innerHTML = v
}