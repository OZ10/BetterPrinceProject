const BannerNames = {
    PEOPLESFAVOR: "PEOPLES FAVOR",
    DARKESTSECRET: "DARKEST SECRET"
}

const Currency = {
    FAVOR: "FAVOR",
    SECRETS: "SECRETS",
    BOTH: "FAVOR and SECRETS"
}

const Status = {
    Chancellor: "chancellor",
    Citizen: "citizen",
    Exile: "exile"
}

const Threat = {
    None: "None",
    Successor: "successor",
    OathKeeper: "oathkeeper",
    RivalCompletedVision: "rivalcompletedVision",
    PursueVision: "pursuevision"
}

const Alignments = {
    None: "none",
    Friend: "friend",
    Conspirator: "conspirator"
}

const Factions = {
    Discord: "discord",
    Arcane: "arcane",
    Order: "order",
    Hearth: "hearth",
    Beast: "beast",
    Nomad: "nomad",
    None: "none"
}

const ActionNames = {
    Trade: "TRADE",
    Muster: "MUSTER",
    Move: "MOVE",
    MoveFight: "MOVE & FIGHT",
    BattleReady: "BATTLE READY?",
    Search: "SEARCH",
    PayFor: "PAY FOR ",
    Hold: "HOLD THE ",
    Rule: "RULE",
    PayForRelsBanners: "PAY FOR RELICS AND BANNERS"
}

class Faction {
    constructor(factionName,
        factionLevel,
        factionAlignment) {
        this.name = factionName;
        this.level = factionLevel;
        this.alignment = factionAlignment;
    }
}

const PrinceNames = {
    Nothing: "null",
    William: "Prince William",
    Fresh: "Prince Fresh",
    Fred: "fred"
}

const Mind = {
    SUP_1: "sup_1",
    SUP_1_BR: "sup_1_br",
    SUP_2: "sup_2",
    SUP_2_BR: "sup_2_br",
    SUP_3: "sup_3",
    SUP_4: "sup_4",
    SUP_5: "sup_5",
    SUP_5_BR: "sup_5_br",
    SUP_7: "sup_7",
    SUP_8: "sup_8",
    SUP_8_BR: "sup_8_br",
    DS_1: "ds_1",
    DS_1_HOLD: "ds_1_hold",
    DS_1_BR: "ds_1_br",
    DS_1_PAY: "ds_1_pay",
    DS_2: "ds_2",
    DS_2_PAY: "ds_2_pay",
    DS_3: "ds_3",
    DS_4: "ds_4",
    DS_4_PAY: "ds_4_pay",
    DS_5: "ds_5",
    DS_5_BR: "ds_5_br",
    DS_6: "ds_6",
    DS_7: "ds_7",
    DS_7_DS: "ds_7_ds",
    DS_8: "ds_8",
    PF_1: "pf_1",
    PF_1_HOLD: "pf_1_hold",
    PF_1_BR: "pf_1_br",
    PF_1_PAY: "pf_1_pay",
    PF_2: "pf_2",
    PF_2_PAY: "pf_2_pay",
    PF_3: "pf_3",
    PF_4: "pf_4",
    PF_4_PAY: "pf_4_pay",
    PF_5: "pf_5",
    PF_5_BR: "pf_5_br",
    PF_6: "pf_6",
    PF_7: "pf_7",
    PF_8: "pf_8",
    RB_1: "rb_1",
    RB_1_MOVE: "rb_1_move",
    RB_1_BR: "rb_1_br",
    RB_2: "rb_2",
    RB_2_PAY: "rb_2_pay",
    RB_3: "rb_3",
    RB_3_PAY: "rb_3_pay",
    RB_4: "rb_4",
    RB_5: "rb_5",
    RB_5_MOVE: "rb_5_move",
    RB_6: "rb_6",
    RB_6_MOST: "rb_6_most",
    RB_6_PAY: "rb_6_pay",
    RB_7: "rb_7",
    RB_7_BR: "rb_7_br",
    RB_8: "rb_8",
    RB_8_MOST: "rb_8_most",
    RB_8_BR: "rb_8_br",
    RB_9: "rb_9",
    RB_9_MOVE: "rb_9_move"
}

class Prince {
    constructor(name,
        numFavor,
        numSecrets,
        mindCurrent,
        status,
        numwarbands,
        currentThreat,
        faction_Discord,
        faction_Arcane,
        faction_Order,
        faction_Hearth,
        faction_Beast,
        faction_Nomad,
        numActions,
        currentActionNum,
        princeNumber,
        currentFaction) {
        this.name = name;
        this.numFavor = numFavor;
        this.numSecrets = numSecrets;
        this.mindCurrent = mindCurrent;
        this.status = status;
        this.numwarbands = numwarbands;
        this.currentThreat = currentThreat;
        this.numActions = numActions,
            this.currentActionNum = currentActionNum,
            this.princeNumber = princeNumber,
            this.currentFaction = currentFaction;
        this.factions = new Array(0);
        this.factions.push(faction_Arcane, faction_Beast,
            faction_Discord, faction_Hearth,
            faction_Nomad, faction_Order);
        this.stepCount = 1;
        this.tacticsLevel = 0;
        this.roundNumber = 0;
    }

    stepCount;
    factions;
    isCurrent;
    tacticsLevel;
    roundNumber;
}

function getFactionAlignmentList(alignment) {
    let list = "";
    CurrentPrince.factions.forEach(faction => {
        if (faction.alignment == alignment) {
            list += faction.name + "(" + convertFactionLevelToFavor(faction.level, alignment) + ") ";
        }
    })
    return (list == '') ? "No " + alignment + "s!" : list.toUpperCase();
}

function convertFactionLevelToFavor(level, alignment) {
    // Faction level dictates how much favor is traded for
    switch (level) {
        case 2:
            return "1";
        case 3:
            // Level 3 alignment gives 2 FAVOR but only 1 SECRET
            return (alignment == Alignments.Friend) ? "2" : "1";
        case 4:
        case 5:
            return "2";

    }
}

class GameSettings {
    constructor(selectedOath,
        roundNumber) {
        this.selectedOath = selectedOath,
            this.roundNumber = roundNumber
    }
}

let CurrentPrince;
let Princes = new Array(1);
let CurrentGameSettings;

document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.length > 0) {

        //TODO Refactor this
        for (let princeNumber = 1; princeNumber < localStorage.length + 1; princeNumber++) {
            let prince = JSON.parse(localStorage.getItem(princeNumber));

            if (prince != null) {
                Princes[princeNumber] = JSON.parse(localStorage.getItem(princeNumber));

                if (Princes[princeNumber].isCurrent) {
                    CurrentPrince = Princes[princeNumber];
                }

                createNewPrinceNode(princeNumber, Princes[princeNumber]);
            }
        }

        CurrentGameSettings = JSON.parse(localStorage.getItem("settings"));
        document.getElementById("selectedOath").innerHTML = CurrentGameSettings.selectedOath;
        document.getElementById("roundnumber").innerHTML = CurrentGameSettings.roundNumber;

        hideAddNewPrinceButton();
        enableDisablePrinces();
    }
});

function showOathSelectionDialog() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("oathSelectionDialog")
    );
    messageBox.show();
}

function oathClick(selectedOath) {
    let startingMind;
    switch (selectedOath) {
        case "SUP":
            startingMind = "sup_1";
            break;
        case "DS":
            startingMind = "ds_1";
            break;
        case "PF":
            startingMind = "pf_1";
            break;
        case "RB":
            startingMind = "rb_1";
            break;
    }

    CurrentPrince.mindCurrent = startingMind;

    document.getElementById("selectedOath").innerHTML = startingMind;
    document.getElementById("PrinceMindOptions" + CurrentPrince.princeNumber).value = startingMind;
    CurrentGameSettings = new GameSettings(selectedOath, 1);
    localStorage.setItem("settings", JSON.stringify(CurrentGameSettings));
    savePrinceSettings();
}

function resetGame() {
    localStorage.clear();
    document.getElementById("Princes").innerHTML = "";
    //document.getElementById("addNewPrinceRow").classList.remove("d-none");
    showHideElement("addNewPrinceRow", true);
    document.getElementById("roundnumber").innerHTML = "1";
    Princes = new Array(1);
}

function showHideDebug(){

}

function createNewPrince(name, status, number) {
    return new Prince(name,
        2,
        1,
        Mind.SUP_1,
        status,
        2,
        Threat.None,
        new Faction(Factions.Discord, 0, Alignments.None),
        new Faction(Factions.Arcane, 0, Alignments.None),
        new Faction(Factions.Order, 0, Alignments.None),
        new Faction(Factions.Hearth, 0, Alignments.None),
        new Faction(Factions.Beast, 0, Alignments.None),
        new Faction(Factions.Nomad, 0, Alignments.None),
        0, 0,
        number,
        null);
}

function changeRound() {
    let round = getRoundNumber();
    round++;
    document.getElementById("roundnumber").innerHTML = round;

    CurrentGameSettings.roundNumber = round;
    localStorage.setItem("settings", JSON.stringify(CurrentGameSettings));

    if (round == 10) {
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

function getRoundNumber() {
    return document.getElementById("roundnumber").innerHTML;
}

function addNewPrinceClick() {

    let nextPrinceNumber = getNextPrinceNumber();

    let newPrince = createNewPrince(getNextPrinceName(nextPrinceNumber), Status.Exile, nextPrinceNumber);
    Princes[nextPrinceNumber] = newPrince;

    // Make Prince current if there is currently only one Prince (Princes array has a blank entry at 1)
    if (Princes.length == 2) {
        newPrince.isCurrent = true;
        CurrentPrince = newPrince;
        //showOathSelectionDialog();
    }

    createNewPrinceNode(nextPrinceNumber, newPrince)
    savePrinceSettings();

    showHideElement("startGame", true);
}

function showHideElement(id, show){
    if(show == true){
        document.getElementById(id).classList.remove("d-none");
    }else{
        document.getElementById(id).classList.add("d-none");
    }
}

function createNewPrinceNode(nextPrinceNumber, newPrince) {
    let cloneNode = document.getElementById("PrinceColumn").cloneNode(true);
    cloneNode.id = "PrinceColumn" + nextPrinceNumber;
    cloneNode.classList.remove("d-none");

    if (newPrince.status == Status.Chancellor) {
        cloneNode.classList.add("chancellor");
    } else {
        cloneNode.classList.add("exile" + nextPrinceNumber);
    }

    changeNodeIdAndValue(cloneNode, "PrinceName", "PrinceName" + nextPrinceNumber, newPrince.name);
    changeNodeIdAndValue(cloneNode, "PrinceStatus", "PrinceStatus" + nextPrinceNumber, newPrince.status);
    changeNodeId(cloneNode, "PrinceCurrentFaction", "PrinceCurrentFaction" + nextPrinceNumber);
    changeNodeIdAndValue(cloneNode, "PrinceTacticLevel", "PrinceTacticLevel" + nextPrinceNumber, newPrince.tacticsLevel);
    changeNodeIdAndValue(cloneNode, "PrinceFavor", "PrinceFavor" + nextPrinceNumber, newPrince.numFavor);
    changeNodeIdAndValue(cloneNode, "PrinceSecret", "PrinceSecret" + nextPrinceNumber, newPrince.numSecrets);
    changeNodeIdAndValue(cloneNode, "PrinceTotalTurns", "PrinceTotalTurns" + nextPrinceNumber, (newPrince.currentActionNum == 0) ? "" : newPrince.currentActionNum);

    // Debug options
    //changeNodeId(cloneNode, "Prince1DebugMenu", "Prince" + nextPrinceNumber + "DebugMenu");
    changeNodeId(cloneNode, "PrinceMindOptions", "PrinceMindOptions" + nextPrinceNumber);
    let mindSelect = getElementById(cloneNode, "PrinceMindOptions" + nextPrinceNumber);
    mindSelect.value = newPrince.mindCurrent;
    changeNodeIdAndValue(cloneNode, "PrinceArcaneLevel", "PrinceArcaneLevel" + nextPrinceNumber, newPrince.factions[0].level);
    changeNodeIdAndValue(cloneNode, "PrinceBeastLevel", "PrinceBeastLevel" + nextPrinceNumber, newPrince.factions[1].level);
    changeNodeIdAndValue(cloneNode, "PrinceDiscordLevel", "PrinceDiscordLevel" + nextPrinceNumber, newPrince.factions[2].level);
    changeNodeIdAndValue(cloneNode, "PrinceHearthLevel", "PrinceHearthLevel" + nextPrinceNumber, newPrince.factions[3].level);
    changeNodeIdAndValue(cloneNode, "PrinceNomadLevel", "PrinceNomadLevel" + nextPrinceNumber, newPrince.factions[4].level);
    changeNodeIdAndValue(cloneNode, "PrinceOrderLevel", "PrinceOrderLevel" + nextPrinceNumber, newPrince.factions[5].level);

    // buttons
    changeNodeId(cloneNode, "PrinceStartTurn", "PrinceStartTurn" + nextPrinceNumber);

    // // enable or disable prince
    // if (newPrince.isCurrent) {
    //     cloneNode.classList.remove("disabled");
    // } else {
    //     cloneNode.classList.add("disabled")
    // }

    // steps
    changeNodeIdAndValue(cloneNode, "steps_Prince", "steps_Prince" + nextPrinceNumber, "");

    document.getElementById("Princes").appendChild(cloneNode);
}

function convertTacticLevelToDice(level) {
    let newLevel = CurrentPrince.tacticsLevel;

    switch (level) {
        case 0:
            break;
        case 1:
        case 2:
            newLevel += 1;
            break;
        case 3:
        case 4:
            newLevel += 2;
            break;
        case 5:
            newLevel += 3;
            break;
        default:
            newLevel = 3;
    }

    return (newLevel > 3) ? 3 : newLevel;
}

function getNextPrinceName(princeNumber) {
    return Object.values(PrinceNames)[princeNumber];
}

function getNextPrinceNumber() {
    nextNumber = 0;
    for (let count = 0; count < Princes.length; count++) {
        const prince = Princes[count];
        if (prince != null) { nextNumber += 1 };
    }
    return nextNumber += 1;
}

function getNextAvailablePrince() {
    // Length == 2 means there is only one prince
    if (Princes.length == 2) { return CurrentPrince };

    // If the prince is the last prince in the array set the start number to 0
    let startNum = (CurrentPrince.princeNumber == Princes.length) ? 0 : CurrentPrince.princeNumber;

    for (let count = startNum; count < Princes.length; count++) {
        const prince = Princes[count];
        if (prince.princeNumber != startNum) {
            return prince;
        } else {
            // rest the loop to start at the beginning
            if (count == Princes.length - 1) { count = 0 }
        }
    }
}

function startGame(){
    showOathSelectionDialog();
    enableDisablePrinces();
    showHideElement("changeRound", true);
    showHideElement("startGame", false);
}

function getElementById(node, id) {
    return node.querySelector("#" + id);
}

function changeNodeId(rootNode, rootNodeId, newNodeId) {
    let newNode = getElementById(rootNode, rootNodeId);
    newNode.id = newNodeId;
}

function changeNodeIdAndValue(rootNode, rootNodeId, newNodeId, newValue) {
    let newNode = getElementById(rootNode, rootNodeId);
    newNode.id = newNodeId;

    if (newNode.nodeName == "INPUT" || newNode.nodeName == "SELECT") {
        newNode.value = newValue;
    } else if (newNode.nodeName == "IMG") {
        newNode.src = newValue;
    } else {
        newNode.innerHTML = newValue;
    }

}

function changeStatus(status, id) {
    const princeNumber = id.slice(-1);
    Princes[princeNumber].status = status;

    let princeNode = document.getElementById("PrinceColumn" + princeNumber);
    princeNode.classList.remove("chancellor");
    princeNode.classList.remove("exile1");
    princeNode.classList.remove("exile2");
    princeNode.classList.remove("exile3");
    princeNode.classList.remove("exile4");
    princeNode.classList.remove("citizen1");
    princeNode.classList.remove("citizen2");
    princeNode.classList.remove("citizen3");
    princeNode.classList.remove("citizen4");

    if (status == Status.Chancellor) {
        princeNode.classList.add(Status.Chancellor);
    } else {
        princeNode.classList.add(status + princeNumber);
    }

    savePrinceSettings();
}

function princeMindChange(value) {
    // From debug menu
    CurrentPrince.mindCurrent = value;
    savePrinceSettings();
}

function factionLevelChange(id, value) {
    // From debug menu
    let princeNumber = CurrentPrince.princeNumber;
    switch (id) {
        case "PrinceArcaneLevel" + princeNumber:
            CurrentPrince.factions[0].level = value;
            break;
        case "PrinceBeastLevel" + princeNumber:
            CurrentPrince.factions[1].level = value;
            break;
        case "PrinceDiscordLevel" + princeNumber:
            CurrentPrince.factions[2].level = value;
            break;
        case "PrinceHearthLevel" + princeNumber:
            CurrentPrince.factions[3].level = value;
            break;
        case "PrinceNomadLevel" + princeNumber:
            CurrentPrince.factions[4].level = value;
            break;
        case "PrinceOrderLevel" + princeNumber:
            CurrentPrince.factions[5].level = value;
            break;
    }

    savePrinceSettings();
}

function test() {
    let cloneNode = document.getElementById("step_YesNo").cloneNode(true);
    cloneNode.classList.remove("d-none");
    getElementById(cloneNode, "accord_btn_Prince_step").innerHTML = "Can I.....";
    getElementById(cloneNode, "accord_body_Prince_step").textContent = "Muster?";

    document.getElementById("accord_Prince").appendChild(cloneNode);
}

function toolTipClick(link) {
    switch (link.innerHTML) {
        case "Battle Ready?":
            showStandardMessageDialog("Battle Ready is...", "Able to roll more attack dice than the defense dice added by your targets plus the warbands in the defending force. (Do not add the defender’s battle plans or defense dice added from the Oathkeeper title.)")
            break;
    }
}

function princeStartTurn() {
    // Hide the add new prince button
    hideAddNewPrinceButton()
    assessThreat();
}

function hideAddNewPrinceButton() {
    showHideElement("addNewPrinceRow", false);
}

function assessThreat() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("assessThreatDialog")
    );

    switch (CurrentPrince.status) {
        case Status.Chancellor:
            document.getElementById("Chancellor_Cit_Successor").classList.remove("d-none");
            document.getElementById("Chancellor_Ex_Usurper").classList.remove("d-none");
            document.getElementById("Ex_Usurper").classList.add("d-none");
            break;
        case Status.Exile:
        case Status.Citizen:
            document.getElementById("Chancellor_Cit_Successor").classList.add("d-none");
            document.getElementById("Chancellor_Ex_Usurper").classList.add("d-none");
            document.getElementById("Ex_Usurper").classList.remove("d-none");
            break;
    }
    messageBox.show();
}

function threatClick(answer) {
    let wasVisionPlayed = false;

    if (CurrentPrince.currentThreat != answer) {
        CurrentPrince.currentThreat = answer;

        switch (answer) {
            case "Chancellor_Cit_Successor":
                getThreat("Successor");
                break;
            case "Chancellor_Ex_Usurper":
            case "Ex_Usurper":
                getThreat("Usurper");
                break;
            case "Ex_Vision":
                showVisionDialog();
                wasVisionPlayed = true;
                break;
            case "Ex_Oath":
                getThreat("Oath");
                break;
            case "None":
                break;
        }
    }

    if (wasVisionPlayed == false) searchAndPlay();
}

function getThreat(threat) {
    switch (threat) {
        case "Successor":
            CurrentPrince.mindCurrent = getSuccessorOath();
            break;
        case "Oath":
        case "Usurper":
            CurrentPrince.mindCurrent = CurrentGameSettings.selectedOath.toLowerCase() + "_1"; //getOath();
            break;
    }
}

function getSuccessorOath() {
    switch (CurrentGameSettings.selectedOath) {
        case "SUP":
            return Mind.RB_1;
        case "DS":
            // holds the Grand Scepter
            return Mind.SUP_1_BR;
        case "PF":
            return Mind.DS_1;
        case "RB":
            return Mind.PF_1;
    }
}

function showVisionDialog() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("visionDialog")
    );
    messageBox.show();
}

function visionDialogClick(vision) {
    CurrentPrince.mindCurrent = vision;
    searchAndPlay();
}

function searchAndPlay() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("searchAndPlayDialog")
    );

    document.getElementById("cannotPlayCheck").checked = false;

    showHideFriendConspiratorMessages()
    changeFactionAlignmentButtons()

    messageBox.show();
}

function showHideFriendConspiratorMessages() {
    // Show the correct message depending on current Mind
    if (CurrentPrince.mindCurrent.slice(0, 2) == "su" || CurrentPrince.mindCurrent.slice(0, 2) == "pf") {
        document.getElementById("searchAndPlayFriendMessage").classList.remove("d-none")
        document.getElementById("searchAndPlayConspiratorMessage").classList.add("d-none")
    } else {
        document.getElementById("searchAndPlayFriendMessage").classList.add("d-none")
        document.getElementById("searchAndPlayConspiratorMessage").classList.remove("d-none")
    }
}

function changeFactionAlignmentButtons() {
    // Change colour of buttons depending on alignment
    // and add number of actions in brackets
    CurrentPrince.factions.forEach(faction => {
        // reset button colours
        document.getElementById("searchAndPlayBtn" + faction.name).classList.remove("friend")
        document.getElementById("searchAndPlayBtn" + faction.name).classList.remove("conspirator")

        // set button text
        document.getElementById("searchAndPlayBtn" + faction.name + "_text").innerHTML = faction.name.toUpperCase() + " (" + faction.level + ")"
        //document.getElementById("searchAndPlayBtn" + faction.name).innerHTML = faction.name + "(" + (faction.level == 1) ? 0 : faction.level + ")";
        // add button colour
        switch (faction.alignment) {
            case Alignments.Friend:
                document.getElementById("searchAndPlayBtn" + faction.name).classList.add("friend")
                break
            case Alignments.Conspirator:
                document.getElementById("searchAndPlayBtn" + faction.name).classList.add("conspirator")
                break
        }
    })
}

function secondSearchAndPlay() {
    // Check to see if the Prince has just carried out a second Search & Play
    // A second Search & Play will skip certain actions
    return (CurrentPrince.mindCurrent == Mind.PF_7 || CurrentPrince.mindCurrent == Mind.DS_8) ? true : false;
}

function searchAndPlayClick(selectedFaction) {

    addAnActionLabel("Gain", "Gain Favor", "Gain one FAVOR from " + selectedFaction.toUpperCase() + "'s bank");

    let wasSecondSearchAndPlayed = secondSearchAndPlay();

    if (wasSecondSearchAndPlayed == false) {
        CurrentPrince.currentActionNum = 1;
    }

    let factionNumber = getFactionNumber(selectedFaction);
    increaseFactionLevel(factionNumber);

    if (wasSecondSearchAndPlayed == false) {
        // Only increase the number of actions if this is NOT a second Search and Play
        CurrentPrince.numActions = CurrentPrince.factions[factionNumber].level
        document.getElementById("PrinceCurrentFaction" + CurrentPrince.princeNumber).src = convertFactionToIcon(selectedFaction);
        document.getElementById("PrinceTotalTurns" + CurrentPrince.princeNumber).innerHTML = "#Turns = " + CurrentPrince.factions[factionNumber].level;
    }

    alignFaction(CurrentPrince.factions[factionNumber]);
    CurrentPrince.currentFaction = CurrentPrince[factionNumber];

    if (document.getElementById("cannotPlayCheck").checked) {
        addAnActionLabel("CantPlay", "Can't Play Card", displayCantPlayDialog());
    }

    updateTactics();
    addTurnNumberLabel();
    princeNextStep();
}

function displayCantPlayDialog() {
    let message;
    if (CurrentPrince.mindCurrent.slice(0, 2) == "su") {
        message = "Gain 2 warbands and tactics has increased!";
        CurrentPrince.tacticsLevel += 1;
    } else if (CurrentPrince.mindCurrent.slice(0, 2) == "ds") {
        message = "Gain 1 warband, 1 SECRET and tactics has increased!";
        CurrentPrince.tacticsLevel += 1;
    } else if (CurrentPrince.mindCurrent.slice(0, 2) == "pf") {
        message = "Gain 2 FAVOR!";
    } else if (CurrentPrince.mindCurrent.slice(0, 2) == "rb") {
        message = "Gain 1 warband, 1 FAVOR and tactics has increased!";
        CurrentPrince.tacticsLevel += 1;
    }
    return message;
}

function increaseFactionLevel(factionNumber) {
    // Faction levels start at zero but the first level (number of actions) is two
    if (CurrentPrince.factions[factionNumber].level == 0) {
        CurrentPrince.factions[factionNumber].level = 2;
    } else {
        CurrentPrince.factions[factionNumber].level += 1;
    }
}

function getFactionNumber(selectedFaction) {
    switch (selectedFaction) {
        case Factions.Arcane:
            return 0;
        case Factions.Beast:
            return 1;
        case Factions.Discord:
            return 2;
        case Factions.Hearth:
            return 3;
        case Factions.Nomad:
            return 4;
        case Factions.Order:
            return 5;
    }
}

function updateTactics() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("numberInputBox")
    );

    document.getElementById("numberInputTitle").innerHTML = "Update Tactics";
    document.getElementById("numberInputBody").innerHTML = "How many Battle Plan cards did you draw?";
    document.getElementById("currentNumber").value = 0;
    messageBox.show();
}

function numberBoxClick() {
    CurrentPrince.tacticsLevel = convertTacticLevelToDice(parseInt(document.getElementById("currentNumber").value));
    document.getElementById("PrinceTacticLevel" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.tacticsLevel;
}

function showStandardMessageDialog(title, message) {
    const messageBox = new bootstrap.Modal(
        document.getElementById("messageBox")
    );

    document.getElementById("messageBoxTitle").innerHTML = title;
    document.getElementById("messageBoxBody").innerHTML = message;

    messageBox.show();
}

function cleanUp() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("CleanupDialog")
    );

    messageBox.show();

    // Remove steps
    let princeSteps = document.getElementById("steps_Prince" + CurrentPrince.princeNumber);
    princeSteps.innerHTML = "";

    CurrentPrince.currentActionNum = 1;
    CurrentPrince.roundNumber = CurrentGameSettings.roundNumber;

    let mindSelect = document.getElementById("PrinceMindOptions" + CurrentPrince.princeNumber);
    mindSelect.value = CurrentPrince.mindCurrent;

    CurrentPrince = getNextAvailablePrince();

    savePrinceSettings()

    enableDisablePrinces();

    checkForEndOfRound();
}

function savePrinceSettings() {
    Princes.forEach(prince => {
        prince.isCurrent = (prince.name == CurrentPrince.name) ? true : false
        localStorage.setItem(prince.princeNumber, JSON.stringify(prince))
    })
}

function getPrince() {
    for (let index = 1; index < Princes.length; index++) {
        if (Princes[index].princeNumber == CurrentPrince.princeNumber) {
            return Princes[index];
        }
    }
}

function showRoundChangeDialog() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("roundChange")
    );
    messageBox.show();
}

function checkForEndOfRound() {
    let isEndRound = true;
    Princes.forEach((p) => {
        if (p.roundNumber < CurrentGameSettings.roundNumber) {
            isEndRound = false;
        }
    })

    if (isEndRound) {
        //showRoundChangeDialog();
        document.getElementById("changeRoundButton").disabled = false;
    }
}

function roundChangeClick() {
    changeRound();
    document.getElementById("changeRoundButton").disabled = true;
}

function enableDisablePrinces() {
    let princeNodes = document.querySelectorAll("[id^='PrinceColumn']");
    princeNodes.forEach(
        function (node) {
            let princeNumber = node.id.slice(-1);
            if (princeNumber == CurrentPrince.princeNumber) {
                node.classList.remove("disabled");
                showHideElement("PrinceStartTurn" + CurrentPrince.princeNumber, true);
            } else {
                node.classList.add("disabled");
                showHideElement("PrinceStartTurn" + princeNumber, false);
            }
        }
    )
}

function addAnActionLabel(actionName, title, message) {
    let actionLabel = document.getElementById("prince_action").cloneNode(true);
    actionLabel.classList.remove("d-none");
    actionLabel.id = "prince_action".replace("prince", "prince" + CurrentPrince.princeNumber).replace("action", "action" + actionName);

    changeNodeIdAndValue(actionLabel, "prince_action_title", "prince_action_title" + actionName, title);
    changeNodeIdAndValue(actionLabel, "prince_action_detail", "prince_action_detail" + actionName, message);

    let ele = getElementById(document, "steps_Prince" + CurrentPrince.princeNumber);
    ele.appendChild(actionLabel);
}

function addTurnNumberLabel() {
    let turnNumberLabel = document.getElementById("prince_turnNumber").cloneNode();
    turnNumberLabel.classList.remove("d-none");
    turnNumberLabel.id = "prince_turnNumber".replace("prince", "prince" + CurrentPrince.princeNumber).replace("turnNumber", "turnNumber" + CurrentPrince.currentActionNum);
    turnNumberLabel.innerHTML = "Turn #" + CurrentPrince.currentActionNum;

    let ele = getElementById(document, "steps_Prince" + CurrentPrince.princeNumber);
    ele.appendChild(turnNumberLabel);
}

function alignFaction(faction) {
    if (faction.alignment == Alignments.None) {
        if (CurrentPrince.mindCurrent.slice(0, 2) == "su" || CurrentPrince.mindCurrent.slice(0, 2) == "pf") {
            faction.alignment = Alignments.Friend;
        } else {
            faction.alignment = Alignments.Conspirator;
        }
    }
}

function showYesNoDialog(title, message, actionName) {

    // Whole Step node
    let newStepNode = document.getElementById("step_YesNo").cloneNode(true);
    newStepNode.id = "step_YesNo" + CurrentPrince.stepCount;
    // Unhide the step
    newStepNode.classList.remove("d-none");

    // Step button node
    let stepBtnName = getStepNodeId("YesNo_accord_btn_Prince_step"); //"accord_btn_Prince1_step1";

    changeNodeIdAndValue(newStepNode, "YesNo_accord_btn_Prince_step", getStepNodeId("YesNo_accord_btn_Prince_step"), actionName);

    // Step Detail node
    let stepName = getStepNodeId("YesNo_accord_Prince_step");

    changeNodeId(newStepNode, "YesNo_accord_Prince_step", stepName);

    // Change button target
    getElementById(newStepNode, stepBtnName).dataset.bsTarget = "#" + stepName;

    // Title Step node
    let stepTitleName = getStepNodeId("YesNo_accord_title_Prince_step");

    changeNodeIdAndValue(newStepNode, "YesNo_accord_title_Prince_step", stepTitleName, title);

    // Body Step node
    // let stepBodyName = getStepNodeId("YesNo_accord_body_Prince_step");

    // changeNodeIdAndValue(newStepNode, "YesNo_accord_body_Prince_step", stepBodyName, message);

    if (message == "Battle ready?") {
        changeNodeIdAndValue(newStepNode, "YesNo_accord_helperLink_Prince_step", getStepNodeId("YesNo_accord_helperLink_Prince_step"), "Battle Ready?");
        changeNodeIdAndValue(newStepNode, "YesNo_accord_body_Prince_step", getStepNodeId("YesNo_accord_body_Prince_step"), getBattleReadyTarget());
    } else {
        // Body Step node
        changeNodeIdAndValue(newStepNode, "YesNo_accord_body_Prince_step", getStepNodeId("YesNo_accord_body_Prince_step"), message);
    }

    changeNodeIdAndValue(newStepNode, "YesNo_accord_image_Prince_step", getStepNodeId("YesNo_accord_image_Prince_step"), convertActionToIcon(actionName));

    // Add new step
    let princeSteps = document.getElementById("steps_Prince" + CurrentPrince.princeNumber);
    princeSteps.appendChild(newStepNode);

    ShowHideSteps(princeSteps, stepName)

    CurrentPrince.stepCount += 1;
}

function getBattleReadyTarget() {
    let returnText = ""; //"<b>AND</b><br><br>";

    switch (CurrentPrince.mindCurrent) {
        case Mind.DS_1_BR:
        case Mind.DS_5_BR:
            returnText += "<b>Target</b>: the holder of the " + BannerNames.DARKESTSECRET;
            break;
        case Mind.PF_1_BR:
        case Mind.PF_5_BR:
            returnText += "<b>Target</b>: the holder of the " + BannerNames.PEOPLESFAVOR;
            break;
        case Mind.RB_1_BR:
        case Mind.RB_7_BR:
        case Mind.RB_8_BR:
            returnText += "<b>Target</b>: the holder of the most RELICS and BANNERS";
            break;
        default:
            return "";
    }

    return returnText;
}

function convertFactionToIcon(factionName){
    switch(factionName){
        case Factions.Arcane:
            return "./resources/images/arcane.png";
        case Factions.Beast:
            return "./resources/images/beast.png";
        case Factions.Discord:
            return "./resources/images/discord.png";
        case Factions.Hearth:
            return "./resources/images/hearth.png";
        case Factions.Nomad:
            return "./resources/images/nomad.png";
        case Factions.Order:
            return "./resources/images/order.png";
    }
}

function convertActionToIcon(actionName) {
    switch (actionName) {
        case ActionNames.BattleReady:
            return "./resources/images/action_battleready.png";
        case ActionNames.Hold + BannerNames.DARKESTSECRET:
            return "./resources/images/action_hold_ds.png";
        case ActionNames.Hold + BannerNames.PEOPLESFAVOR:
            return "./resources/images/action_hold_pf.png";
        case ActionNames.Move + Currency.FAVOR:
            return "./resources/images/action_move_favor.png";
        case ActionNames.Move + Currency.SECRETS:
            return "./resources/images/action_move_secret.png";
        case ActionNames.Move + Currency.BOTH:
            return "./resources/images/action_move_favor_secret.png";
        case ActionNames.MoveFight:
            return "./resources/images/action_move_fight.png";
        case ActionNames.Muster:
            return "./resources/images/action_muster.png";
        case ActionNames.PayFor + BannerNames.DARKESTSECRET:
            return "./resources/images/action_pay_ds.png";
        case ActionNames.PayFor + BannerNames.PEOPLESFAVOR:
            return "./resources/images/action_pay_pf.png";
        case ActionNames.PayForRelsBanners:
            return "./resources/images/action_pay_rb.png";
        case ActionNames.Rule:
            return "./resources/images/action_rule.png";
        case ActionNames.Search:
            return "./resources/images/action_search.png";
        case ActionNames.Trade + Currency.FAVOR:
            return "./resources/images/action_trade_favor.png";
        case ActionNames.Trade + Currency.SECRETS:
            return "./resources/images/action_trade_secret.png";
        case ActionNames.Trade + Currency.BOTH:
            return "./resources/images/action_trade_favor_secret.png";
        default:
            return "";
    }
}

function ShowHideSteps(princeSteps, stepName) {
    let allSteps = princeSteps.querySelectorAll("[id^='YesNo_accord_Prince" + CurrentPrince.princeNumber + "_step'], [id^='Ok_accord_Prince" + CurrentPrince.princeNumber + "_step']")
    allSteps.forEach(function (step) {
        if (stepName == step.id) {
            step.classList.remove("collapse")
        } else {
            step.classList.add("collapse")
        }
    })
}

function getStepNodeId(oldId) {
    return oldId.replace("Prince", "Prince" + CurrentPrince.princeNumber).replace("step", "step" + CurrentPrince.stepCount);
}

function showInlineMessageDialog(title, message) {

    // Whole Step node
    let newStepNode = document.getElementById("step_Ok").cloneNode(true);
    newStepNode.id = "step_Ok" + CurrentPrince.stepCount;
    // Unhide the step
    newStepNode.classList.remove("d-none");

    // Step button node
    let stepBtnName = getStepNodeId("Ok_accord_btn_Prince_step"); //"accord_btn_Prince1_step1";

    changeNodeIdAndValue(newStepNode, "Ok_accord_btn_Prince_step", stepBtnName, "OUTCOME");

    // Step Detail node
    let stepName = getStepNodeId("Ok_accord_Prince_step");
    changeNodeId(newStepNode, "Ok_accord_Prince_step", stepName);

    // Change button target
    getElementById(newStepNode, stepBtnName).dataset.bsTarget = "#" + stepName;

    // Title Step node
    let stepTitleName = getStepNodeId("Ok_accord_title_Prince_step");
    changeNodeIdAndValue(newStepNode, "Ok_accord_title_Prince_step", stepTitleName, title);

    // Body Step node
    let stepBodyName = "Ok_accord_body_Prince_step";
    changeNodeIdAndValue(newStepNode, "Ok_accord_body_Prince_step", stepBodyName, message);

    // Add new step
    let princeSteps = document.getElementById("steps_Prince" + CurrentPrince.princeNumber);
    princeSteps.appendChild(newStepNode);

    ShowHideSteps(princeSteps, stepName)
}

function showBannersDialog() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("bannersDialog")
    );
    messageBox.show();
}

function okClick() {
    if (secondSearchAndPlay()) {
        searchAndPlay();
    } else {
        addTurnNumberLabel();
        princeNextStep();
    }
}

function yesNoClick(answer) {
    eval(CurrentPrince.mindCurrent)(answer);
}

function bannersDialogClick(answer) {
    if (answer == "DS") {
        CurrentPrince.mindCurrent = Mind.DS_2;
    }
    else {
        CurrentPrince.mindCurrent = Mind.PF_1;
    }

    princeNextStep();
}

// Below are the questions that the user is asked to help resolve the bot's turn
function princeNextStep() {
    if (CurrentPrince.currentActionNum <= CurrentPrince.numActions) {
        switch (CurrentPrince.mindCurrent) {
            case Mind.SUP_1:
                questionRulesMostSite();
                break;
            case Mind.SUP_1_BR:
                //questionBattleReady();
                questionBattleReady();
                break;
            case Mind.SUP_2:
                questionCanMuster();
                break;
            case Mind.SUP_2_BR:
                questionBattleReady();
                break;
            case Mind.SUP_3:
                questionMoveToSiteWithMost(Currency.FAVOR);
                break;
            case Mind.SUP_4:
                questionTradeWithSite(Currency.FAVOR);
                break;
            case Mind.SUP_5:
                questionCanMuster();
                break;
            case Mind.SUP_5_BR:
                questionBattleReady();
                break;
            case Mind.SUP_7:
                questionRulesMostSite();
                break;
            case Mind.SUP_8:
                questionRulesMostSite();
                break;
            case Mind.SUP_8_BR:
                questionBattleReady();
                break;

            case Mind.DS_1:
                questionHoldTheBanner(BannerNames.DARKESTSECRET);
                break;
            case Mind.DS_1_HOLD:
                questionHolderOfBanner(BannerNames.DARKESTSECRET);
                break;
            case Mind.DS_1_BR:
                questionBattleReady();
                break;
            case Mind.DS_1_PAY:
                questionPayForBanner(BannerNames.DARKESTSECRET);
                break;
            case Mind.DS_2:
                questionTradeWithSite(Currency.SECRETS);
                break;
            case Mind.DS_2_PAY:
                questionPayForBanner(BannerNames.DARKESTSECRET);
                break;
            case Mind.DS_3:
                questionMoveToSiteWithMost(Currency.SECRETS);
                break;
            case Mind.DS_4:
                questionTradeWithSite(Currency.BOTH) //Currency.FAVOR + "AND" + Currency.SECRETS);
                break;
            case Mind.DS_4_PAY:
                questionPayForBanner(BannerNames.DARKESTSECRET);
                break;
            case Mind.DS_5:
                questionCanMuster();
                break;
            case Mind.DS_5_BR:
                questionBattleReady();
                break;
            case Mind.DS_6:
                questionSearch();
                break;
            case Mind.DS_7:
                questionHoldTheBanner(BannerNames.DARKESTSECRET);
                break;
            case Mind.DS_8:
                // Skip to SUP_2 (Muster)
                questionCanMuster();
                break;

            case Mind.PF_1:
                questionHoldTheBanner(BannerNames.PEOPLESFAVOR);
                break;
            case Mind.PF_1_HOLD:
                questionHolderOfBanner(BannerNames.PEOPLESFAVOR);
                break;
            case Mind.PF_1_BR:
                questionBattleReady();
                break;
            case Mind.PF_1_PAY:
                questionPayForBanner(BannerNames.PEOPLESFAVOR);
                break;
            case Mind.PF_2:
                questionTradeWithSite(Currency.FAVOR);
                break;
            case Mind.PF_2_PAY:
                questionPayForBanner(BannerNames.PEOPLESFAVOR)
                break;
            case Mind.PF_3:
                questionMoveToSiteWithMost(Currency.FAVOR);
                break;
            case Mind.PF_4:
                questionTradeWithSite(Currency.BOTH) //Currency.FAVOR + " and " + Currency.SECRETS);
                break;
            case Mind.PF_4_PAY:
                questionPayForBanner(BannerNames.PEOPLESFAVOR);
                break;
            case Mind.PF_5:
                questionCanMuster();
                break;
            case Mind.PF_5_BR:
                questionBattleReady();
                break;
            case Mind.PF_6:
                questionSearch();
                break;
            case Mind.PF_7:
                questionMoveToSiteWithMost(Currency.FAVOR);
                break;
            case Mind.PF_8:
                questionHoldTheBanner(BannerNames.PEOPLESFAVOR);
                break;

            case Mind.RB_1:
                questionHoldTheBanner("most RELICS and BANNERS");
                break;
            case Mind.RB_1_MOVE:
            case Mind.RB_5_MOVE:
            case Mind.RB_9_MOVE:
                questionAlreadyAtSiteWithMost("RELIC");
                break;
            case Mind.RB_1_BR:
                questionBattleReady();
                break;
            case Mind.RB_2:
                questionMoveToSiteWithMost("RELICS");
                break;
            case Mind.RB_2_PAY:
                questionPayForBanner("RELIC");
                break;
            case Mind.RB_3:
                questionTradeWithSite(Currency.BOTH);
                break;
            case Mind.RB_3_PAY:
                questionPayForBanner("RELIC");
                break;
            case Mind.RB_4:
                questionMoveToSiteWithMost(Currency.FAVOR);
                break;
            case Mind.RB_5:
                questionTradeWithSite(Currency.BOTH);
                break;
            case Mind.RB_6:
                questionMoveToSiteWithMost("RELICS");
                break;
            case Mind.RB_6_MOST:
                questionHoldTheBanner("most RELICS and BANNERS");
                break;
            case Mind.RB_6_PAY:
                questionPayForBanner("RELIC");
                break;
            case Mind.RB_7:
                questionCanMuster();
                break;
            case Mind.RB_7_BR:
                questionBattleReady();
                break;
            case Mind.RB_8:
                questionHoldTheBanner("most RELICS and BANNERS");
                break;
            case Mind.RB_8_BR:
                questionBattleReady();
                break;
            case Mind.RB_9:
                questionHoldTheBanner("most RELICS and BANNERS");
                break;
        }
    } else {
        cleanUp();
    }

    //CurrentPrince.currentActionNum += 1;
}

function questionBattleReady() {
    showYesNoDialog("Am I...", "Battle ready?", ActionNames.BattleReady);
}

function questionRulesMostSite() {
    showYesNoDialog("Do I...", "Rules the most sites?", ActionNames.Rule);
}

function questionCanMuster() {
    showYesNoDialog("Can I...", "Muster on at least one card at my site?", ActionNames.Muster);
}

function questionMoveToSiteWithMost(currency) {
    let moveText = "";
    switch (CurrentPrince.mindCurrent) {
        case Mind.SUP_3:
        case Mind.PF_3:
        case Mind.RB_4:
        case Mind.PF_7:
            const friends = getFactionAlignmentList(Alignments.Friend);
            moveText = (friends == "No friends!") ? "Travel to the site to gain the most FAVOR<br><br>You currently have no Friends. Click Yes to this action to see the outcome"
                : "Travel to the site to gain the most FAVOR.<br><br>Current Friends and number of " + currency + " gained in brackets: " + friends;
            break;
        case Mind.DS_3:
            const conspirators = getFactionAlignmentList(Alignments.Conspirator);
            moveText = (conspirators == "No conspirators!") ? "Travel to the site to gain the most SECRETS<br><br></br>You currently have no Conspirators. Click Yes to this action to see the outcome"
                : "Travel to the site to gain the most SECRETS.<br><br>Current Conspirators and number of " + currency + " gained in brackets: " + conspirators;
            break;
        default:
            moveText = "Travel to the site to gain a RELIC";
            break;
    }

    showYesNoDialog("Can I...", moveText, ActionNames.Move + currency);
}

function questionAlreadyAtSiteWithMost(item) {
    showYesNoDialog("Am I...", "Already at a site with a  " + item + "?", ActionNames.Move);
}

function questionTradeWithSite(currency) {
    let factionListFriend = getFactionAlignmentList(Alignments.Friend);
    let factionListConspirator = getFactionAlignmentList(Alignments.Conspirator);
    let tradeText = "Trade for " + currency + " on at least one card at my site?";

    switch (currency) {
        case Currency.FAVOR:
            tradeText += "<br><br>For FAVOR: " + factionListFriend;
            break;
        case Currency.SECRETS:
            tradeText += "<br><br>For SECRETS: " + factionListConspirator;
            break;
        case Currency.BOTH:
            tradeText += "<br><br>For FAVOR: " + factionListFriend + "<br><br>For SECRETS: " + factionListConspirator;
            break;
    }

    showYesNoDialog("Can I...", tradeText, ActionNames.Trade + currency);
}

function questionHolderOfBanner(bannerName) {
    showYesNoDialog("Does...", "Another player hold the " + bannerName + "?", ActionNames.Hold + bannerName);
}

function questionPayForBanner(bannerName) {
    showYesNoDialog("Can I...", "Pay for the " + bannerName + "?", ActionNames.PayFor + bannerName);
}

function questionHoldTheBanner(bannerName) {
    showYesNoDialog("Do I...", "Hold the " + bannerName + "?", ActionNames.Hold + bannerName);
}

function questionSearch() {
    showYesNoDialog("Can I...", "Search the Main Deck?", ActionNames.Search);
}

// Below are the responses to the questions
function sup_1(answer) {
    if (answer == 'Yes') {
        // Need a banner?
        showBannersDialog();
        return;
    }

    CurrentPrince.mindCurrent = Mind.SUP_1_BR;
    princeNextStep();
}

//todo rename this?
function Outcome(answer, yesMessageTitle, yesMessage, yesMind, yesSkipToNext, noMind) {
    // 'yesSkipNext' is used when a question is asked that requires another question to be asked afterwards
    // For example: Normally a question would be 'Can I move?'; if the answer is yes then the bot will move as one action.
    // If the answer to the question 'Do I rule the most sites?' is yes then another question is required that can be actioned
    if (answer == 'Yes') {
        CurrentPrince.mindCurrent = yesMind;
        if (yesSkipToNext) {
            princeNextStep();
        } else {

            showInlineMessageDialog(yesMessageTitle, yesMessage);

            CurrentPrince.currentActionNum += 1;
        }
        return;
    } else {
        CurrentPrince.mindCurrent = noMind;
        princeNextStep();
    }
}

//todo rename this?
function OutcomeBanners(answer, noMind) {
    if (answer == 'Yes') {
        showBannersDialog();
        return;
    } else {
        CurrentPrince.mindCurrent = noMind;
        princeNextStep();
    }
}

function sup_1_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.SUP_8, false, Mind.SUP_2);
}

function sup_2(answer) {
    Outcome(answer, "Muster", musterText(), Mind.SUP_2_BR, false, Mind.SUP_3);
}

function sup_2_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.SUP_8, false, Mind.SUP_3);
}

function sup_3(answer) {
    Outcome(answer, "Move", moveText(), Mind.SUP_4, false, Mind.SUP_4);
}

function sup_4(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.SUP_5, false, Mind.SUP_5);
}

function sup_5(answer) {
    Outcome(answer, "Muster", musterText(), Mind.SUP_5_BR, false, Mind.SUP_3);
}

function sup_5_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.SUP_7, false, Mind.SUP_3);
}

function sup_7(answer) {
    OutcomeBanners(answer, Mind.SUP_5);
}

function sup_8(answer) {
    OutcomeBanners(answer, Mind.SUP_8_BR);
}

function sup_8_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.SUP_7, false, Mind.SUP_3);
}

function ds_1(answer) {
    Outcome(answer, "", "", Mind.DS_8, true, Mind.DS_1_HOLD);
}

function ds_1_hold(answer) {
    Outcome(answer, "", "", Mind.DS_1_BR, true, Mind.DS_1_PAY);
}

function ds_1_br(answer) {
    Outcome(answer, "Fight", MoveToBannerAndFightMessage(BannerNames.DARKESTSECRET), Mind.DS_7, false, Mind.DS_1_PAY);
}

function ds_1_pay(answer) {
    Outcome(answer, "Pay", payMessage(Currency.SECRETS), Mind.DS_6, false, Mind.DS_2);
}

function ds_2(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.DS_2_PAY, false, Mind.DS_3);
}

function ds_2_pay(answer) {
    Outcome(answer, "Pay", payMessage(Currency.SECRETS), Mind.DS_6, false, Mind.DS_3);
}

function ds_3(answer) {
    Outcome(answer, "Move", moveText(), Mind.DS_4, false, Mind.DS_4);
}

function ds_4(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.DS_4_PAY, false, Mind.DS_5);
}

function ds_4_pay(answer) {
    Outcome(answer, "Pay", payMessage(Currency.SECRETS), Mind.DS_6, false, Mind.DS_5);
}

function ds_5(answer) {
    Outcome(answer, "Muster", musterText(), Mind.DS_5_BR, false, Mind.DS_3);
}

function ds_5_br(answer) {
    Outcome(answer, "Fight", MoveToBannerAndFightMessage(BannerNames.DARKESTSECRET), Mind.DS_7, false, Mind.DS_3);
}

function ds_6(answer) {
    Outcome(answer, "Search", searchText(), Mind.PF_7, false, Mind.RB_4);
}

function ds_7(answer) {
    Outcome(answer, "Search", searchText(), Mind.DS_8, false, Mind.DS_3);
}

function ds_8(answer) {
    Outcome(answer, "Muster", musterText(), Mind.SUP_2_BR, false, Mind.SUP_3);
}

function pf_1(answer) {
    Outcome(answer, "Search", searchText(), Mind.PF_7, false, Mind.PF_1_HOLD);
}

function pf_1_hold(answer) {
    Outcome(answer, "", "", Mind.PF_1_BR, true, Mind.PF_1_PAY);
}

function pf_1_br(answer) {
    Outcome(answer, "Fight", MoveToBannerAndFightMessage(BannerNames.PEOPLESFAVOR), Mind.PF_8, false, Mind.PF_1_PAY);
}

function pf_1_pay(answer) {
    Outcome(answer, "Pay", payMessage(Currency.FAVOR), Mind.PF_6, false, Mind.PF_2);
}

function pf_2(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.PF_2_PAY, false, Mind.PF_3);
}

function pf_2_pay(answer) {
    Outcome(answer, "Pay", payMessage(Currency.FAVOR), Mind.PF_6, false, Mind.PF_3);
}

function pf_3(answer) {
    Outcome(answer, "Move", moveText(), Mind.PF_4, false, Mind.PF_4);
}

function pf_4(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.PF_4_PAY, false, Mind.PF_5);
}

function pf_4_pay(answer) {
    Outcome(answer, "Pay", payMessage(BannerNames.PEOPLESFAVOR), Mind.PF_6, false, Mind.PF_5);
}

function pf_5(answer) {
    Outcome(answer, "Muster", musterText(), Mind.PF_5_BR, false, Mind.PF_5_BR);
}

function pf_5_br(answer) {
    Outcome(answer, "Fight", MoveToBannerAndFightMessage(BannerNames.PEOPLESFAVOR), Mind.PF_8, false, Mind.PF_3);
}

function pf_6(answer) {
    Outcome(answer, "Search", searchText(), Mind.PF_7, false, Mind.RB_4);
}

function pf_7(answer) {
    Outcome(answer, "Move", moveText(), Mind.RB_5, false, Mind.RB_5);
}

function pf_8(answer) {
    Outcome(answer, "", "", Mind.DS_8, true, Mind.PF_3);
}

function rb_1(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_1_BR);
}

function rb_1_br(answer) {
    Outcome(answer, "Fight", MoveToRelicsAndFightMessage(), Mind.RB_9, false, Mind.RB_1_MOVE);
}

function rb_1_move(answer) {
    Outcome(answer, "", "", Mind.RB_2_PAY, true, Mind.RB_2);
}

function rb_2(answer) {
    Outcome(answer, "Move", moveText(), Mind.RB_2_PAY, false, Mind.RB_3);
}

function rb_2_pay(answer) {
    Outcome(answer, "Pay", payMessage("RELIC"), Mind.RB_8, false, Mind.RB_3);
}

function rb_3(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.RB_3_PAY, false, Mind.RB_4);
}

function rb_3_pay(answer) {
    Outcome(answer, "Pay", payMessage("RELIC"), Mind.RB_8, false, Mind.RB_4);
}

function rb_4(answer) {
    Outcome(answer, "Move", moveText(), Mind.RB_5, false, Mind.RB_5);
}

function rb_5(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.RB_6, false, Mind.RB_5_MOVE);
}

function rb_5_move(answer) {
    Outcome(answer, "", "", Mind.RB_6_PAY, true, Mind.RB_6);
}

function rb_6(answer) {
    Outcome(answer, "Move", moveText(), Mind.RB_6_MOST, false, Mind.RB_7);
}

function rb_6_most(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_6_PAY);
}

function rb_6_pay(answer) {
    Outcome(answer, "Pay", payMessage("RELIC"), Mind.RB_8, false, Mind.RB_7);
}

function rb_7(answer) {
    Outcome(answer, "Muster", musterText(), Mind.RB_7_BR, false, Mind.RB_4);
}

function rb_7_br(answer) {
    Outcome(answer, "Fight", MoveToRelicsAndFightMessage(), Mind.RB_9, false, Mind.RB_4);
}

function rb_8(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.RB_8_MOST, false, Mind.RB_8_BR);
}

function rb_8_most(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_8_BR);
}

function rb_8_br(answer) {
    Outcome(answer, "Fight", MoveToRelicsAndFightMessage(), Mind.RB_9, false, Mind.RB_5);
}

function rb_9(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_9_MOVE);
}

function rb_9_move(answer) {
    Outcome(answer, "", "", Mind.RB_6_PAY, true, Mind.RB_6);
}

function payMessage(paymentType) {
    if (paymentType == Currency.FAVOR) {
        return "All " + Currency.FAVOR + " for the " + BannerNames.PEOPLESFAVOR;
    } else if (paymentType == Currency.SECRETS) {
        return "All " + Currency.SECRETS + " for the " + BannerNames.DARKESTSECRET;
    } else {
        return Currency.FAVOR + " and " + Currency.SECRETS + " for Relic (Exile may use " + Currency.SECRETS + " as " + Currency.FAVOR + ")";
    }
}

function fightText() {
    let moveText = "Move to site of a rival site with the fewest warbands and Battle!";

    if (CurrentPrince.currentThreat == "Chancellor_Cit_Successor" && CurrentGameSettings.selectedOath == "DS") {
        moveText = "Move to site of the rival with the GRAND SCEPTER and Battle!";
    }

    if (CurrentPrince.tacticsLevel > 0) moveText += "<br><br> Remember to roll " + CurrentPrince.tacticsLevel + " additional dices based on your tactics level!";
    return moveText;
}

function MoveToBannerAndFightMessage(bannerName) {
    return "Move to site of the holder of " + bannerName + " and Battle!" + getTacticsLevelText();
}

function MoveToRelicsAndFightMessage() {
    return "Move to site of the holder of the most RELICS and Battle!" + getTacticsLevelText();
}

function getTacticsLevelText() {
    return (CurrentPrince.tacticsLevel > 0) ? "<br><br> Remember to roll " + CurrentPrince.tacticsLevel + " additional dice based on your tactics level!" : "";
}

function tradeFor() {
    let factionListFriend = getFactionAlignmentList(Alignments.Friend);
    let factionListConspirator = getFactionAlignmentList(Alignments.Conspirator);

    let favorFriendMessage = (factionListFriend == 'No friends!') ? "No Friends to Trade with!<br><br>"
        : "Gain FAVOR from each empty card at your site whose suit matches: " + factionListFriend + ", gaining the amount of FAVOR listed in the brackets<br><br>";

    let favorConspiratorMessage = (factionListConspirator == 'No conspirators!') ? "No Conspirators to Trade with!"
        : "Gain SECRETS from each empty card at your site whose suit matches: " + factionListConspirator + ", gaining the amount of SECRETS listed in the brackets";

    switch (CurrentPrince.mindCurrent) {
        case Mind.SUP_4:
        case Mind.PF_2:
            //Currency.FAVOR;
            return favorFriendMessage;
        case Mind.DS_2:
            //Currency.SECRETS;
            return favorConspiratorMessage;
        case Mind.DS_4:
        case Mind.PF_4:
        case Mind.RB_3:
        case Mind.RB_5:
            //Currency.BOTH;
            return favorFriendMessage +
                favorConspiratorMessage
    }
}

function musterText() {
    return "Place one favor on each empty card at your site, starting with the card closest to the site. Gain two warbands per favor placed. Do not place favor from your Ambition box.";
}

function moveText() {
    let travelText;

    switch (CurrentPrince.mindCurrent) {
        case Mind.SUP_3:
        case Mind.PF_3:
        case Mind.RB_4:
        case Mind.PF_7:
            const friends = getFactionAlignmentList(Alignments.Friend);
            travelText = (friends == "No friends!") ? "No Friends to move to! Instead gain one FAVOR from the bank closest to the World Desk that has FAVOR"
                : "Travel to the site to gain the most FAVOR.<br><br>Current Friends and number of FAVOR gained in brackets: " + friends;
            break;
        case Mind.DS_3:
            const conspirators = getFactionAlignmentList(Alignments.Conspirator);
            travelText = (conspirators == "No conspirators!") ? "No Conspirators to move to! Instead gain one SECRET"
                : "Travel to the site to gain the most SECRETS.<br><br>Current Conspirators and number of SECRETS gained in brackets: " + conspirators;
            break;
        case Mind.RB_2:
        case Mind.RB_6:
            travelText = "Travel to a site with a RELIC<br><br>If there are no RELICS on the map, travel to a facedown site." +
                "If there are no facedown sites, gain one FAVOR from the Favor bank closest to the world deck, and travel to a site to gain the most secrets in a later Trade.<br><br>" +
                "If you travel to a facedown site without a RELIC, gain one FAVOR as decribed above";
            break;
    }

    return travelText;
}

function tradeText() {
    // if(CurrentPrince.currentFaction.alignment == Alignments.Friend){
    //     return "If your action space shows favor, gain favor from each empty card at your site whose suit matches any Friend, gaining the amount of favor in the Relationships box for that card’s suit. If it shows secrets, gain secrets in the same way, but for Conspirators. (You do not place favor or secrets on cards to trade.)";    
    // }
    return tradeFor() // "If your action space shows favor, gain favor from each empty card at your site whose suit matches any Friend, gaining the amount of favor in the Relationships box for that card’s suit. If it shows secrets, gain secrets in the same way, but for Conspirators. (You do not place favor or secrets on cards to trade.)";
}

function searchText() {
    return "Resolve the Search and Play One Card phase again. (This does not increase the number of actions you can take this turn.)";
}
