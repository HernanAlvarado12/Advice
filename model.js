'use-strict'
const URLRooter = 'https://api.adviceslip.com/advice'


const transformData = async json => {
    const { slip: { id, advice } } = json
    document.getElementById('idMessage').textContent = `ADVICE # ${id}`
    document.getElementById('contentMessage').textContent = advice
    return json
}


const request = async () => {
    fetch(URLRooter)
        .then(response => response.json())
        .then(transformData)
        .catch(error => console.log(error))

}

document.addEventListener('click', event => {
    if(event.target.matches('span.w-6.h-6')) {
        request()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    request()
})






