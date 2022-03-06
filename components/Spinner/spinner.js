class Spinner {
    handleClear(){
        ROOT_SPINNER.innerHTML = ''
    }
    render(){
        const html = `<h1>Loading . . .</h1>`
        ROOT_SPINNER.innerHTML = html
    }
    
}
const spinnerPage = new Spinner()