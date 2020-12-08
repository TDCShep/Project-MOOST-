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
        quote: 'You can do this',
        source: 'Me'
        }
    ],
    
    get votesOfConf(){
        return this._votesOfConf;
    },

/*
    addVoteOfConf (quote, source) {
        let voteOfConf = {
             quote: quote,
             source: source
            },           

    
        this._votesOfConf.push(voteOfConf);
    }
*/

    //Activity Suggestion Object + Scientific Backing





    //Rhetorical Question



};

//Initiation Sequences







//Tests

/*
//Test 1: Randomiser Function
const testArray = ['one', 'two', 'three', 'four', 'five'];
const randomiseFunctionTest = moost.randomise(testArray);
console.log(randomiseFunctionTest);
*/
///*
// Test 2: Votes of Confidence Object
//console.log(moost.votesOfConf)
moost.addVoteOfConf('quote', 'me');