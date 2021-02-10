var NameFromVictim = "";


var person = ["John", "Doe", 46];
var RandomInsultMainPart = [
    " is so braindead that he wants to look like", 
    " is so stupid that he will belive that ", 
    " must be so ugly even your new friends would describe you"
];
var RandomInsultComparison = [
    " like the lower half of a monkey", 
    " like the retardet kid in class", 
    " like having a talk with your worst enemy", 
    " like morning breath", 
    " like you've got a great face for footporn", 
    " like you still don't know what taste is"
];

var CompletlyRandom = [
    "the reason God created the middle finger",
    "is more disappointing than an unsalted pretzel",
    "is so annoying, he makes his Happy Meal cry",
    "hold still. I’m trying to imagine you with personality",
    "face makes onions cry",
    "teeth were so bad she could eat an apple through a fence",
    "face is just fine but we’ll have to put a bag over that personality",
    "bring everyone so much joy…when you leave the room",
    "is the human version of period cramps",
    "is like a cloud. When you disappear it’s a beautiful day",
    "bring everyone so much joy! You know, when you leave the room. But, still",
    "has an entire life to be an idiot. Why not take today off?"    
];

var InsultStarter
var InsultMainPart
var InsultComparison

var RandomVar = 1;

/* Get an array part with those [0] = Erste Stelle
Math.floor(Math.random() * 10) + 1;  === returns a random integer from 1 to 10
Math.floor(Math.random() * 100);     === returns a random integer from 0 to 99
*/

function RandomValues() {
    InsultMainPart = RandomInsultMainPart[Math.floor(Math.random() * 3)];
    InsultComparison = RandomInsultComparison[Math.floor(Math.random() * 4)];
    return InsultStarter, InsultMainPart, InsultComparison
}


function submit() {
    RandomValues()
    NameFromVictim = document.getElementById("suche").value
    RandomVar = Math.floor(Math.random() * 2)
    console.log(RandomVar)

    if (RandomVar <= 0) {
        NameFromVictim = NameFromVictim + InsultMainPart + InsultComparison        
    } else {
        NameFromVictim = NameFromVictim + " " + CompletlyRandom[Math.floor(Math.random() * 13)]
    }

    
    console.log(NameFromVictim)
    document.getElementById("TextFeld"). innerHTML = NameFromVictim
}