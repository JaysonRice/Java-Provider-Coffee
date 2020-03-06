export const Contact = (contactObject) => {
    return `
        <p class=contact__info>
            ${contactObject.infoType}: ${contactObject.info}
        </p>
    `
}