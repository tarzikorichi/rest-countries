import './style.css'
import { dropd, dropd_content, allRegions, searchInput, darkMode } from './deff'
import { showDrop, main, getRegion, search, darkOnOf } from './funcitons'
import data from './data.json';

dropd.addEventListener('click', showDrop)
searchInput.addEventListener('keyup', search)
darkMode.addEventListener('click', darkOnOf)

localStorage.setItem("dark", 0);
darkOnOf()

main(data)
getRegion()

