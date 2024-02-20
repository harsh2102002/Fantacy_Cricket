const players = [
  {
    name: "Virat Kohli",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Jasprit Bumrah",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Rohit Sharma",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Yuzvendra Chahal",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Mohammed Shami",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Suryakumar Yadav",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Prasidh Krishna",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Hardik Pandya",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Shikhar Dhawan",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Ravindra Jadeja",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Arshdeep Singh",
    playingRole: "Bowler",
    credit: 6,
  },
  {
    name: "Ravichandran Ashwin",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Deepak Chahar",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Ruturaj Gaikwad",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Deepak Hooda",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ishan Kishan",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Shreyas Iyer",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Venkatesh Iyer",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Dinesh Karthik",
    playingRole: "Wicketkeeper",
    credit: 11,
  },
  {
    name: "Kuldeep Yadav",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Bhuvneshwar Kumar",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Mohammed Siraj",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Devdutt Padikkal",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Rishabh Pant",
    playingRole: "Wicketkeeper",
    credit: 10,
  },
  {
    name: "Moeen Ali",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "James Anderson",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Jonny Bairstow",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Sam Billings",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Stuart Broad",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Rory Burns",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Jos Buttler",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Zak Crawley",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Sam Curran",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Tom Curran",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Chris Jordan",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Jack Leach",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Liam Livingstone",
    playingRole: "Batsman",
    credit: 12,
  },
  {
    name: "Reece Topley",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "David Willey",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Joe Root",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ben Stokes",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Pat Cummins",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Aaron Finch",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Cameron Green",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Josh Hazlewood",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Travis Head",
    playingRole: "Wicketkeeper",
    credit: 8,
  },
  {
    name: "Usman Khawaja",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Marnus Labuschagne",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Nathan Lyon",
    playingRole: "Bowler",
    credit: 9,
  },
];
                                            //Toss and Player Selection

const toss = document.getElementById("toss");
const ForPlayerAndTeamSelection = document.getElementById(
  "ForPlayerAndTeamSelection"
);
console.log(players);

let game = [];
let team1 = {};
let team2 = {};
let teamOf11Player = document.getElementById("teamOf11Player");

toss.addEventListener("click", () => {
  let tem1 = document.getElementById("team1").value;
  let tem2 = document.getElementById("team2").value;
  let tossResult = Math.floor(Math.random() * 2);
  printToss.innerText = "";

  if (document.getElementById("team1").value == "" || document.getElementById("team2").value == "") {
    alert("please name of your team");
    return
  } else if (document.getElementById("team1").value.toLowerCase() === document.getElementById("team2").value.toLowerCase()) {
      alert( "Team name should be different from each other");
      return ;
  } else if(document.getElementById("team1").value.trim() === "" || document.getElementById("team2").value.trim() === ""){
      alert("No space are count as name !!!");
      return;
  } else 
  {
    if (tossResult == 1) 
    {
      team1.teamName = tem1;
      team2.teamName = tem2;
      team1.TossWin = "Win";
      team2.TossWin = "Loss";
    } 
    else if (tossResult == 0) 
    {
    
      team1.teamName = tem2;
      team2.teamName = tem1;
      team1.TossWin = "Win";
      team2.TossWin = "Loss";

    }
    printToss.innerText = `WHOOOREEE!! ${team1.teamName}  HAS WON THE TOSS!!! AND CHOOSE TO BAT`;
      game.push(team1);
      game.push(team2);
      game[0].player = [];
      game[1].player = [];
      game[0].Captian = {};
      game[1].Captian = {};
      game[0].viceCaptian={};
      game[1].viceCaptian={};
      game[0].Score = 0;
      game[1].Score = 0;
      game[0].FP = 0;
      game[1].FP = 0;
      game[1].wicket = 0;
      game[0].wicket = 0;
      toss.disabled = true;

      ForPlayerAndTeamSelection.style.display = "block";
      alert(`5 Basic Rules :\n1) Number of Batsman and Bowler should not be more than 5 each \n\n2) Wicketkeeper should only be 1 \n\n3) It's a 5 over cricket match \n\n4) Click on Play button to throw a ball \n\n5) 1 Bowler can only throw 6 balls`)
  }
  console.log(game);
  teamOf11Player.innerHTML = `${game[0].teamName} : This team should select playes`;
});
let forCaptain = document.getElementById("forCaptain");

function data() 
{
  let uniqueIdForPlayer = 0;
  for (const obj of players) {
    bat.innerHTML += `<p>${obj.name},${obj.playingRole},${obj.credit
    }<button id=${uniqueIdForPlayer++} onclick="finalTeamSelection()">select</button></p>`;
  }
}
  data();
  let BatsMan = 1;
  let BowLer = 1;
  let WicketKeeper = 1;
  let fantacyScore = 100;
  let teamMakingCompleatOrNot = 0;   
  let capSelection = document.getElementById("capSelection");     
  let vicCapSelection = document.getElementById("vicCapSelection");     
  let showCapAndVicecap = document.getElementById("showCapAndVicecap");    
  let Letsgo = document.getElementById("Letsgo");
  Letsgo.disabled = true;
  let countForLetsgo = 0;

function TeamMaking() 
{
  if (countForLetsgo == 0) 
  {
     if(Object.keys(game[0].viceCaptian).length===0)
    {
      alert(`Please select Vice captain for team ${game[0].teamName}`);
      return false
    }
    else if (game[0].viceCaptian.name === game[0].Captian.name) 
    {
      alert("Name of captain and Vice-captain should not same");
      return false;
    } else if (game[0].player.length < 11) 
    {
      alert(`Please select 11 players for team ${game[0].teamName}`);
      return false;
    } else 
    {
      teamOf11Player.innerHTML = `${game[1].teamName} : This team should select playes`;
    }
  }
  if (countForLetsgo >= 1) 
  {
    if(Object.keys(game[1].viceCaptian).length===0)
    {
      alert(`Please select Vice captain for team ${game[1].teamName}`);
      return false
    }
    else if (game[1].viceCaptian.name === game[1].Captian.name) 
    {
      alert("Name of captain and Vice-captain should not same");

      return false;
    } else if (game[1].player.length < 11) 
    {
      alert(`Please select 11 players for team ${game[1].teamName}`);
      return false;
    } 
    Letsgo.disabled = false;
  }
      teamMakingCompleatOrNot = 1;
      BatsMan = 1;
      BowLer = 1;
      WicketKeeper = 1;
      fantacyScore = 100;
      bat.innerHTML = "";
      fantasyPiont.innerText = "";
      showCapAndVicecap.innerHTML = "";
      data();
      capSelection.innerText = "";
      vicCapSelection.innerText = "";
      countForLetsgo++;
}

let selectOrRemoveCapViceCapFromTeam1;  
let selectOrRemoveCapViceCapFromTeam2;   

function finalTeamSelection() 
{
  let help = event.target.previousSibling.data;

  let splitPlayer = help.split(",");
  let playerrole = splitPlayer[1];

  console.log(playerrole);

  let myElem = +event.target.id;

  if (game[teamMakingCompleatOrNot].player.length > 10) 
  {
    alert("your 11 player's are selected ");
    return;
  }
  if (playerrole == "Batsman") 
  {
    if (BatsMan == 6) 
    {
      alert("You have selected max Batman");
      return;
    } else 
    {
      if (fantacyScore - players[myElem].credit < 0) 
      {
        alert("You use your credits please adjust player");
        return;
      } else 
      {
        BatsMan += 1;
      }
    }
  }

  if (playerrole == "Bowler") 
  {
    if (BowLer == 6) 
    {
      alert("You have selected max Bower");

      return;
    } else 
    {
      if (fantacyScore - players[myElem].credit < 0) 
      {
        alert("You use your credits please adjust player");
        return;
      } else 
      {
        BowLer += 1;
      }
    }
  }

  if (playerrole == "Wicketkeeper") 
  {
    if (WicketKeeper == 2) 
    {
      console.log(WicketKeeper);
      alert("You have selected max WicketKeeper ");
      return;
    } else 
    {
      if (fantacyScore - players[myElem].credit < 0) 
      {
        alert("You use your credits please adjust player");
        return;
      } else 
      {
        WicketKeeper += 1;
      }
    }
  }

  if (fantacyScore - players[myElem].credit < 0) {
    alert("You use your credits please adjust player");
    return false;
  } else {
    fantacyScore = fantacyScore - players[myElem].credit;
    fantasyPiont.innerText = `credit : ${fantacyScore}`;
  }
  players[myElem].FP = 0;
  players[myElem].Score = 0;
  players[myElem].wicket = 0;
  players[myElem].Ball = 0;
  game[teamMakingCompleatOrNot].player.push(players[myElem]);
  console.log(game[teamMakingCompleatOrNot].player);

  event.target.parentElement.style.display = "none";

  for (let i = 0; i < players.length; i++) {
    
    for (let j = 0; j < game[teamMakingCompleatOrNot].player.length; j++) {
      if (players[i].name === game[teamMakingCompleatOrNot].player[j].name) {
        players.splice(i, 1);
      }
    }
  }

  showCapAndVicecap.innerHTML = "";

  if (teamMakingCompleatOrNot == 0) {
    selectOrRemoveCapViceCapFromTeam1 = function () {
      let uniqueIdForCaptain1 = 0;
      let uniqueIdForviceCaptain1 = 0;
      let remove = 0;
      teamOf11Player.innerHTML = `${game[0].teamName} : This team should select playes`;
      
      for (let obj of game[teamMakingCompleatOrNot].player) {
        showCapAndVicecap.innerHTML += `<p>${obj.name},${obj.playingRole},${obj.credit}<button id=${uniqueIdForCaptain1++} onclick="Captain1()">Captain</button><button id=${uniqueIdForviceCaptain1++} onclick="viceCaptian1()">Vice Captain</button><button id=${remove++} onclick="removePlayerFromTeam1()">remove</button></p>`;
      }
    };
    if(Object.keys(game[0].Captian).length===0){
      forCaptain.disabled = true;}
      selectOrRemoveCapViceCapFromTeam1();
  } else {
    selectOrRemoveCapViceCapFromTeam2 = function () {
      let uniqueIdForCaptain2 = 0;
      let uniqueIdForviceCaptian2 = 0;
      let remove = 0;
      teamOf11Player.innerHTML = `${game[1].teamName} : This team should select playes`;

      for (let obj of game[teamMakingCompleatOrNot].player) {
        showCapAndVicecap.innerHTML += `<p>${obj.name},${obj.playingRole},${
          obj.credit
        }<button id=${uniqueIdForCaptain2++} onclick="Captain2()">Captain </button><button id=${uniqueIdForviceCaptian2++} onclick="viceCaptian2()">Vice Captain</button><button id=${remove++} onclick="removePlayerFromTeam2()">remove</button></p>`;
      }
    };
    if(Object.keys(game[1].Captian).length===0){
      forCaptain.disabled = true;
    }
    selectOrRemoveCapViceCapFromTeam2();
  }
  bat.innerHTML = ""; 
  data();
}

function removePlayerFromTeam1() {
  let help = event.target.parentElement.firstChild.data;

  let splitPlayer = help.split(",");
  let playerrole = splitPlayer[1];
  let cerdit = +splitPlayer[2];
  let Cpremove=splitPlayer[0];
  Myelement = +event.target.id;
  console.log(Myelement);

  if (playerrole === "Batsman") {
    BatsMan -= 1;
  }
  if (playerrole === "Bowler") {
    BowLer -= 1;
  }
  if (playerrole === "Wicketkeeper") {
    WicketKeeper -= 1;
  }
  if( Cpremove ===game[0].Captian.name){
    game[0].Captian={};
    capSelection.innerText="";
    if(Cpremove==game[0].viceCaptian.name){
    game[0].viceCaptian={};
    vicCapSelection.innerText="";
    }
    }
    else if(Cpremove==game[0].viceCaptian.name){
    game[0].viceCaptian={};
    vicCapSelection.innerText="";
    }
  
  fantacyScore += cerdit;
  players.push(game[0].player[Myelement]);

  game[0].player.splice(Myelement, 1);
  event.target.parentElement.style.display = "none";
  fantasyPiont.innerText = `credit : ${fantacyScore}`;
  showCapAndVicecap.innerHTML = "";
  selectOrRemoveCapViceCapFromTeam1();
  data();
}

function removePlayerFromTeam2() {
  let help = event.target.parentElement.firstChild.data;
  let splitPlayer = help.split(",");
  let playerrole = splitPlayer[1];
  let Cpremove =splitPlayer[0];
  Myelement = +event.target.id;

  if (playerrole === "Batsman") {
    BatsMan -= 1;
  }
  if (playerrole === "Bowler") {
    BowLer -= 1;
  }
  if (playerrole === "Wicketkeeper") {
    WicketKeeper -= 1;
  }
  if( Cpremove ===game[1].Captian.name){
    game[1].Captian={};
    capSelection.innerText="";
    if(Cpremove==game[1].viceCaptian.name){
    game[1].viceCaptian={};
    vicCapSelection.innerText="";
    }
    }
    else if(Cpremove==game[1].viceCaptian.name){
    game[1].viceCaptian={};
    vicCapSelection.innerText="";
    }
  let cerdit = +splitPlayer[2];
  fantacyScore += cerdit;
  players.push(game[1].player[Myelement]);

  game[1].player.splice(Myelement, 1);
  event.target.parentElement.style.display = "none";
  fantasyPiont.innerText = `credit : ${fantacyScore}`;
  showCapAndVicecap.innerHTML = "";
  selectOrRemoveCapViceCapFromTeam2();
  data();
}

function Captain1() {
  Myelement = +event.target.id;
  console.log(Myelement);
  game[0].Captian = game[0].player[Myelement];
  capSelection.innerText = `Captain : ${game[0].Captian.name} `;
  if (Object.keys(game[0]).length == 8) {
    forCaptain.disabled = false;
  }
  
}

function viceCaptian1() {
  Myelement = +event.target.id;
  console.log(Myelement);
  game[0].viceCaptian = game[0].player[Myelement];
  vicCapSelection.innerText = `Vice Captian : ${game[0].player[Myelement].name} `;
  if (Object.keys(game[0]).length == 8) {
  }
}

function Captain2() {
  Myelement = +event.target.id;
  console.log(Myelement);
  game[1].Captian = game[1].player[Myelement];
  capSelection.innerText = `Captain : ${game[1].Captian.name} `;
  if (Object.keys(game[1]).length == 8) {
    forCaptain.disabled = false;
  }
}

function viceCaptian2() {
  Myelement = +event.target.id;
  console.log(Myelement);
  game[1].viceCaptian = game[1].player[Myelement];
  vicCapSelection.innerText = `Vice Captian : ${game[1].viceCaptian.name} `;
  if (Object.keys(game[1]).length == 8) {
  }
}

let tossDiv = document.getElementById("tossDiv");
let ScoreView = document.getElementById("ScoreView");
function none() {
  tossDiv.style.display = "none";
  ScoreView.style.display = "flex";
}

                                        //Game

let BowlerFromTeam = [];
let teamPoint = document.getElementById("teamPoint");
let LiveScore = document.getElementById("LiveScore");
let winner = document.getElementById("winner");
let team1score = document.getElementById("team1score");
let team2score = document.getElementById("team2score");
let team1Name = document.getElementById("team1Name");
let team2Name = document.getElementById("team2Name");
let play = 0;
let x = 0; // for first team
let c = 0; // player count for frist team

let y = 1; // for second team
let b = 0; // player count for second team
let Shot = "";
let ball = 0;
let over = 0;
let inning = 0;
let flag = true;
let wicket = 0;
let ViewScoreBoard = false;
let win;
let ballPlayed = 0;
let InningAlert = 0;
let NotAlertingOver = 0;

function delayedButtonClick() 
{
  document.getElementById("hit").disabled = true;
  setTimeout(function() {
      document.getElementById("hit").disabled = false;
      Start();
  }, 2000);
}

function Start() 
{
  let Random = Math.floor(Math.random() * 7);
  var matchBowler = game[y].player.filter(
    (item) => item.playingRole === "Bowler"
  );
  console.log(matchBowler);
  let date = new Date();
  const DateAndTime = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  if (ball > 5) {
    if (NotAlertingOver < 4) {
      alert("New over started");
    }
    NotAlertingOver++;
    wicket = 0;
    ball = 0;
    ball++;
    b++;
    over++;
  } else {
    ball++;
  }
  if (over > 4) {
    LiveScore.innerText = "";
    x = 1; // for first team
    c = 0; // player count for frist team
    y = 0; // for second team
    b = 0;
    if (InningAlert == 0) {
      alert("Next Inning started");
    }
    InningAlert++;
    NotAlertingOver = 0;
    inning++;
    ball = 0;
    ball++;
    over = 0;
  }
  if (inning > 1) {
    if (game[0].FP > game[1].FP) {
      alert(`${game[0].teamName} Won the game`);
    } else if (game[0].FP < game[1].FP) {
      alert(`${game[1].teamName} Won the game`);
    }
    alert("Match  end");
    console.log(game);
    ViewScoreBoard = true;
  }
  console.log(game);

  if (Random == 1) {
    Shot = "One run";
    if (game[x].player[c].name == game[x].Captian.name) {
      game[x].Captian.FP += 2;
      game[x].Captian.Score += 1;
      game[x].Score += 1;
      game[x].FP += 2;
    } else if (game[x].player[c].name == game[x].viceCaptian.name) {
      game[x].viceCaptian.FP += 1.5;
      game[x].viceCaptian.Score += 1;
      game[x].Score += 1;
      game[x].FP += 1.5;
    } else {
      game[x].player[c].FP += 1;
      game[x].player[c].Score += 1;
      game[x].Score += 1;
      game[x].FP += 1;
    }
    game[x].player[c].Ball += 1;
  }
  if (Random == 2) {
    Shot = "2 Run";
    if (game[x].player[c].name == game[x].Captian.name) {
      game[x].Captian.FP += 4;
      game[x].Captian.Score += 2;
      game[x].Score += 2;
      game[x].FP += 4;
    } else if (game[x].player[c].name == game[x].viceCaptian.name) {
      game[x].viceCaptian.FP += 3;
      game[x].viceCaptian.Score += 2;
      game[x].Score += 2;
      game[x].FP += 3;
    } else {
      game[x].player[c].FP += 2;
      game[x].player[c].Score += 2;
      game[x].Score += 2;
      game[x].FP += 2;
    }

    game[x].player[c].Ball += 1;
  }
  if (Random == 3) {
    Shot = "3 run";
    if (game[x].player[c].name == game[x].Captian.name) {
      game[x].Captian.FP += 6;
      game[x].Captian.Score += 3;
      game[x].Score += 3;
      game[x].FP += 6;
    } else if (game[x].player[c].name == game[x].viceCaptian.name) {
      game[x].viceCaptian.FP += 4.5;
      game[x].viceCaptian.Score += 3;
      game[x].Score += 3;
      game[x].FP += 4.5;
    } else {
      game[x].player[c].FP += 3;
      game[x].player[c].Score += 3;
      game[x].Score += 3;
      game[x].FP += 3;
    }
    game[x].player[c].Ball += 1;
  }
  if (Random == 4) {
    Shot = "Boundry";
    if (game[x].player[c].name == game[x].Captian.name) {
      game[x].Captian.FP += 10;
      game[x].Captian.Score += 4;
      game[x].Score += 4;
      game[x].FP += 10;
    } else if (game[x].player[c].name == game[x].viceCaptian.name) {
      game[x].viceCaptian.FP += 7.5;
      game[x].viceCaptian.Score += 4;
      game[x].Score += 4;
      game[x].FP += 7.5;
    } else {
      game[x].player[c].FP += 5;
      game[x].player[c].Score += 4;
      game[x].Score += 4;
      game[x].FP += 5;
    }
    game[x].player[c].Ball += 1;
  }
  if (Random == 5) {
    Shot = "Wicket";
    if (game[x].player[c].Score == 0) {
      Shot = "Wicket";
      if (game[x].player[c].name == game[x].Captian.name) {
        game[x].Captian.FP -= 4;

        game[x].FP -= 4;
      } else if (game[x].player[c].name == game[x].viceCaptian.name) {
        game[x].viceCaptian.FP -= 3;

        game[x].FP -= 3;
      } else {
        game[x].player[c].FP -= 2;

        game[x].FP -= 2;
      }
    }

    matchBowler[b].FP += 10;
    matchBowler[b].wicket += 1;
    game[y].FP += 10;
    game[x].wicket += 1;
    ballPlayed++;
    game[x].player[c].Ball += 1;
    ballPlayed = 0;
    c++;
  }
  if (Random == 6) {
    Shot = "Six";
    if (game[x].player[c].name == game[x].Captian.name) {
      game[x].Captian.FP += 16;
      game[x].Captian.Score += 6;
      game[x].Score += 6;
      game[x].FP += 16;
    } else if (game[x].player[c].name == game[x].viceCaptian.name) {
      game[x].viceCaptian.FP += 12;
      game[x].viceCaptian.Score += 6;
      game[x].Score += 6;
      game[x].FP += 12;
    } else {
      game[x].player[c].FP += 8;
      game[x].player[c].Score += 6;
      game[x].Score += 6;
      game[x].FP += 8;
    }
    game[x].player[c].Ball += 1;
  }
  if (Random == 0) {
    Shot = "Dot ball";
    matchBowler[b].FP += 1;
    game[y].FP += 1;
    game[x].player[c].Ball += 1;
  }

  teamPoint.innerText = `Team :${game[x].teamName} \n\n Captain :${game[x].Captian.name} \n\n Vice-Captain :${game[x].viceCaptian.name} \n\nScore :${game[x].Score} \n Fantacy Point :${game[x].FP} \n Wicket :${c}\n Batsman:${game[x].player[c].name}( Score:${game[x].player[c].Score})(FP:${game[x].player[c].FP}) \n\n Ball played :${game[x].player[c].Ball}\n\nEvent :${Shot}\n\n over:${over}.${ball}  \n\n\n Balling team:${game[y].teamName}(FP:${game[y].FP}) \n\n Bowler :${matchBowler[b].name}(FP :${matchBowler[b].FP})`;

  LiveScore.innerText += `Over:${over}.${ball} , Action: ${Shot} , ${DateAndTime}\n`;

  if (ViewScoreBoard == true) {
    tossDiv.style.display = "none";
    ScoreView.style.display = "none";
    ScoreBord.style.display = "block";
    if (game[0].FP > game[1].FP) {
      winner.innerText = `${game[0].teamName} Won the game`;
    } else if (game[0].FP < game[1].FP) {
      winner.innerText = `${game[1].teamName} Won the game`;
    }
    team1Name.innerText = `${game[0].teamName} (${game[0].Score}/${game[0].wicket}) \n ( FP :${game[0].FP})`;
    team2Name.innerText = `${game[1].teamName} (${game[1].Score}/${game[1].wicket}) \n (FP :${game[1].FP})`;
    for (obj of game[0].player) {
      team1score.innerText += `${obj.name}(${obj.Score}) ,FP :${obj.FP} ,W :${obj.wicket} \n\n`;
    }
    for (obj of game[1].player) {
      team2score.innerText += `${obj.name}(${obj.Score}) ,FP :${obj.FP} ,W :${obj.wicket} \n\n`;
    }
  }
  
}