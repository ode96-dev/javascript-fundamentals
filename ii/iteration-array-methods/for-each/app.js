const socials = ['facebook', 'twitter', 'instagram', 'linkedin']

socials.forEach((social) => {
    console.log(social);
})

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr))

function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials)