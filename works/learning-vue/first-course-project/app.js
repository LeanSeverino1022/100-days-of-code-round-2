new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            var dmg = this.calculateDamage(3, 10);
            this.monsterHealth -= dmg;
            
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + dmg,
            });

            if(this.checkWin()){
                return;
            }

            this.monsterAttacks();
           
        },
        specialAttack: function() {
            var dmg = this.calculateDamage(10, 20);
            this.monsterHealth -=  dmg;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + dmg,
            });


            if(this.checkWin()){
                return;
            }

            this.monsterAttacks();
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10',
            });

            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttacks: function() {
            var dmg = this.calculateDamage(5, 12);
            this.playerHealth -= dmg;
            this.checkWin();

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + dmg,
            });
        },
        calculateDamage: function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }, 
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }                               
                return true;
            } else if (this.playerHealth <= 0) {
                if(confirm('You lost! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }          
                return true;
            }
            return false;
        },             
    },
    watch: {
        gameIsRunning: function(newValue) {
            if (newValue == false){
                this.turns = [];
            }
        }
    }
})


