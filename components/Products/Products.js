class Products{
    constructor(){
        this.classNameActive = 'products_element__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'

    }
    handleSetLocationStorage(el, id){
        const {pushProds, prods} = localStorageUtil.putProducts(id)
        if(pushProds){
            el.classList.add(this.classNameActive)
            el.innerHTML = this.labelRemove
        }
        else{
            el.classList.remove(this.classNameActive)
            el.innerHTML = this.labelAdd
        }
        headerPage.render(prods.length)
    }
    
    render(){
        const prodsStore = localStorageUtil.getProducts() 
        console.log("prodsStore = " + prodsStore)       
        
        let catalog =''
        CATALOG.forEach(({id,name,img,price}) => {
            let activeClass =''
            let activeText = ''
            //console.log(prodsStore.indexOf(id) + " = " + (prodsStore.indexOf(id) == -1))
            if(prodsStore.indexOf(id) == -1){           
                activeText = this.labelAdd               
            } else {
                activeText = this.labelRemove
                activeClass = this.classNameActive               
            }
            catalog += `
            <li class="products_element" id="${id}">
                <span class="products_element__name">${name}</span>
                <img class="products_element__img" src='${img}'/>
                <span class="products_element__price">${price}</span>
                <button class="products_element__btn ${activeClass}" onClick="productsPage.handleSetLocationStorage(this, '${id}');">
                ${activeText}
                </button>
            </li>
            `
        })
        const html = `<ul class="products_container">${catalog}</ul>`
        ROOT_PRODUCTS.innerHTML = html
        
    }
    
    
}



const productsPage = new Products()
