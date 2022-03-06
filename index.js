function render(){
    const productStore = localStorageUtil.getProducts()
    
    headerPage.render(productStore.length)
    productsPage.render()

}

spinnerPage.render()

let CATALOG = []

//'http://myjson.dit.upm.es/api/bins/g2cb'
fetch('server/catalog.json')
.then(response => response.json())
.then(body => {
    CATALOG = body
    setTimeout(() =>{
         spinnerPage.handleClear()
         render()
    }, 1500)
    
})
.catch(error => {
    spinnerPage.handleClear()
    errorPage.render('Error from Render() method ', error)
})


