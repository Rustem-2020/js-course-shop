class Shoping {
    handlerClear(){
        ROOT_SHOPPING.innerHTML = ''
    }
    
    render(){
        const prodsStore = localStorageUtil.getProducts()        
        let htmlCatalog =''
        let summa = 0
        CATALOG.forEach(({id,name,price}) => {
            if(prodsStore.indexOf(id) !== -1){
                htmlCatalog += `
                 <tr>
                    <td class="shopping_element__name"><h2>${name}</h2></td>
                    <td class="shopping_element__price"><h3>${price.toLocaleString()} $</h3></td>
                 </tr>
        
                `
                summa += price
            }
            

            })
        const html =`
            <div class="shopping_container">
                <div class="shopping_close" onclick="shop.handlerClear();"><h3>Close</h3></div>
                <table>
                ${htmlCatalog}
                <tr>
                    <td class="shopping_element__name"><h2>Сумма:</h2></td>
                    <td class="shopping_element__price"><h3>${summa} $</h3></td>
                </tr>
                <table>
            </div>

        `
        ROOT_SHOPPING.innerHTML = html
    }
}
const shop = new Shoping()