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
    SUP_1_BR : "sup_1_br",
    SUP_2 : "sup_2",
    SUP_2_BR : "sup_2_br",
    SUP_3 : "sup_3",
    SUP_4 : "sup_4",
    SUP_5 : "sup_5",
    SUP_5_BR : "sup_5_br",
    SUP_6 : "sup_6",
    SUP_7 : "sup_7",
    SUP_8 : "sup_8",
    SUP_8_BR : "sup_8_br",
    DS_1 : "ds_1",
    DS_2 : "ds_2",
    DS_2_PAY : "ds_2_pay",
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

function showYesNoDialog(title, message){
    const messageBox = new bootstrap.Modal(
       document.getElementById("yesNo")
    );

    document.getElementById("yesNoTitle").innerHTML =
        title;
    document.getElementById("yesNoMessage").innerHTML =
        message;
    messageBox.show();
}

function showMessageDialog(title, message){
    const messageBox = new bootstrap.Modal(
       document.getElementById("messageBox")
    );

    document.getElementById("messageBoxTitle").innerHTML =
        title;
    document.getElementById("messageBoxBody").innerHTML =
        message;
    messageBox.show();
}

function showBannersDialog(){
    const messageBox = new bootstrap.Modal(
       document.getElementById("bannersDialog")
    );
    messageBox.show();
}

function yesNoClick(answer){
    eval(CurrentPrince.mindCurrent)(answer);

    // switch(CurrentPrince.mindCurrent){
    //     case Mind.SUP_1:
    //         SUP_1(answer);
    //         break;
    //     case Mind.SUP_1_BR:
    //         SUP_1_BR(answer);
    //         break;
    //     case Mind.SUP_2:
    //         SUP_2(answer);
    //         break;
    //     case Mind.SUP_2_BR:
    //         SUP_2_BR(answer);
    //         break;
    //     case Mind.SUP_3:
    //         SUP_3(answer);
    //         break;
    //     case Mind.SUP_4:
    //         SUP_4(answer);
    //         break;
    //     case Mind.SUP_5:
    //         SUP_5(answer);
    //         break;
    //     case Mind.SUP_5_BR:
    //         SUP_5_BR(answer);
    //         break;
    //     case Mind.SUP_7:
    //         SUP_7(answer);
    //         break;
    //     case Mind.SUP_8:
    //         SUP_8(answer);
    //         break;
    //     case Mind.SUP_8_BR:
    //         SUP_8_BR(answer);
    //     break;

    //     case Mind.DS_2:
    //         DS_2(answer);
    //     break;
    //     case Mind.DS_2_PAY:
    //         DS_2_PAY(answer);
    //     break;
    // }
}

function bannersDialogClick(answer){
    if(answer == "DS"){
        CurrentPrince.mindCurrent = Mind.DS_2;
    }
    else{
        CurrentPrince.mindCurrent = Mind.PF_1;
    }

    princeNextStep();
}

function delay() {
    return new Promise(resolve => setTimeout(resolve, 500));
} 

function princeNextStep(){
    switch(Prince1.mindCurrent){
        case Mind.SUP_1:
            showYesNoDialog("Do I...", "Rules the most sites?");
            break;
        case Mind.SUP_1_BR:
            showYesNoDialog("Am I...", "Battle Ready?");
            break;
        case Mind.SUP_2:
            showYesNoDialog("Can I...", "Muster on at least one card at my site?");
            break;
        case Mind.SUP_2_BR:
            showYesNoDialog("Am I...", "Battle Ready?");
        break;
        case Mind.SUP_3:
            showYesNoDialog("Can I...", "Move to a site to trade for the most FAVOR");
            break;
        case Mind.SUP_4:
            showYesNoDialog("Can I...", "Trade for FAVOR on at least one card at my site?");
            break;
        case Mind.SUP_5:
            showYesNoDialog("Can I...", "Muster on at least one card at my site?");
            break;
        case Mind.SUP_5_BR:
            showYesNoDialog("Am I...", "Battle Ready?");
            break;
        case Mind.SUP_7:
            showYesNoDialog("Do I...", "Rules the most sites?");
            break;
        case Mind.SUP_8:
            showYesNoDialog("Do I...", "Rules the most sites?");
            break;
        case Mind.SUP_8_BR:
            showYesNoDialog("Am I...", "Battle Ready?");
            break;

        case Mind.DS_2:
            showYesNoDialog("Can I...", "Trade SECRETS on at least one card at my site?");
            break;
        case Mind.DS_2_PAY:
            showYesNoDialog("Can I...", "Move to a site to trade for the most SECRETS?");
            break;
    }
}

function sup_1(answer){
    if (answer == 'Yes') {
        // Need a banner?
        showBannersDialog();
        return;
    }

    // await delay();
    // showYesNoDialog("Am I...", "Battle Ready?", resolve)
    
    CurrentPrince.mindCurrent = Mind.SUP_1_BR;
    princeNextStep();
    // await new Promise((resolve) => showYesNoDialog("Am I...", "Battle Ready?", resolve));
    // alert("fin!");
    //SUP_2();
    // return;
}

function sup_1_br(answer){
    if (answer == 'Yes') {
        showMessageDialog("Fight", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_8;
        // princeNextStep();
        return;
    }
    
    CurrentPrince.mindCurrent = Mind.SUP_2;
    princeNextStep();
}

function sup_2(answer){
    if (answer == "Yes") {
        showMessageDialog("Muster", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_2_BR;
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_3;
    princeNextStep();
}

function sup_2_br(answer){
    if (answer == "Yes") {
        showMessageDialog("Fight", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_8;
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_3;
    princeNextStep();
}

function sup_3(answer){
    if (answer == 'Yes') {
        showMessageDialog("Move", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_4;
        return;
    }
    
    // Couldn't move - Skip action
    CurrentPrince.mindCurrent = Mind.SUP_4;
    princeNextStep();
}

function sup_4(answer){
    if (answer == "Yes") {
        showMessageDialog("Trade", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_5;
        return;
    }

    // Skip
    CurrentPrince.mindCurrent = Mind.SUP_5;
    princeNextStep();
}

function sup_5(answer){
    if (answer == "Yes") {
        showMessageDialog("Muster", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_5_BR;
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_3;
    princeNextStep();
}

function sup_5_br(answer){
    if (answer == "Yes") {
        showMessageDialog("Fight", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_7;
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_3;
    princeNextStep();
}

function sup_7(answer){
    if (answer == "Yes") {
        showMessageDialog("Banners", "Yo")
        // CurrentPrince.mindCurrent = Mind.SUP_2_BR;
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_5;
    princeNextStep();
}

function sup_8(answer){
    if (answer == "Yes") {
        showMessageDialog("Banners", "Yo")
        // CurrentPrince.mindCurrent = Mind.SUP_8;
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_8_BR;
    princeNextStep();
}

function sup_8_br(answer){
    if (answer == "Yes") {
        showMessageDialog("Fight", "Yo")
        CurrentPrince.mindCurrent = Mind.SUP_7;
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_3;
    princeNextStep();
}

function ds_2(answer){
    if (answer == "Yes") {
        showMessageDialog("Trade", "Yo")
        CurrentPrince.mindCurrent = Mind.DS_2_PAY;
        return;
    }

    CurrentPrince.mindCurrent = Mind.DS_3;
    princeNextStep();
}

function ds_2_pay(answer){
    if (answer == "Yes") {
        showMessageDialog("Move", "Yo")
        CurrentPrince.mindCurrent = Mind.DS_2_PAY;
        return;
    }

    CurrentPrince.mindCurrent = Mind.DS_4;
    princeNextStep();
}