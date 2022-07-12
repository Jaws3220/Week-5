class Player {
    constructor(name, role) {
    this.name = name;
    this.role = role;
    }

    describe() {
        return `${this.name} is ${this.role} for this instance.`
    }
}

class Guilds {
    constructor(name) {
        this.name = name;
        this.role = [];
    }

    addPlayer(player){
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add players, Argument is not a player: ${player}`);
        }
    }
    
    describe() {
        return `${this.name} has ${this.players.lenth} in the Guild.`
    }
}

class Menu {
    constructor() {
        this.Guilds = [];
        this.selectedGuilds = null;
    }

    start () {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createGuild();
                    break;
                case '2':
                    this.viewGuild();
                    break;
                case '3':
                    this.deleteGuild();
                    break;
                case '4':
                    this.displayGuilds();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        
        alert('Are you done?')
    }
    showMainMenuOptions() {
        return prompt(`
        0) Leave the Hall
        1) Create New Guild
        2) View Guild
        3) Delete Guild
        4) Display all Guilds
        -----------------------------
        `);
    }

    showGuildMenuOptions(guildInfo) {
        return prompt(`
        0) Return to the Hall
        1) Create your hero
        2) Delete your hero
        -----------------------------
        ${guildInfo}
        `)
    }
    displayGuilds() {
        let guildString = '';
        for (let i = 0; i < this.Guilds.length; i++) {
        guildString += i + ') ' + this.Guilds[i].name + '\n';
        }
        alert(guildString);
    }
    
    createGuild() {
        let name = prompt('Enter your Guilds Name:');
        this.Guilds.push(new Guilds(name));
    }

    viewGuild(){
        let index = prompt('Enter the realm number you wish to display:');
        if (index > -1 && index < this.Guilds.length) {
            this.selectedGuilds = this.Guilds[index];
            let description = "Guild Name: " + this.selectedGuilds.name + '\n';

            for (let i = 0; i < this.selectedGuilds.players.length; i++) {
               description += i + ') ' + this.selectedGuilds.players[i].name + ' - ' + this.selectedGuilds.players[i].role + '\n';
            }

            let selection = this.showGuildMenuOptions(description);
            switch (selection){
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    deleteGuild() {
        let index = prompt('Please enter the realm number of the guild you wish to desolve:');
        if (index > -1 && index < this.Guilds.length) {
            this.Guilds.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt('Enter your Heros Name:');
        let role = prompt('Enter role for new Hero:');
        this.selectedGuilds.players.push(new Player(name, role));
    }

    deletePlayer() {
        let index = prompt('Please enter the realm number of the Hero you wish scrap: ')
        if (index > -1 && index < this.selectedGuilds.players.length) {
            this.selectedGuilds.players.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();