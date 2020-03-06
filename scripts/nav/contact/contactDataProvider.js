const contactInfo = [
    {
        id: 1,
        info: "javaprovider@java.com",
        infoType: "Email"
    },
    {
        id: 2,
        info: "6145874456",
        infoType: "Phone Number"
    },
    {
        id: 3,
        info: "@javasip",
        infoType: "Instagram Handle"
    }
]

export const useContactInfo = () => {
    return contactInfo.slice()
}