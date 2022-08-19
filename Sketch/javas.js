const container = document.querySelector('#containerId')

// const div = document.createElement('div')
// div.classList.add('divClass')
// div.style.width = "90px"
// div.style.height = "90px"
// div.style.borderBlockColor = "black"
// div.style.backgroundColor = "black"

// var content = 

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div')
    div.classList.add('divClass')
    div.style.width = "90px"
    div.style.height = "90px"
    div.style.borderBlockColor = "black"
    div.style.backgroundColor = "blue"
    div.style.display = "inline-block"
    div.style.margin = "1px"

    container.appendChild(div)
}

// container.appendChild(div)

