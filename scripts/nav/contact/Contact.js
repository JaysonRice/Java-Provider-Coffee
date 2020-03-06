export const Contact = (contactObject) => {
    return `
        <p>
            ${contactObject.infoType}:
        </p>
        <p>
            ${contactObject.info}
        </p>
    `
}