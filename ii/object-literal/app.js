let x;

const person = {
    name: 'Dev Ode',
    age: 27,
    isAdmin: true,
    projects: {
        websites: [
            'somewebsite.com',
            'anotherwebsite.com'
        ],
        mobile: [
            'someapplication',
            'anotherapplication'
        ],
        desktop: [
            'somedesktop',
            'anotherdesktop'
        ],
        pos: [
            'somepos',
            'anotherpos'
        ]
    }
}

x = person.name
x = person['age']
x = person.projects.websites[0]

delete person.projects.desktop

person.greet = function () {
    console.log('greetings my friend')
}

person.greet()

x = person

console.log(x);