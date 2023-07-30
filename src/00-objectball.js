function gameObject() {
    const teamStats = {
        home: {
            teamName:"Brooklyn Nets",
            colors: [
                "Black",
                "White",
            ],
            players:{
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1",
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7",
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15",
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5",
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1",
                },
            }
        },
        away: {
            teamName:"Charlotte Hornets",
            colors: [
                "Turquoise",
                "Purple",
            ],
            players:{
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2",
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10",
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5",
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0",
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12",
                },
            },
        },
    };
    return teamStats;
};
console.log(gameObject());


function numPointsScored(name) {
    let object = gameObject();
    return object["home"]["players"][`${name}`]["points"];
};
// console.log(numPointsScored("Jason Terry"));

function shoeSize(team, name){
    let object = gameObject();
    return object[`${team}`]["players"][`${name}`]["shoe"];
};
// console.log(shoeSize("away", "DeSagna Diop"));

function teamColors(team) {
    let object = gameObject();
    return object[`${team}`]["colors"]
};
// console.log(teamColors("away"));

//BELOW: functions that are used in teamNames():
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
};
// console.log(homeTeamName());

function awayTeamName() {
    let object = gameObject();
    return object["away"]["teamName"];
};
// console.log(awayTeamName());
//ABOVE: functions that are used in teamNames().

function teamNames(){
    let object = [homeTeamName(), awayTeamName()];
    return object;
};
// console.log(teamNames());

// function playerNumbers(teamName){
//     if(teamName === "Brooklyn Nets"){
//         for(const number in gameObject());
//         return {"number"};
//     } else {
//         for(const key in gameObject().away.players);
//         return Object.values("number");
//     };
// };
// console.log(playerNumbers("Brooklyn Nets"));


function playerNumbers(teamNameToCheck){
    const game = gameObject();
    const jerseys = [];
    for(let team in game){
        if(teamNameToCheck === game[team]["teamStats"]){
            for(let player in game[team].players){
                jerseys.push(game[team].players[player].number);
            }
        }
    }
    return jerseys;
}
console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playersNameToCheck){
    const game = gameObject();
    const stats = {};
    for (let somebody in game){
        if(playersNameToCheck === game[somebody]["teamStats"]){
            for(let yearStats in game[team].players){
                stats.push(game[somebody].players[yearStats]);
            }
        }
    }
};
console.log(playerStats("Alan Anderson"));
