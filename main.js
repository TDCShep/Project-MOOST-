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
//moost.addVoteOfConf()

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