

//menu bar code 

const menu = document.querySelector('.menu');
const barMenu = document.querySelectorAll('.menu-bar')
const Links_list = document.querySelector('.Links-list')
const Link_list_Li = document.querySelectorAll('.Links-list li');

console.log(Link_list_Li);

function bartransition (){
    barMenu.forEach(bar => {
        bar.classList.toggle('active')
        Links_list.classList.toggle('active')
        menu.classList.toggle('active')
    })
}

menu.addEventListener('click', bartransition)

Link_list_Li.forEach(li => li.addEventListener('click', bartransition))


//variables
//home
const backgoundContainer = document.querySelector('.bg-home')
const switchBgHomeBtn = document.querySelectorAll('.switch-home-bg span')
const logo = document.querySelector('.link-logo h1 span')
const seemoreBtn = document.querySelector('.home-info-container a')
console.log(logo);
const homeArraychangers = [
    {
        BgImageUrl: 'url(./img/Home1.jpg)',
        id:1,
        color:'rgb(135, 185, 18)',
    },
    {
        BgImageUrl: 'url(./img/Home2.jpg)',
        id:2,
        color:'black',
    },
    {
        BgImageUrl: 'url(./img/Home3.jpg)',
        id:3,
        color:'rgb(135, 185, 18)',
    },
    {
        BgImageUrl: 'url(./img/Home4.jpg)',
        id:4,
        color:'black',
    }
]


//////////////


//events
//home
switchBgHomeBtn.forEach(btn => btn.addEventListener('mouseenter', () => {
    remouveStyleSpan()
    addclasslist(btn.id)
}) )




////////////////////////


//functions
//home
function remouveStyleSpan() {
    switchBgHomeBtn.forEach(btn => btn.classList.remove('active') )
}

function addclasslist(id){
    const clickedSpan = Array.from(switchBgHomeBtn).find(btn => btn.id === id)
    const infoToken = homeArraychangers.find(info => info.id == id)
    clickedSpan.classList.add('active')
    logo.style.background = infoToken.color
    seemoreBtn.style.background = infoToken.color
    backgoundContainer.style['background-image'] = infoToken.BgImageUrl

    menu.style.background = infoToken.color;
    // Links_list.style.background = infoToken.color;
    console.log(infoToken.BgImageUrl);

    
}
///////////////////////////



//product codes

let products = [
    {
        imageUrl: './img/product1.jpg',
        id:1,
        productName: 'Black Tea',
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis 
        voluptate quae, suscipit cum doloremque molestiae deserunt voluptatum 
        iusto debitis corrupti, `
    },
    {
        imageUrl: './img/product2.jpg',
        id:2,
        productName: 'white Tea',
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis 
        voluptate quae, suscipit cum doloremque molestiae deserunt voluptatum 
        iusto debitis corrupti, `
    },
    {
        imageUrl: './img/product3.jpg',
        id:3,
        productName: 'yellow Tea',
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis 
        voluptate quae, suscipit cum doloremque molestiae deserunt voluptatum 
        iusto debitis corrupti, `
    },
    {
        imageUrl: './img/product4.jpg',
        id:4,
        productName: 'red Tea',
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis 
        voluptate quae, suscipit cum doloremque molestiae deserunt voluptatum 
        iusto debitis corrupti, `
    },
    {
        imageUrl: './img/product5.jpg',
        id:5,
        productName: 'green Tea',
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis 
        voluptate quae, suscipit cum doloremque molestiae deserunt voluptatum 
        iusto debitis corrupti, `
    },
]

const All_product_col = document.querySelector('.all-products-coll');
const see_more_bubl = document.querySelector('.see-more');
const see_more_layer = document.querySelector('.see-more-layer');
const CloseSeeMoreBtn = document.querySelector('.close-btn');
const see_more_img = document.querySelector('.see-more-img');
const teaName = document.querySelector('.tea-name');
console.log(see_more_img);

console.log(All_product_col);
function dataUi(products){

    let productUI = products.map(product => {
        return`
        <div class="product-col">
            <div class="product-col-img">
                <img src="${product.imageUrl}" alt="">
                        
                <div class="layer">
                    <div>
                        <h1 class="product-col-title">${product.productName}</h1>
                        <p onclick= seeMoreFun(${product.id})>see more</p>                    
                    </div>
                </div>
            </div>                    
        </div>
        
        `
    })

    All_product_col.innerHTML = productUI.join('')
    console.log(productUI);
}

dataUi(products)

function seeMoreFun(id) {
    const clickedProduct = products.find(prd => prd.id == id)
    console.log(clickedProduct.imageUrl);
    teaName.textContent = clickedProduct.productName 
    see_more_img.innerHTML = `<img class='see-more-img-img' src="${clickedProduct.imageUrl}" alt="">`
    see_more_bubl.classList.add('active')
    see_more_layer.classList.add('active')
}

CloseSeeMoreBtn.addEventListener('click', () => {
    see_more_bubl.classList.remove('active');
    see_more_layer.classList.remove('active');
})

see_more_layer.addEventListener('click', () => {
    see_more_bubl.classList.remove('active');
    see_more_layer.classList.remove('active');
})