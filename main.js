//Title
console.log("MOOST!");

//Moost Object
const moost = {

    //Random Number Generator Helper Function
    randomise: function (array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    },




    //Vote of Confidence
    _votesOfConf: [
        {
        quote: 'Either you run the day or the day runs you.',
        source: 'Jim Rohn'
        },
        {
        quote: 'The more you feed your mind with positive thoughts, the more you can attract great things into your life.',
        source: 'Roy T. Bennett'
        }        
    ],
    
    get votesOfConf(){
        return this._votesOfConf;
    },


    addVoteOfConf (quote, source) {
        let voteOfConf = {
             quote: quote,
             source: source
            };          

    
        this._votesOfConf.push(voteOfConf);
    },
/*
    getRandomElement: function () {
        const 
    },
*/
    //Activity Suggestion Object + Scientific Backing
    _activitySuggestion: [
        {
        activity: 'Go for a run.',
        scientificBacking: 'Exercise produces endorphins and enhances the production of serotonin. Both of these chemicals help with improving your mood.'
        }
    ],

    get activitySuggestion () {
        return this._activitySuggestion;
    },

    addActivity (activity, science) {
        let newActivity = {
            activity: activity,
            scientificBacking: science
        };
        return this._activitySuggestion.push(newActivity);
    },

    //Rhetorical Question
    _rhetoricalQ: ['What is the worst that can happen if you did and what is the best?'],

    get rhetoricalQ () {
        return this._rhetoricalQ;
    },

    addRhetoricalQ (question) {
        let newQuestion = question;
        return this._rhetoricalQ.push(newQuestion);
    },
   
    generateMOOST: function () {
        const voteOfConf = this.randomise(this._votesOfConf);
        const activitySuggestion = this.randomise(this._activitySuggestion);
        const rhetoricalQ = this.randomise(this._rhetoricalQ);

        console.log(voteOfConf.quote + ' - ' + voteOfConf.source);
        console.log(activitySuggestion.activity);
        console.log(activitySuggestion.scientificBacking);
        console.log(rhetoricalQ);
    }

};

//Add Votes of Confidence
//moost.addVoteOfConf( , )
moost.addVoteOfConf('Do not let what you cannot do interfere with what you can do.', 'John Wooden')
moost.addVoteOfConf('Although the world is full of suffering, it is also full of the overcoming of it.', 'Helen Keller')
moost.addVoteOfConf('Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain.', 'Unknown')
moost.addVoteOfConf('A positive attitude gives you power over your circumstances instead of your circumstances having power over you.', ' Joyce Meyer')
moost.addVoteOfConf('Experience is not what happens to you, it is what you do with what happens to you.' , 'Aldous Huxley' )
moost.addVoteOfConf('Do what you can, with what you have, where you are.', 'Theodore Roosevelt')
moost.addVoteOfConf('Life is tough, but so are you', 'Unknown')
moost.addVoteOfConf('Every day is a fresh start', 'Unknown')
moost.addVoteOfConf('Trust yourself! You can do more than you think', 'Unknown')
moost.addVoteOfConf('Don’t count the days, make the days count', 'Muhammad Ali')
moost.addVoteOfConf('Have faith. Better days are ahead.', 'Unknown')
moost.addVoteOfConf('Soon, when all is well, you will look back on this period of our life and be glad you never gave up.' )


//Add MOOST Activity
//moost.addActivity()

//Add Rhetorical Questions
//moost.addRhetoricalQ()


//Initiation Sequences
moost.generateMOOST();






//Tests

/*
//Test 1: Randomiser Function
const testArray = ['one', 'two', 'three', 'four', 'five'];
const randomiseFunctionTest = moost.randomise(testArray);
console.log(randomiseFunctionTest);
*/
/*
// Test 2: Votes of Confidence Object
moost.addVoteOfConf('quote', 'me');
console.log(moost.votesOfConf)
*/
/*
//Test 3: Activity Function
moost.addActivity('Force yourself to smile for 2 minutes solid.', 'The act of smiling releases endorphins that can help to pick up your mood.');
console.log(moost.activitySuggestion);
*/
/*
//Test 4: Rhetorical Question Function
moost.addRhetoricalQ('If the worst happens, will it still matter in a year?');
console.log(moost.rhetoricalQ);
*/
/*
//Test 4: Rhetorical Question Function
moost.addRhetoricalQ('Who even cares???!')
console.log(moost.rhetoricalQ);
*/
/*
//Test 5: GenerateMoost Function
console.log(moost.generateMOOST());
*/