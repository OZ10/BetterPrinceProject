const Status = {
    Chancellor : "chancellor",
    Citizen : "citizen",
    Exile : "exile"
}

const Threat = {
    None : "none",
    Successor : "successor",
    OathKeeper : "oathkeeper",
    RivalCompletedVision : "rivalcompletedVision",
    PursueVision : "pursuevision"
}

const Mind = {
    SUP_1 : "sup_1",
    SUP_2 : "sup_2",
    SUP_3 : "sup_3",
    SUP_4 : "sup_4",
    SUP_5 : "sup_5",
    SUP_6 : "sup_6",
    SUP_7 : "sup_7",
    SUP_8 : "sup_8",
    DS_1 : "ds_1",
    DS_2 : "ds_2",
    DS_3 : "ds_3",
    DS_4 : "ds_4",
    DS_5 : "ds_5",
    DS_6 : "ds_6",
    DS_7 : "ds_7",
    DS_8 : "ds_8",
    PF_1 : "pf_1",
    PF_2 : "pf_2",
    PF_3 : "pf_3",
    PF_4 : "pf_4",
    PF_5 : "pf_5",
    PF_6 : "pf_6",
    PF_7 : "pf_7",
    PF_8 : "pf_8",
    RB_1 : "rb_1",
    RB_2 : "rb_2",
    RB_3 : "rb_3",
    RB_4 : "rb_4",
    RB_5 : "rb_5",
    RB_6 : "rb_6",
    RB_7 : "rb_7",
    RB_8 : "rb_8",
    RB_9 : "rb_9"
}

class Prince { 
    constructor(name,
                numFavor,
                numSecrets,
                mindStart,
                mindCurrent,
                status,
                numwarbands,
                currentThreat,
                factionLvl_Discord,
                factionLvl_Arcane,
                factionLvl_Order,
                factionLvl_Hearth,
                factionLvl_Beast,
                factionLvl_Nomad) {
        this.name = name;
        this.numFavor = numFavor;
        this.numSecrets = numSecrets;
        this.mindStart = mindStart;
        this.mindCurrent = mindCurrent;
        this.status = status;
        this.numwarbands = numwarbands;
        this.currentThreat = currentThreat;
        this.factionLvl_Discord = factionLvl_Discord,
        this.factionLvl_Arcane = factionLvl_Arcane,
        this.factionLvl_Order = factionLvl_Order,
        this.factionLvl_Hearth = factionLvl_Hearth,
        this.factionLvl_Beast = factionLvl_Beast,
        this.factionLvl_Nomad = factionLvl_Nomad
    }
}

let Prince1;
let CurrentPrince;
document.addEventListener("DOMContentLoaded", () => {
    Prince1 = new Prince("Sam",
    2,
    1,
    Mind.SUP_1,
    Mind.SUP_1,
    Status.Chancellor,
    2,
    Threat.None,
    0,0,0,0,0,0);

    document.getElementById("PrinceName").innerHTML = Prince1.name;
    document.getElementById("PrinceFavor").innerHTML = Prince1.numFavor;

    CurrentPrince = Prince1;
});



// function newGame(){
//     Prince1 = new Prince("John",
//                         2,
//                         1,
//                         Mind.SUP_1,
//                         Mind.SUP_1,
//                         Status.Chancellor,
//                         2,
//                         Threat.None)
// }

function changeRound(){
    let round = getRoundNumber();
    round++;
    document.getElementById("roundnumber").innerHTML = round++

    if(round == 10){
        const messageBox = new bootstrap.Modal(
            document.getElementById("messageBox")
        );

        document.getElementById("messageBoxTitle").innerHTML =
            "Who Wins?";
        document.getElementById("messageBoxBody").innerHTML =
            "Game over. Check winner";
        messageBox.show();
    }
}

function getRoundNumber(){
    return document.getElementById("roundnumber").innerHTML;
}

function princeNextStep(){
    let answer;

    switch(Prince1.mindCurrent){
        case Mind.SUP_1:
            showYesNoDialog("Do I...", "Rules the most sites?")
            break;
    }
}

// function cloneNodeAndChangeId(nodename, planetname, rowCount) {
//     let clonenode = document.getElementById(nodename).cloneNode(true);
//     clonenode.id = planetname;

//     if (rowCount == 0) {
//         // add border to the top
//         clonenode.classList.add("builditemstart");
//     }

//     document.getElementById("buildqueue").appendChild(clonenode);
// }

function AddNewPrince(){
    let princeTemplate = document.getElementById("Prince1");
    let princeColumn2 = document.getElementById("PrinceColumn2");
    princeColumn2.innerHTML = princeTemplate.innerHTML;

    // alert(princeColumn2.getElementById("PrinceName").innerHTML);
}

function yesNoTest(){
    //const model = new Promise(showYesNoDialog("Do I.....?", "Rule the most sites?")); //.then(yes, no));
    showYesNoDialog("Do I.....?", "Rule the most sites?");
    //let c = confirm("D'oh!");
    alert("!");
}

function yes(){
    alert("Yes!");
}

function no(){
    alert("No");
}

let YesNoAnswer;
const messageBox = new bootstrap.Modal(
    document.getElementById("yesNo")
);

function showYesNoDialog(title, message){
    //const messageBox = new bootstrap.Modal(
    //    document.getElementById("yesNo")
    //);

    document.getElementById("yesNoTitle").innerHTML =
        title;
    document.getElementById("yesNoMessage").innerHTML =
        message;
    messageBox.show();

    // if(YesNoAnswer == "Yes"){
    //    alert("Yes pressed!");
    // }
}

function yesNoClick(answer){
    //alert(answer);
    //document.getElementById("answer").value = answer;
    switch(CurrentPrince.mindCurrent){
        case Mind.SUP_1:
            SUP_1(answer);
    }
}

function SUP_1(answer){
    if (answer) {
        // Need a banner?
        return;
    }
alert(answer);
    CurrentPrince.mindCurrent = Mind.SUP_2;
    SUP_2();
    return;
}

function SUP_2(){

    if (answer) {
        // Need a banner?
        return;
    }

    // Call SUP2
    return;
}