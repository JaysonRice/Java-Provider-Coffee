import { BusinessName } from "./BusinessName.js"

const contentTarget = document.querySelector(".java__header")

export const Header = () => {
    contentTarget.innerHTML = `
    ${BusinessName()}
    `
}