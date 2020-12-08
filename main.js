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
        activity: 'Try going for a run.',
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
    _rhetoricalQ: ['What is the worst that can happen if you did and what is the best that can happen?'],

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
//moost.addVoteOfConf( , );
moost.addVoteOfConf('Do not let what you cannot do interfere with what you can do.', 'John Wooden');
moost.addVoteOfConf('Although the world is full of suffering, it is also full of the overcoming of it.', 'Helen Keller');
moost.addVoteOfConf('Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain.', 'Unknown');
moost.addVoteOfConf('A positive attitude gives you power over your circumstances instead of your circumstances having power over you.', ' Joyce Meyer');
moost.addVoteOfConf('Experience is not what happens to you, it is what you do with what happens to you.' , 'Aldous Huxley');
moost.addVoteOfConf('Do what you can, with what you have, where you are.', 'Theodore Roosevelt');
moost.addVoteOfConf('Life is tough, but so are you', 'Unknown');
moost.addVoteOfConf('Every day is a fresh start', 'Unknown');
moost.addVoteOfConf('Trust yourself! You can do more than you think', 'Unknown');
moost.addVoteOfConf('Don’t count the days, make the days count', 'Muhammad Ali');
moost.addVoteOfConf('Have faith. Better days are ahead.', 'Unknown');
moost.addVoteOfConf('Soon, when all is well, you will look back on this period of our life and be glad you never gave up.');


//Add MOOST Activity
//moost.addActivity();
moost.addActivity('Force yourself to smile or laugh out loud.', 'The act of smiling releases endorphins that are responsible for making us happy, and can also lower stress levels.');
moost.addActivity('Try going for a walk outside, preferably in some green space.' , 'Exercise produces endorphins and enhances the production of serotonin. Both of these chemicals help with improving your mood.');
moost.addActivity('Try sitting down and reading a book.','Reading has been shown to put our brains into a state similar to meditation, and it brings the same health benefits of deep relaxation and inner calm. Regular readers sleep better, have lower stress levels, higher self-esteem, and lower rates of depression than non-readers.');
moost.addActivity('Try drawing or just doodling while listening to music.', 'The immersive nature of being creative can help you to focus your mind and control your thoughts – much like the practice of meditation.');
moost.addActivity('Try playing an instrument.', 'The immersive nature of being creative can help you to focus your mind and control your thoughts – much like the practice of meditation.');
moost.addActivity('Try phoning a friend or family member for a catchup.', 'Studies have shown that people with close friendships over their teenage years have a lower rate of depression or anxiety later in life, whilst adults who are socially active and proioritize social goals are associated with higher late-life satisfaction.');
moost.addActivity('Try singing our loud to uplifting music.', 'Studies have shown that the act of singing out loud can reduce anxiety through the act of controlling your breathing. Singing has been shown to slow your heart rate and release good endorphins that can raise your mood.');
//moost.addActivity()

//Add Rhetorical Questions
//moost.addRhetoricalQ();
moost.addRhetoricalQ('Why exactly do you not want to do it? Is this a good reason or are you being lazy?');
moost.addRhetoricalQ('Do you have any valid reason to believe that trying this would not help you or are you being lazy?');
moost.addRhetoricalQ('Is the alternative likely to give you a better sense of satisfaction in the long run?');
moost.addRhetoricalQ('What have you got to lose compared to how much you could gain by being in a happier place mentally?');


//Initiation Sequences
moost.generateMOOST();

console.log('EVERYONE has the right to be happy, but everyone is also responsible for their own happiness.');





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