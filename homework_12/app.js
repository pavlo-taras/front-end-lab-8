// Your code goes here
let idRoot = document.querySelector('#root')

let divPreview = document.createElement('div')
idRoot.appendChild(divPreview)

let divDetails = document.createElement('div')
idRoot.appendChild(divDetails)

divDetails.className = "tank-details"

const createNewElement = (tag) => {
    let element = document.createElement(tag)

    return element
}


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
        aTank.setAttribute("href", "#" + tank.model.toLowerCase().replace(/\s/g, '-'))

        let divTank = createNewElement('div')
        aTank.appendChild(divTank)
        divTank.className = "tank"

        let img = createNewElement('img')
        divTank.appendChild(img)
        img.src = tank.preview
        img.className = "img-tank"

        let divData = createNewElement('div')
        divTank.appendChild(divData)

        let imgCountry = createNewElement('img')
        divData.appendChild(imgCountry)
        imgCountry.setAttribute("src", tank.country_image)
        imgCountry.setAttribute("alt", tank.country)

        let level = createNewElement('span')
        divData.appendChild(level)
        level.textContent = tank.level

        let model = createNewElement('span')
        divData.appendChild(model)
        model.textContent = tank.model
    }
}


const createTankDetailsPage = (tagPage, objTank) => {
    let header = createNewElement('h2')

    header.textContent = objTank.model
    tagPage.appendChild(header)

    let main = createNewElement('main')
    tagPage.appendChild(main)

    let left = createNewElement('div')
    main.appendChild(left)
    left.className = "left"

    let previewText = createNewElement('span')
    previewText.textContent = "Preview"
    left.appendChild(previewText)

    let imgTank = createNewElement('img')
    console.log(imgTank)
    imgTank.setAttribute('src', objTank.preview)
    left.appendChild(imgTank)

    let right = createNewElement('div')
    main.appendChild(right)

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
    tagPage.appendChild(footer)
    footer.textContent = "Back to list view"
    footer.setAttribute('href', '#')
}

createThumbnailsPage(divPreview, tanks)
createTankDetailsPage(divDetails, tanks[0])

window.addEventListener('hashchange', function(e) {
  // Logic for choose one tank
});