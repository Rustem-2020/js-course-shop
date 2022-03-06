class Header {
    openShopCardHandler(){
        shop.render()
    }
    render(count){
        const html = `
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.openShopCardHandler();">${count}</div>
        </div>
        
        `
        ROOT_HEADER.innerHTML = html

    }
}
const headerPage = new Header()




