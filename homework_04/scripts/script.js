// Task 1
const assign = (sourceObj, ...params) => {
    return params.reduce((source, current) => {        
        for (var key in current) {
            source[key] = current[key]
        }
        return source;
    }, sourceObj)
}

// Task 2
function Player(store) {
    this.store = store;

    this._totalHitpoints = this.store.hitpoints;

    this.getHitpoints = function() {
        return this.store.hitpoints;
    }

    this.setHitpoints = function(hitpoints) {
        this.store.hitpoints = (hitpoints > 0) ? hitpoints : 0;
    }

    this.getTotalHitpoints = function() {
        return this._totalHitpoints;
    }

    this.setTotalHitpoints = function(totalHitpoints) {
        this._totalHitpoints = (totalHitpoints > 0) ? totalHitpoints : 0 ;
    }

    this.getAttack = function() {
        return this.store.attack;
    }

    this.setAttack = function(attack) {
        this.store.attack = attack;
    }

    this.isAlive = function() {
        return this.getHitpoints() > 0;
    }
}

Player.prototype.fight = function(opponent) {

    opponent.setHitpoints( opponent.getHitpoints() - this.getAttack() ) 

    if (!opponent.isAlive()) {
        console.log("Win, you enemy died!:)"); 
    }
}


function Champion() {
    Player.apply(this, arguments)

    this._blockNextAttack = false;

    this.setBlockAttack = function(blockNextAttack = false) {
        this._blockNextAttack = blockNextAttack;
    }

    this.blockAttack = function() {
        return this._blockNextAttack;
    }

    this.heal = function() {
        let newTotalHitpoints = this.getHitpoints() + Champion.HEAL_HITPOINTS;
        let totalHitpoints = this.getTotalHitpoints();
        
        this.setHitpoints( newTotalHitpoints > totalHitpoints ? totalHitpoints : newTotalHitpoints );
    }

    this.defence = function() {
        this.setBlockAttack(true);
        this.setTotalHitpoints( this.getTotalHitpoints() + Champion.DEFENCE_TOTALHITPOINTS)
    }
}

Champion.HEAL_HITPOINTS = 5;
Champion.DEFENCE_TOTALHITPOINTS = 5;
Champion.FIGHT_ATTACK = 1;
Champion.prototype = Object.create(Player.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.fight = function() {
    Player.prototype.fight.apply(this, arguments);
    let opponent = arguments[0];

    if (!opponent.isAlive()) {
        this.setAttack( this.getAttack() + Champion.FIGHT_ATTACK );
    }
}

function Monster() {
    Player.apply(this, arguments)

    this._enrageAttack = 0;

    this.enrage = function() {
        this._enrageAttack = Monster.ENRAGE_ATTACK;
    }
    
    this.fury = function() {
        if (this.getTotalHitpoints() > Monster.FURY_HITPOINTS && this.getHitpoints() > Monster.FURY_HITPOINTS) {
            this.setHitpoints( this.getHitpoints() -  Monster.FURY_HITPOINTS)
            this.setTotalHitpoints( this.getTotalHitpoints() -  Monster.FURY_HITPOINTS)
            this.setAttack( this.getAttack() + Monster.FURY_ATTACK )
        }
    }    
}

Monster.ENRAGE_ATTACK = 2;
Monster.FURY_HITPOINTS = 5;
Monster.FURY_ATTACK = 2;
Monster.WIN_PERCENT_TO_HITPOINTS_FROM_TOTALHITPOINTS_OPPONNENT = 25;
Monster.WIN_PERCENT_TO_TOTALHITPOINTS_FROM_TOTALHITPOINTS_OPPONNENT = 10;
Monster.prototype = Object.create(Player.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.fight = function() {

    let opponent = arguments[0];

    if (!opponent.blockAttack()) {
        Player.prototype.fight.apply(this, arguments);

        if (!opponent.isAlive()) {
            let hitpointsFromOpponent = Math.floor( opponent.getTotalHitpoints() * Monster.WIN_PERCENT_TO_HITPOINTS_FROM_TOTALHITPOINTS_OPPONNENT / 100);
            let totalHitpointsFromOpponent = Math.floor( opponent.getTotalHitpoints() * Monster.WIN_PERCENT_TO_TOTALHITPOINTS_FROM_TOTALHITPOINTS_OPPONNENT / 100) ;
            this.setHitpoints( this.getHitpoints() + hitpointsFromOpponent);
            this.setTotalHitpoints( this.getTotalHitpoints() + totalHitpointsFromOpponent);
        }

        if (this._enrageAttack > 0) {
            Player.prototype.fight.apply(this, arguments);
        }

        opponent.setBlockAttack();
    }

    if (this._enrageAttack > 0) {
        this._enrageAttack--;
    }
}


// Task 1
var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = assign({}, defaults, options);


//Task 2
var hunter = new Champion({name: "Rexxar", attack: 10, hitpoints: 60});
var beast = new Monster({name: "King Krush", attack: 8, hitpoints: 80});

hunter.fight(beast);
beast.getHitpoints();
beast.enrage();
hunter.fight(beast);
beast.getHitpoints();
beast.fight(hunter);
hunter.getHitpoints();
hunter.fight(beast);
beast.getHitpoints();
hunter.fight(beast);
beast.getHitpoints();
hunter.fight(beast);
beast.getHitpoints();
hunter.fight(beast);
beast.getHitpoints();
hunter.fight(beast);
beast.getHitpoints();
hunter.fight(beast);
hunter.heal();
console.log(hunter.store, beast.store)
