const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    primaryColor: getStyle(html, "--primary-color"),
    primaryLightColor: getStyle(html, "--primary-light-color"),
    primaryDarkColor: getStyle(html, "--primary-dark-color"),
    secondaryColor: getStyle(html, "--secondary-color"),
    secondaryLightColor: getStyle(html, "--secondary-light-color"),
    fontColor: getStyle(html, "--font-color"),
    fontColorHover: getStyle(html, "--font-color-hover"),
    textColor: getStyle(html, "--text-color"),
    blueColor: getStyle(html, "--blue-color"),
    buttonColor: getStyle(html, "--button-color")
}

const darkMode = {
    primaryColor: "#0b1622",
    primaryLightColor: "#484848",
    primaryDarkColor: "#000000",
    secondaryColor: "#1a314a",
    secondaryLightColor: "#fff",
    fontColor: "#ffebee",
    fontColorHover: "#fff",
    textColor: "#000",
    blueColor: "#0a477c",
    buttonColor: "rgba(255, 255, 255, 0.5)"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})