class LocalStorageUtil {
    constructor(){
        this.keyName = 'products'

    }
    getProducts(){
        const prodLocalStorage = localStorage.getItem(this.keyName)
        //console.log('get' + prodLocalStorage)
        if(prodLocalStorage !== null){
            //console.log(JSON.parse(prodLocalStorage))
            return  JSON.parse(prodLocalStorage)
        }
        return []

    }
    putProducts(id){
        let prods = this.getProducts()
        let pushProds = false
        let index = prods.indexOf(id)
        if (index === -1){
            prods.push(id)
            pushProds = true
        }
        else{
            prods.splice(index, 1)
        }
        
        localStorage.setItem(this.keyName, JSON.stringify(prods))
        return {
            pushProds, prods
        }
        
    }
}
const localStorageUtil = new LocalStorageUtil()





