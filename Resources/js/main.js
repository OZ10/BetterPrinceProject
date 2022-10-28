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
    None: "none",
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
    SUP_6: "sup_6",
    SUP_7: "sup_7",
    SUP_8: "sup_8",
    SUP_8_BR: "sup_8_br",
    DS_1: "ds_1",
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
    RB_1_BR: "rb_1_br",
    RB_2: "rb_2",
    RB_2_PAY: "rb_2_pay",
    RB_3: "rb_3",
    RB_3_PAY: "rb_3_pay",
    RB_4: "rb_4",
    RB_5: "rb_5",
    RB_6: "rb_6",
    RB_6_MOST: "rb_6_most",
    RB_6_PAY: "rb_6_pay",
    RB_7: "rb_7",
    RB_7_BR: "rb_7_br",
    RB_8: "rb_8",
    RB_8_MOST: "rb_8_most",
    RB_8_BR: "rb_8_br",
    RB_9: "rb_9"
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
        this.mindStart = mindStart;
        this.mindCurrent = mindCurrent;
        this.status = status;
        this.numwarbands = numwarbands;
        this.currentThreat = currentThreat;
        this.faction_Discord = faction_Discord,
            this.faction_Arcane = faction_Arcane,
            this.faction_Order = faction_Order,
            this.faction_Hearth = faction_Hearth,
            this.faction_Beast = faction_Beast,
            this.faction_Nomad = faction_Nomad,
            this.numActions = numActions,
            this.currentActionNum = currentActionNum,
            this.princeNumber = princeNumber,
            this.currentFaction = currentFaction;
        this.factions = new Array(0);
        this.factions.push(this.faction_Arcane, this.faction_Beast, this.faction_Discord, this.faction_Hearth, this.faction_Nomad, this.faction_Order);
        this.stepCount = 1;
    }

    stepCount;
    factions;

    getFactionAlignmentList(alignment) {
        let list = "";
        this.factions.forEach(function (faction) {
            if (faction.alignment == alignment) {
                list += faction.name + "(" + faction.level + ") ";
            }
        })
        return list.toUpperCase();
    }
}

let Prince1;
let CurrentPrince;
let Princes = new Array(1);

document.addEventListener("DOMContentLoaded", () => {
    Prince1 = createNewPrince(getNextPrinceName(1), Status.Chancellor, 1);
    CurrentPrince = Prince1;
    document.getElementById("PrinceName" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.name;
    document.getElementById("PrinceFavor" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.numFavor;
    document.getElementById("PrinceStatus" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.status;
    document.getElementById("PrinceColumn" + CurrentPrince.princeNumber).classList.add("chancellor");

    Princes[1] = Prince1;
});

function createNewPrince(name, status, number) {
    return new Prince(name,
        2,
        1,
        Mind.SUP_1,
        Mind.SUP_1,
        status,
        2,
        Threat.None,
        new Faction(Factions.Discord, 1, Alignments.None),
        new Faction(Factions.Arcane, 1, Alignments.None),
        new Faction(Factions.Order, 1, Alignments.None),
        new Faction(Factions.Hearth, 1, Alignments.None),
        new Faction(Factions.Beast, 1, Alignments.None),
        new Faction(Factions.Nomad, 1, Alignments.None),
        0, 0,
        number,
        null);
}

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

function changeRound() {
    let round = getRoundNumber();
    round++;
    document.getElementById("roundnumber").innerHTML = round++

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

function addNewPrince() {

    let nextPrinceNumber = getNextPrinceNumber();

    let newPrince = createNewPrince(getNextPrinceName(nextPrinceNumber), Status.Exile, nextPrinceNumber);
    Princes[nextPrinceNumber] = newPrince;

    let cloneNode = document.getElementById("PrinceColumn1").cloneNode(true);
    cloneNode.Id = "PrinceColumn" + nextPrinceNumber;

    cloneNode.classList.remove("chancellor");
    cloneNode.classList.add("exile" + nextPrinceNumber);

    changeNodeIdAndValue(cloneNode, "PrinceName1", "PrinceName" + nextPrinceNumber, newPrince.name);
    changeNodeIdAndValue(cloneNode, "PrinceStatus1", "PrinceStatus" + nextPrinceNumber, newPrince.status);
    changeNodeIdAndValue(cloneNode, "PrinceFavor1", "PrinceFavor" + nextPrinceNumber, newPrince.numFavor);
    changeNodeIdAndValue(cloneNode, "PrinceSecret1", "PrinceSecret" + nextPrinceNumber, newPrince.numSecrets);
    //changeNodeIdAndValue(cloneNode, "PrinceTurnNumber1", "PrinceTurnNumber" + nextPrinceNumber, newPrince.numActions);
    changeNodeIdAndValue(cloneNode, "PrinceTotalTurns1", "PrinceTotalTurns" + nextPrinceNumber, newPrince.currentActionNum);
    changeNodeIdAndValue(cloneNode, "PrinceArcaneLevel1", "PrinceArcaneLevel" + nextPrinceNumber, newPrince.faction_Arcane.level);
    changeNodeIdAndValue(cloneNode, "PrinceBeastLevel1", "PrinceBeastLevel" + nextPrinceNumber, newPrince.faction_Beast.level);
    changeNodeIdAndValue(cloneNode, "PrinceDiscordLevel1", "PrinceDiscordLevel" + nextPrinceNumber, newPrince.faction_Discord.level);
    changeNodeIdAndValue(cloneNode, "PrinceHearthLevel1", "PrinceHearthLevel" + nextPrinceNumber, newPrince.faction_Hearth.level);
    changeNodeIdAndValue(cloneNode, "PrinceNomadLevel1", "PrinceNomadLevel" + nextPrinceNumber, newPrince.faction_Nomad.level);
    changeNodeIdAndValue(cloneNode, "PrinceOrderLevel1", "PrinceOrderLevel" + nextPrinceNumber, newPrince.faction_Order.level);

    // buttons
    changeNodeIdAndValue(cloneNode, "PrinceStartTurn1", "PrinceStartTurn" + nextPrinceNumber, "Start Turn");
    // changeNodeIdAndValue(cloneNode, "PrinceNextStep1", "PrinceNextStep" + nextPrinceNumber, "Next Step");
    let button = getElementById(cloneNode, "PrinceStartTurn" + nextPrinceNumber)
    button.disabled = true;
    // button = getElementById(cloneNode, "PrinceNextStep" + nextPrinceNumber)
    // button.disabled = true;

    // steps
    changeNodeIdAndValue(cloneNode, "steps_Prince1", "steps_Prince" + nextPrinceNumber, "");

    document.getElementById("Princes").appendChild(cloneNode);

    //alert(princeColumn2.getElementById("PrinceName").innerHTML);
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
    if (Princes.length == 2) { return CurrentPrince };

    let startNum = (CurrentPrince.princeNumber == Princes.length) ? 0 : CurrentPrince.princeNumber;

    for (let count = startNum; count < Princes.length; count++) {
        const prince = Princes[count];
        if (prince.princeNumber != startNum) {
            return prince;
        } else if (count == Princes.length - 1) { count = 0 }
    }
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
    newNode.innerHTML = newValue;
}

function test() {
    let cloneNode = document.getElementById("step_YesNo").cloneNode(true);
    cloneNode.classList.remove("d-none");
    getElementById(cloneNode, "accord_btn_Prince1_step1").innerHTML = "Can I.....";
    getElementById(cloneNode, "accord_body_Prince1_step1").textContent = "Muster?";

    document.getElementById("accord_Prince1").appendChild(cloneNode);
}

function princeStartTurn() {
    document.getElementById("addPrinceButton").disabled = true;
    assessThreat();
}

function assessThreat() {
    if (CurrentPrince.status == Status.Chancellor) {
        const messageBox = new bootstrap.Modal(
            document.getElementById("assessThreatDialog")
        );
        messageBox.show();
    } else {
        searchAndPlay();
    }
}

function assessthreatYesNoClick(answer) {
    if (answer == 'Yes') {
        const messageBox = new bootstrap.Modal(
            document.getElementById("threatDialog")
        );
        messageBox.show();
    } else {
        searchAndPlay();
    }
}

function threatClick(answer) {
    CurrentPrince.mindStart = answer;
    CurrentPrince.mindCurrent = answer;

    switch (answer) {
        case Mind.SUP_1:
            CurrentPrince.currentThreat = Threat.None
            break;
    }

    searchAndPlay();
}

function searchAndPlay() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("searchAndPlayDialog")
    );
    messageBox.show();

    //CurrentPrince.stepCount = CurrentPrince.currentActionNum;
}

function cleanUp() {
    const messageBox = new bootstrap.Modal(
        document.getElementById("messageBox")
    );

    document.getElementById("messageBoxTitle").innerHTML =
        "Cleanup";
    document.getElementById("messageBoxBody").innerHTML =
        "Return any favor on cards to their matching favor banks. If you’re the Chancellor, do not hold the Oathkeeper title, and have a Threat but no Successor, each Exile in turn order, except an Exile who meets the Successor goal, may peek at the bottom relic of the relic deck and may take it to become a Citizen.";
    messageBox.show();

    // Whole Step node
    // let newStepNode = document.getElementById("step_Ok").cloneNode(true);
    // newStepNode.id = "step_Ok" + CurrentPrince.stepCount;
    // // Unhide the step
    // newStepNode.classList.remove("d-none");

    // // Step button node
    // let stepBtnName = getStepNodeId("step_Ok_accord_btn_Prince1_step1"); //"accord_btn_Prince1_step1";

    // changeNodeIdAndValue(newStepNode, "step_Ok_accord_btn_Prince1_step1", stepBtnName, "CLEANUP");

    // // Step Detail node
    // let stepName = getStepNodeId("step_Ok_accord_Prince1_step1");
    // changeNodeId(newStepNode, "step_Ok_accord_Prince1_step1", stepName);

    // // Change button target
    // getElementById(newStepNode, stepBtnName).dataset.bsTarget = "#" + stepName;

    // // Title Step node
    // // let stepTitleName = getStepNodeId("step_Ok_accord_title_Prince1_step1");
    // // changeNodeIdAndValue(newStepNode, "step_Ok_accord_title_Prince1_step1", stepTitleName, title);

    // // Body Step node
    // let stepBodyName = "step_Ok_accord_body_Prince1_step1";
    // changeNodeIdAndValue(newStepNode, "step_Ok_accord_body_Prince1_step1", stepBodyName, "Return any favor on cards to their matching favor banks. If you’re the Chancellor, do not hold the Oathkeeper title, and have a Threat but no Successor, each Exile in turn order, except an Exile who meets the Successor goal, may peek at the bottom relic of the relic deck and may take it to become a Citizen.");

    // // Add new step
    let princeSteps = document.getElementById("steps_Prince" + CurrentPrince.princeNumber);
    princeSteps.innerHTML = "";
    // princeSteps.appendChild(newStepNode);

    CurrentPrince = getNextAvailablePrince();
    enableDisableTurnButtons();
}

function enableDisableTurnButtons() {
    // Enabled or disable turns buttons based on the current prince
    let buttons = document.querySelectorAll("[id^='PrinceStartTurn'], [id^='PrinceNextStep']");
    buttons.forEach(
        function (b) {
            // Disable the button if the suffix number is not equal to the Current Prince number
            b.disabled = (b.id.slice(-1) != CurrentPrince.princeNumber) ? true : false;
        })
}

function searchAndPlayClick(selectedFaction) {
    // todo refactor this
    CurrentPrince.currentActionNum = 1;
    //document.getElementById("PrinceTurnNumber" + CurrentPrince.princeNumber).innerHTML = 1;
    switch (selectedFaction) {
        case Factions.Arcane:
            CurrentPrince.faction_Arcane.level += 1
            CurrentPrince.numActions = CurrentPrince.faction_Arcane.level
            document.getElementById("PrinceTotalTurns" + CurrentPrince.princeNumber).innerHTML = "#" + CurrentPrince.faction_Arcane.level;
            document.getElementById("PrinceArcaneLevel" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.faction_Arcane.level;
            alignFaction(CurrentPrince.faction_Arcane);
            CurrentPrince.currentFaction = CurrentPrince.faction_Arcane;
            break;
        case Factions.Beast:
            CurrentPrince.faction_Beast.level += 1
            CurrentPrince.numActions = CurrentPrince.faction_Beast.level
            document.getElementById("PrinceTotalTurns" + CurrentPrince.princeNumber).innerHTML = "#" + CurrentPrince.faction_Beast.level;
            document.getElementById("PrinceBeastLevel" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.faction_Beast.level;
            alignFaction(CurrentPrince.faction_Beast);
            CurrentPrince.currentFaction = CurrentPrince.faction_Beast;
            break;
        case Factions.Discord:
            CurrentPrince.faction_Discord.level += 1
            CurrentPrince.numActions = CurrentPrince.faction_Discord.level
            document.getElementById("PrinceTotalTurns" + CurrentPrince.princeNumber).innerHTML = "#" + CurrentPrince.faction_Discord.level;
            document.getElementById("PrinceDiscordLevel" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.faction_Discord.level;
            alignFaction(CurrentPrince.faction_Discord);
            CurrentPrince.currentFaction = CurrentPrince.faction_Discord;
            break;
        case Factions.Hearth:
            CurrentPrince.faction_Hearth.level += 1
            CurrentPrince.numActions = CurrentPrince.faction_Hearth.level
            document.getElementById("PrinceTotalTurns" + CurrentPrince.princeNumber).innerHTML = "#" + CurrentPrince.faction_Hearth.level;
            document.getElementById("PrinceHearthLevel" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.faction_Hearth.level;
            alignFaction(CurrentPrince.faction_Hearth);
            CurrentPrince.currentFaction = CurrentPrince.faction_Hearth;
            break;
        case Factions.Nomad:
            CurrentPrince.faction_Nomad.level += 1
            CurrentPrince.numActions = CurrentPrince.faction_Nomad.level
            document.getElementById("PrinceTotalTurns" + CurrentPrince.princeNumber).innerHTML = "#" + CurrentPrince.faction_Nomad.level;
            document.getElementById("PrinceNomadLevel" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.faction_Nomad.level;
            alignFaction(CurrentPrince.faction_Nomad);
            CurrentPrince.currentFaction = CurrentPrince.faction_Nomad;
            break;
        case Factions.Order:
            CurrentPrince.faction_Order.level += 1
            CurrentPrince.numActions = CurrentPrince.faction_Order.level
            document.getElementById("PrinceTotalTurns" + CurrentPrince.princeNumber).innerHTML = "#" + CurrentPrince.faction_Order.level;
            document.getElementById("PrinceOrderLevel" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.faction_Order.level;
            alignFaction(CurrentPrince.faction_Order);
            CurrentPrince.currentFaction = CurrentPrince.faction_Order;
            break;
    }

    addTurnNumberLabel()
    princeNextStep();
}

function addTurnNumberLabel() {
    let turnNumberLabel = document.getElementById("prince1_turnNumber1").cloneNode()
    turnNumberLabel.classList.remove("d-none")
    turnNumberLabel.id = "prince1_turnNumber1".replace("prince1", "prince" + CurrentPrince.princeNumber).replace("turnNumber1", "turnNumber" + CurrentPrince.currentActionNum)
    turnNumberLabel.innerHTML = "Turn #" + CurrentPrince.currentActionNum

    let ele = getElementById(document, "steps_Prince" + CurrentPrince.princeNumber)
    ele.appendChild(turnNumberLabel)
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
    // const messageBox = new bootstrap.Modal(
    //     document.getElementById("yesNo")
    // );

    // document.getElementById("yesNoTitle").innerHTML =
    //     title;
    // document.getElementById("yesNoMessage").innerHTML =
    //     message;
    // messageBox.show();

    //let CurrentPrince.stepCount = CurrentPrince.currentActionNum;

    // Whole Step node
    let newStepNode = document.getElementById("step_YesNo").cloneNode(true);
    newStepNode.id = "step_YesNo" + CurrentPrince.stepCount;
    // Unhide the step
    newStepNode.classList.remove("d-none");

    // Step button node
    let stepBtnName = getStepNodeId("step_YesNo_accord_btn_Prince1_step1"); //"accord_btn_Prince1_step1";
    //nodeNameBtn = nodeNameBtn.replace("Prince1", "Prince" + CurrentPrince.princeNumber);
    //nodeNameBtn = nodeNameBtn.replace("step1", "step" + CurrentPrince.stepCount);

    changeNodeIdAndValue(newStepNode, "step_YesNo_accord_btn_Prince1_step1", stepBtnName, actionName);

    // Step Detail node
    let stepName = getStepNodeId("step_YesNo_accord_Prince1_step1");
    // nodeName = nodeName.replace("Prince1", "Prince" + CurrentPrince.princeNumber);
    // nodeName = nodeName.replace("step1", "step" + CurrentPrince.stepCount);

    changeNodeId(newStepNode, "step_YesNo_accord_Prince1_step1", stepName);
    //getElementById(cloneNode, nodeName).classList.remove("collapse");

    // Change button target
    getElementById(newStepNode, stepBtnName).dataset.bsTarget = "#" + stepName;

    // Title Step node
    let stepTitleName = getStepNodeId("step_YesNo_accord_title_Prince1_step1");
    // nodeName = nodeName.replace("Prince1", "Prince" + CurrentPrince.princeNumber);
    // nodeName = nodeName.replace("step1", "step" + CurrentPrince.stepCount);

    changeNodeIdAndValue(newStepNode, "step_YesNo_accord_title_Prince1_step1", stepTitleName, title);

    // Body Step node
    let stepBodyName = "step_YesNo_accord_body_Prince1_step1";
    // nodeName = nodeName.replace("Prince1", "Prince" + CurrentPrince.princeNumber);
    // nodeName = nodeName.replace("step1", "step" + CurrentPrince.stepCount);

    changeNodeIdAndValue(newStepNode, "step_YesNo_accord_body_Prince1_step1", stepBodyName, message);

    //getElementById(cloneNode, "accord_btn_Prince1_step1").innerHTML = title;
    //getElementById(cloneNode, "accord_body_Prince1_step1").textContent = message;

    // Add new step
    let princeSteps = document.getElementById("steps_Prince" + CurrentPrince.princeNumber);
    princeSteps.appendChild(newStepNode);

    ShowHideSteps(princeSteps, stepName)

    CurrentPrince.stepCount += 1;
}

function ShowHideSteps(princeSteps, stepName) {
    let allSteps = princeSteps.querySelectorAll("[id^='step_YesNo_accord_Prince" + CurrentPrince.princeNumber + "_step'], [id^='step_Ok_accord_Prince" + CurrentPrince.princeNumber + "_step']")
    allSteps.forEach(function (step) {
        if (stepName == step.id) {
            step.classList.remove("collapse")
        } else {
            step.classList.add("collapse")
        }
    })

    // todo find a decent method to disable accordions
    // allSteps = princeSteps.querySelectorAll("[id^='step_YesNo_accord_btn_Prince" + CurrentPrince.princeNumber + "_step'], [id^='step_Ok_accord_btn_Prince" + CurrentPrince.princeNumber + "_step']")
    // allSteps.forEach(function (step) {
    //     if (stepName == step.id) {
    //         step.disabled = false;
    //     } else {
    //         step.disabled = true;
    //     }
    // })
}

function getStepNodeId(oldId) {
    return oldId.replace("Prince1", "Prince" + CurrentPrince.princeNumber).replace("step1", "step" + CurrentPrince.stepCount);
}

function showMessageDialog(title, message) {
    // const messageBox = new bootstrap.Modal(
    //     document.getElementById("messageBox")
    // );

    // document.getElementById("messageBoxTitle").innerHTML =
    //     title;
    // document.getElementById("messageBoxBody").innerHTML =
    //     message;
    // messageBox.show();

    // Whole Step node
    let newStepNode = document.getElementById("step_Ok").cloneNode(true);
    newStepNode.id = "step_Ok" + CurrentPrince.stepCount;
    // Unhide the step
    newStepNode.classList.remove("d-none");

    // Step button node
    let stepBtnName = getStepNodeId("step_Ok_accord_btn_Prince1_step1"); //"accord_btn_Prince1_step1";

    changeNodeIdAndValue(newStepNode, "step_Ok_accord_btn_Prince1_step1", stepBtnName, "OUTCOME");

    // Step Detail node
    let stepName = getStepNodeId("step_Ok_accord_Prince1_step1");
    changeNodeId(newStepNode, "step_Ok_accord_Prince1_step1", stepName);

    // Change button target
    getElementById(newStepNode, stepBtnName).dataset.bsTarget = "#" + stepName;

    // Title Step node
    let stepTitleName = getStepNodeId("step_Ok_accord_title_Prince1_step1");
    changeNodeIdAndValue(newStepNode, "step_Ok_accord_title_Prince1_step1", stepTitleName, title);

    // Body Step node
    let stepBodyName = "step_Ok_accord_body_Prince1_step1";
    changeNodeIdAndValue(newStepNode, "step_Ok_accord_body_Prince1_step1", stepBodyName, message);

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
    addTurnNumberLabel();
    princeNextStep();
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

function delay() {
    return new Promise(resolve => setTimeout(resolve, 500));
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
    showYesNoDialog("Can I...", "Move to a site to trade for the most " + currency + "?", ActionNames.Move);
}

function questionTradeWithSite(currency) {
    showYesNoDialog("Can I...", "Trade for " + currency + " on at least one card at my site?", ActionNames.Trade);
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

    // await delay();
    // showYesNoDialog("Am I...", "Battle Ready?", resolve)

    CurrentPrince.mindCurrent = Mind.SUP_1_BR;
    princeNextStep();
    // await new Promise((resolve) => showYesNoDialog("Am I...", "Battle Ready?", resolve));
    // alert("fin!");
    //SUP_2();
    // return;
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
            showMessageDialog(yesMessageTitle, yesMessage)

            //todo factor this
            CurrentPrince.currentActionNum += 1;
            // if (CurrentPrince.currentActionNum <= CurrentPrince.numActions) {
            //     document.getElementById("PrinceTurnNumber" + CurrentPrince.princeNumber).innerHTML = CurrentPrince.currentActionNum;
            // }

            // Remove existing steps and move next
            //document.getElementById("steps_Prince" + CurrentPrince.princeNumber).innerHTML = "";
            //princeNextStep();
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
    // if (answer == 'Yes') {
    //     showMessageDialog("Fight", fightText())
    //     CurrentPrince.mindCurrent = Mind.SUP_8;
    //     // princeNextStep();
    //     return;
    // }

    // CurrentPrince.mindCurrent = Mind.SUP_2;
    // princeNextStep();
}

function tradeFor() {
    switch (CurrentPrince.mindCurrent) {
        case Mind.SUP_4:
        case Mind.PF_2:
            //Currency.FAVOR;
            //return "Gain FAVOR from each empty card at your site whose suit matches any Friend, gaining the amount of FAVOR in the Relationships box for that card’s suit";
            return "Gain FAVOR from each empty card at your site whose suit matches: " + CurrentPrince.getFactionAlignmentList(Alignments.Friend) + ", gaining the amount of FAVOR listed in the backets ()";
        case Mind.DS_2:
            //Currency.SECRETS;
            return "Gain SECRETS from each empty card at your site whose suit matches: " + CurrentPrince.getFactionAlignmentList(Alignments.Conspirator) + ", gaining the amount of SECRETS listed in the backets ()";
        case Mind.DS_4:
        case Mind.PF_4:
        case Mind.RB_3:
        case Mind.RB_5:
            //Currency.BOTH;
            return "Gain FAVOR from each empty card at your site whose suit matches: " + CurrentPrince.getFactionAlignmentList(Alignments.Friend) + ", gaining the amount of FAVOR listed in the backets ()" +
                "Gain SECRETS from each empty card at your site whose suit matches: " + CurrentPrince.getFactionAlignmentList(Alignments.Conspirator) + ", gaining the amount of SECRETS listed in the backets ()";
        //return "Gain FAVOR & SECRETS from each empty card at your site whose suit matches any Friend or Conspirators, gaining the amount of FAVOR or SECRETS in the Relationships box for that card’s suit";
    }
}

function fightText() {
    return "Travel and fight";
}

function musterText() {
    return "Place one favor on each empty card at your site, starting with the card closest to the site. Gain two warbands per favor placed. Do not place favor from your Ambition box.";
}

function moveText() {
    return "Travel to the site that best meets the condition listed on your action space.";
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
    // if (answer == "Yes") {
    //     showMessageDialog("Banners", "Yo")
    //     // CurrentPrince.mindCurrent = Mind.SUP_2_BR;
    //     return;
    // }

    // CurrentPrince.mindCurrent = Mind.SUP_5;
    // princeNextStep();
}

function sup_8(answer) {
    OutcomeBanners(answer, Mind.SUP_8_BR);
}

function sup_8_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.SUP_7, false, Mind.SUP_3);
}

function ds_1(answer) {
    Outcome(answer, "", "", Mind.DS_8, true, Mind.DS_1_BR);
    // if (answer == "Yes") {
    //     CurrentPrince.mindCurrent = Mind.DS_8;
    //     princeNextStep();
    //     return;
    // }

    // CurrentPrince.mindCurrent = Mind.DS_1_BR;
    // princeNextStep();
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
    Outcome(answer, "Search", searchText(), Mind.PF_7, false, Mind.PF_1_BR);
    // if (answer == "Yes") {
    //     CurrentPrince.mindCurrent = Mind.PF_7;
    //     princeNextStep();
    //     return;
    // }

    // CurrentPrince.mindCurrent = Mind.PF_1_BR;
    // princeNextStep();
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
    Outcome(answer, "Trade", "With " + Currency.FAVOR + " and " + Currency.SECRETS, Mind.PF_4_PAY, false, Mind.PF_5);
}

function pf_4_pay(answer) {
    Outcome(answer, "Pay", payMessage(BannerNames.PEOPLESFAVOR), Mind.PF_6, false, Mind.PF_5);
}

function pf_5(answer) {
    Outcome(answer, "Muster", musterText(), Mind.PF_5_BR, false, Mind.PF_3);
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
    // if (answer == "Yes") {
    //     CurrentPrince.mindCurrent = Mind.DS_8;
    //     princeNextStep();
    //     return;
    // }

    // CurrentPrince.mindCurrent = Mind.PF_3;
    // princeNextStep();
}

function rb_1(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_1_BR);
}

function rb_1_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.RB_9, false, Mind.RB_2);
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
    Outcome(answer, "Trade", tradeText(), Mind.RB_6, false, Mind.RB_6);
}

function rb_6(answer) {
    Outcome(answer, "Move", moveText(), Mind.RB_6_MOST, false, Mind.RB_7);
}

function rb_6_most(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_6_PAY);
}

function rb_6_pay(answer) {
    Outcome(answer, "Pay", payMessage("RELIC"), Mind.RB_8, true, Mind.RB_7);
}

function rb_7(answer) {
    Outcome(answer, "Muster", musterText(), Mind.RB_7_BR, false, Mind.RB_4);
}

function rb_7_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.RB_9, false, Mind.RB_4);
}

function rb_8(answer) {
    Outcome(answer, "Trade", tradeText(), Mind.RB_8_MOST, false, Mind.RB_8_BR);
}

function rb_8_most(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_8_BR);
}

function rb_8_br(answer) {
    Outcome(answer, "Fight", fightText(), Mind.RB_9, false, Mind.RB_5);
}

function rb_9(answer) {
    Outcome(answer, "", "", Mind.SUP_5, true, Mind.RB_6);
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

function MoveToBannerAndFightMessage(bannerName) {
    return "Move to site of the holder of " + bannerName + " and Battle!";
}
