// Your code goes here
let idRoot = document.querySelector('#root')

let divPreview = document.createElement('div')
idRoot.appendChild(divPreview)
divPreview.className = "tanks-preview"

let divDetails = document.createElement('div')
idRoot.appendChild(divDetails)

divDetails.className = "tank-details"

const createNewElement = (tag) => {
    let element = document.createElement(tag)

    return element
}

const modifyTankName = (name) => name.toLowerCase().replace(/\s/g, '-')

const createThumbnailsPage = (tagPage, arrTanks) => {
    let h2 = createNewElement('h2')
    tagPage.appendChild(h2)
    h2.textContent = "Most popular tanks"

    let main = createNewElement('main')
    tagPage.appendChild(main)

    for (let i = 0; i < arrTanks.length; i++ ) {
        let tank = arrTanks[i]

        let aTank = createNewElement('a')
        main.appendChild(aTank)
        aTank.setAttribute("href", "#" + modifyTankName(tank.model))
        aTank.className = "tank"

        let divTank = createNewElement('div')
        aTank.appendChild(divTank)

        let img = createNewElement('img')
        divTank.appendChild(img)
        img.src = tank.preview
        img.className = "img-tank"

        let divShortDescribe = createNewElement('div')
        divTank.appendChild(divShortDescribe)
        divShortDescribe.className = 'short-detail'

        let imgCountry = createNewElement('img')
        divShortDescribe.appendChild(imgCountry)
        imgCountry.className = "country"
        imgCountry.setAttribute("src", tank.country_image)
        imgCountry.setAttribute("alt", tank.country)

        let level = createNewElement('span')
        divShortDescribe.appendChild(level)
        level.textContent = tank.level

        let model = createNewElement('span')
        divShortDescribe.appendChild(model)
        model.textContent = tank.model
    }
}


const createTankDetailsPage = (tagPage, objTank) => {
    let tankDetail = createNewElement('div')
    tagPage.appendChild(tankDetail)
    tankDetail.setAttribute("data-name", modifyTankName(objTank.model))

    let header = createNewElement('h2')

    header.textContent = objTank.model
    tankDetail.appendChild(header)

    let divMain = createNewElement('div')
    tankDetail.appendChild(divMain)

    let left = createNewElement('div')
    divMain.appendChild(left)
    left.className = "left"

    let previewText = createNewElement('span')
    previewText.textContent = "Preview"
    left.appendChild(previewText)

    let imgTank = createNewElement('img')
    imgTank.setAttribute('src', objTank.preview)
    left.appendChild(imgTank)

    let right = createNewElement('div')
    divMain.appendChild(right)

    let characteristic = createNewElement('span')
    characteristic.textContent = "Characteristic"
    right.appendChild(characteristic)

    let table = createNewElement('table')
    right.appendChild(table)

    for (var item in objTank.details) {
        let tr = createNewElement('tr')
        table.appendChild(tr)

        let td1 = createNewElement('td')
        td1.textContent = item
        tr.appendChild(td1)
        let td2 = createNewElement('td')
        td2.textContent = objTank.details[item]
        tr.appendChild(td2)
    }

    let footer = createNewElement('a')
    tankDetail.appendChild(footer)
    footer.textContent = "Back to list view"
    footer.setAttribute('href', '#')
}

const hiddenTankDetails = (currentTankName) => {
    let $allTankDetails = document.querySelectorAll(".tank-details > div")

    for (let i = 0; i < $allTankDetails.length; i++) {
        $allTankDetails[i].setAttribute('hidden', "hidden")
    }

    if (currentTankName) {
        let $currentTankDetail = document.querySelector(`[data-name=${currentTankName}]`)

        $currentTankDetail.removeAttribute("hidden")
    } 
}

window.addEventListener('hashchange', function(e) {
    run(location.hash.slice(1))
});


function run(hash) {

    if (!hash) {
        document.querySelector(".tanks-preview").removeAttribute("hidden")
        hiddenTankDetails()
    } else {
        document.querySelector(".tanks-preview").setAttribute("hidden", true)

        hiddenTankDetails(hash)
    }
}

(function() {
    createThumbnailsPage(divPreview, tanks)

    tanks.forEach(function(tank) {
        createTankDetailsPage(divDetails, tank)
    })

    run(location.hash.slice(1))

})()