class Error {
    constructor(mes){
        this.message = mes
    }
    render(mes, err){
        const html =`
            <div class="error-container">
                <h1>${mes}</h1>
                <p class="error-para">${err}</p>
                <h2>${this.message}</h2>
                
            </div>
        `
        ROOT_ERROR.innerHTML = html
        
    }  
      
    
}
const errorPage = new Error('Error from constructor')