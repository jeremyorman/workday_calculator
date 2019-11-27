const electron = require('electron')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const arrival = document.querySelector('#arrival').value
    const lunch = document.querySelector('#lunch').value
    
    let timeArray = arrival.split(":")
    
    let hour = timeArray[0]
    let workDuration = ((parseInt(timeArray[1]) + parseInt(lunch)) / 60) + 8
    let hours = Math.floor(workDuration)
    let minutes = Math.round((workDuration % 1) * 60)
    let period = "am"
    
    if (hour > 12) {
        period = "pm"
    }
    
    for (let i = 1; i <= hours; i++) {
        hour++
        if (hour > 12) {
            hour = 1
            period === "am" ? period = "pm" : period = "am"
        }
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes.toString()
    }
    
    let departTime = hour + ":" + minutes + " " + period
    
    let outputDiv = document.querySelector("#output")
    outputDiv.classList.remove("hidden")
    let output = document.querySelector("#output h2")
    output.textContent = "Go home at " + departTime
    
})