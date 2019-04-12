var inquirer = require("inquirer");

function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.exp = 0;
    this.printstats = function () {

        console.log("Character: ", this.name);
        console.log("Profession: ", this.profession);
        console.log("Gender: ", this.gender);
        console.log("Age: ", this.age);
        console.log("Strength: ", this.strength);
        console.log("HP: ", this.hp);
        console.log("---------------------------------------");
    };
    this.isAlive = function () {
        if (this.hp < 0) {
            console.log("No, they dead");
        } else {
            console.log("Yeah, they still breathing");
        }
    };
    this.attack = function (character) {
        character.hp -= this.strength;
    };
    this.levelUp = function () {
        this.age++;
        this.strength += 5;
        this.hp += 25;
    };
}

function Enemy(name, strength, hp, exp) {
    this.name = name;
    this.strength = strength;
    this.hp = hp;
    this.exp = exp;
    this.attack = function () {
        character.hp -= this.strength;
    };
}

var enemies = [
    wolf = new Enemy("wolf", 40, 170, 30), blob = new Enemy("blob", 20, 300, 25)
];

var character;

inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "name"
    },

    {
        type: "list",
        message: "What is your class?",
        choices: ["warrior", "rogue", "mage"],
        name: "job"
    },

    {
        type: "list",
        message: "What is your gender?",
        choices: ["male", "female", "teletubby"],
        name: "gender"
    }
]).then(function (res) {
    switch (res.job) {
        case "warrior":
            character = new Character(res.name, res.job, res.gender, 34, 80, 300);
            action("What would you like to do?", "Go to tavern", "Adventure!", "Shopping trip", "Stare at the sun");
            break;

        case "rogue":
            character = new Character(res.name, res.job, res.gender, 24, 100, 240);
            action("What would you like to do?", "Go to tavern", "Adventure!", "Shopping trip", "Stare at the sun");
            break;

        case "mage":
            character = new Character(res.name, res.job, res.gender, 24, 60, 400);
            action("What would you like to do?", "Go to tavern", "Adventure!", "Shopping trip", "Stare at the sun");
            break;

        default:
            break;
    }
    character.printstats();
});

function randomEncounter() {
    var randomEnemy = Math.floor(Math.random() * enemies.length);
    var enemy = enemies[randomEnemy];

    console.log("A wild " + enemy + " appears!");

}

function intialAction() {

    inquirer.prompt([{
        message: "What would you like to do?",
        choices: ["Go to tavern", "Adventure!", "Shopping trip", "Stare at the sun"],
        type: "list",
        name: "action"
    }]).then(function (res) {

        switch (res.action) {
            case "Go to tavern":
                
                break;
        
            case "Adventure!":
                
                break;
        
            case "Shopping trip":
                
                break;
        
            case "Go to tavern":
                
                break;
        
            case "Stare at the sun":
                
                break;
        
            default:
                break;
        }
    });
}

function action(message, option1, option2, option3, option4) {

    inquirer.prompt([{
        message: message,
        choices: [option1, option2, option3, option4],
        type: "list",
        name: "action"
    }]).then(function (res) {

        switch (res.action) {
            case option1:
                
                break;
        
            case option2:
                
                break;
        
            case option3:
                
                break;
        
            case option4:
                
                break;
        
            default:
                break;
        }
    });
}

