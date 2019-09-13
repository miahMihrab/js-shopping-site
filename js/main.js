const watchlist = document.querySelector(".watch-list");
const productNames = document.querySelector('#productNames');
//console.log(document.querySelector('.nav-bar').children[1])

const shopProducts = ['watch', 'cloth']

document.querySelector('.nav-bar').addEventListener('mouseover', e => {

    console.log(Array.from(e.target.classList))
    if (Array.from(e.target.classList).includes('bar')) {
        console.log('true')
        const drop_nav = document.querySelector('.dropdown_nav');
        // if (Array.from(drop_nav).includes('hide')) {
        //     drop_nav.classList.remove('hide');
        //     drop_nav.classList.add('show');
        // } else {
        //     drop_nav.classList.remove('show');
        //     drop_nav.classList.add('hide');
        // }
    }
})

let p = document.querySelector('.nav-bar').children[5].children[0];
//console.log(abc)
const productDiv = Array.from(document.querySelector('#products').children)
productDiv.shift()
//document.querySelector('#products').children[1].style.visibility = 'visible'
productNames.addEventListener('click', e => {
    // console.log(shopProducts.includes((e.target.textContent).toLowerCase()))
    if (shopProducts.includes((e.target.textContent).toLowerCase())) {
        let pName = document.querySelector('#' + e.target.textContent)
        console.log(pName)

        //  console.log(getComputedStyle('.producPosition'))
        //  if (pName.style.visibility === 'hidden') {

        productDiv.forEach(element => {
            if (element !== pName) {
                if (Array.from(element.classList).includes('show')) {
                    element.classList.add('hide');
                    element.classList.remove('show');
                }
            }
        })

        if (Array.from(pName.classList).includes('hide')) {
            pName.classList.add('show');
            pName.classList.remove('hide')
        }

    }
})