const year = document.querySelectorAll(".year")
const month = document.querySelectorAll(".month")
const input = document.querySelector("input")

console.log(year)
console.log(month)

input.addEventListener("click", check)

function check(e) {
    console.log("Hello")
    const el = e.target
    if(el.checked == false) {
        year.forEach(item => {
            console.log(item)
            item.style.display = "block"
        })
        month.forEach(item => {
            item.style.display = "none"
        })
    }else {
        year.forEach(item => {
            console.log(item)
            item.style.display = "none"
        })
        month.forEach(item => {
            item.style.display = "block"
        })
    }
}























