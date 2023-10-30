import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  /* APP NAVIGATION */
  const [infoOpen, setInfoOpen] = useState(false);
  const handleInfoOpenClick = () => {
    setInfoOpen(!infoOpen);
  };

  const [specialRulesOpen, setSpecialRulesOpen] = useState(false);
  const handleSpecialRulesOpenClick = () => {
    setSpecialRulesOpen(!specialRulesOpen);
  };

  /* COGITATION BOX INPUTS */
  const [attacks, setAttacks] = useState("");
  const handleAttacksChange = (e) => {
    const input = e.target.value;
    setAttacks(input);
  };

  const [hitsOn, setHitsOn] = useState("");
  const handleHitsOnChange = (e) => {
    const input = e.target.value;
    setHitsOn(parseInt(input));
  };

  const [woundsOn, setWoundsOn] = useState("");
  const handleWoundsOnChange = (e) => {
    const input = e.target.value;
    setWoundsOn(parseInt(input));
  };

  const [savesOn, setSavesOn] = useState("");
  const handleSavesOnChange = (e) => {
    const input = e.target.value;
    setSavesOn(parseInt(input));
  };

  const [damage, setDamage] = useState("1");
  const handleEraseDefaultDamage = () => {
    setDamage("");
  };
  const handleDamageChange = (e) => {
    const input = e.target.value;
    setDamage(input);
  };

  /* SPECIAL RULES INPUTS */
  const [criticalHitsOn, setCriticalHitsOn] = useState("6");
  const handleEraseDefaultCriticalHitsOn = () => {
    setCriticalHitsOn("");
  };
  const handleCriticalHitsOnChange = (e) => {
    const input = e.target.value;
    setCriticalHitsOn(parseInt(input));
  };

  const [criticalWoundsOn, setCriticalWoundsOn] = useState("6");
  const handleEraseDefaultCriticalWoundsOn = () => {
    setCriticalWoundsOn("");
  };
  const handleCriticalWoundsOnChange = (e) => {
    const input = e.target.value;
    setCriticalWoundsOn(parseInt(input));
  };

  const [anti, setAnti] = useState("");
  const handleAntiChange = (e) => {
    const input = e.target.value;
    setAnti(parseInt(input));
  };

  const [feelNoPain, setFeelNoPain] = useState("");
  const handleFeelNoPainChange = (e) => {
    const input = e.target.value;
    setFeelNoPain(parseInt(input));
  };

  const [sustainedHits, setSustainedHits] = useState("");
  const handleSustainedHitsChange = (e) => {
    const input = e.target.value;
    setSustainedHits(parseInt(input));
  };

  const [devastatingWounds, setDevastatingWounds] = useState(false);
  const handleDevastatingWoundsClick = () => {
    setDevastatingWounds(!devastatingWounds);
  };

  const [lance, setLance] = useState(false);
  const handleLanceClick = () => {
    setLance(!lance);
  };

  const [lethalHits, setLethalHits] = useState(false);
  const handleLethalHitsClick = () => {
    setLethalHits(!lethalHits);
  };

  const [torrent, setTorrent] = useState(false);
  const handleTorrentClick = () => {
    setTorrent(!torrent);
  };

  const [twinLinked, setTwinLinked] = useState(false);
  const handleTwinLinkedClick = () => {
    setTwinLinked(!twinLinked);
  };

  /* COGITATION LOGIC */
  /* supplementaries */
  const rollTheDice = (numberOfDice, numberNeeded) => {
    return numberOfDice * ((6 - numberNeeded + 1) / 6);
  };

  const numberNeeded = (ordinarySuccessesTreshold, critsOn) => {
    if (!critsOn) return ordinarySuccessesTreshold;
    return ordinarySuccessesTreshold < critsOn
      ? ordinarySuccessesTreshold
      : critsOn;
  };

  const sortedSuccesses = (successes, ordinarySuccessesTreshold, critsOn) => {
    if (ordinarySuccessesTreshold >= critsOn) {
      const ordinaryOnes = 0;
      const criticalOnes = successes;
      return { ordinaryOnes, criticalOnes };
    }
    const ordinaryOnes = (successes / 6) * (critsOn - 1);
    const criticalOnes = (successes / 6) * (6 - critsOn + 1);

    return { ordinaryOnes, criticalOnes };
  };

  const convertToNumber = (string) => {
    const errorMessage = "data corruption";

    //ending 1
    if (parseInt(string) * 1 == string) {
      return string;
    }

    let input = [...string];
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].toUpperCase();
    }

    //input validation
    if (!input.includes("D")) {
      return { error: errorMessage };
    }

    let numberOfAttacks = "";
    //input = [...string];

    if (input.indexOf("D") === 0 || input.indexOf("D") === 1) {
      numberOfAttacks += 1;
    }

    //input validation
    if (input.indexOf("D") > 1 && !input.includes(" ")) {
      return { error: errorMessage };
    }

    if (input.includes(" ") && input.indexOf(" ") < input.indexOf("D")) {
      for (let i = 0; i < input.indexOf(" "); i++) {
        numberOfAttacks += input[i];
      }
    }

    //input validation
    if (parseInt(numberOfAttacks) * 1 != numberOfAttacks) {
      return { error: errorMessage };
    }

    let erraticAttack = {
      numberOfDice: "",
      diceInUseAvgResult: "",
      fixedBonus: "",
    };

    //input validation
    if (
      input[input.indexOf("D") + 1] !== "3" &&
      input[input.indexOf("D") + 1] !== "6"
    ) {
      return { error: errorMessage };
    }

    if (input[input.indexOf("D") + 1] === "3")
      erraticAttack.diceInUseAvgResult = 2;
    if (input[input.indexOf("D") + 1] === "6")
      erraticAttack.diceInUseAvgResult = 3.5;

    //input validation
    if (
      parseInt(input[input.indexOf("D") - 1]) * 1 !=
        input[input.indexOf("D") - 1] &&
      input[input.indexOf("D") - 1] !== " " && // TW ||
      input.indexOf("D") !== 0
    ) {
      return { error: errorMessage };
    }

    if (input.indexOf("D") === 0) erraticAttack.numberOfDice = 1;
    if (input[input.indexOf("D") - 1] === " ") erraticAttack.numberOfDice = 1;
    if (
      parseInt(input[input.indexOf("D") - 1]) * 1 ==
      input[input.indexOf("D") - 1]
    ) {
      erraticAttack.numberOfDice = parseInt(input[input.indexOf("D") - 1]);
    }

    //ending 2
    if (
      input.length - 1 === input.indexOf("D") + 1 &&
      parseInt(input[input.length - 1]) * 1 == input[input.length - 1]
    ) {
      return (
        erraticAttack.numberOfDice *
        erraticAttack.diceInUseAvgResult *
        numberOfAttacks
      );
    }

    //input validation
    if (
      input[input.indexOf("D") + 2] !== "+" ||
      parseInt(input[input.length - 1]) * 1 != input[input.length - 1]
    ) {
      return { error: errorMessage };
    }

    //ending 3
    if (input.length - 1 > input.indexOf("D") + 1) {
      for (let i = input.indexOf("+") + 1; i < input.length; i++) {
        if (parseInt(input[i]) * 1 == input[i]) {
          erraticAttack.fixedBonus += input[i];
        } else {
          return { error: errorMessage };
        }
      }

      return (
        (erraticAttack.numberOfDice * erraticAttack.diceInUseAvgResult +
          parseInt(erraticAttack.fixedBonus)) *
        numberOfAttacks
      );
    }
  };

  let autoWounds = 0; //Lethal Hits
  let unsavableWounds = 0; //Devastating Wounds

  /* individual rolls - special rules amended */
  const hitRoll = (numberOfDice, numberNeeded) => {
    let output = numberOfDice;

    if (!torrent) {
      output = rollTheDice(numberOfDice, numberNeeded);
    }

    if (sustainedHits) {
      output =
        output +
        sortedSuccesses(output, numberNeeded, criticalHitsOn).criticalOnes *
          sustainedHits;
    }

    if (lethalHits) {
      autoWounds = sortedSuccesses(
        output,
        numberNeeded,
        criticalHitsOn
      ).criticalOnes;
      output -= autoWounds;
    }

    return output;
  };

  const woundRoll = (numberOfDice, numberNeeded) => {
    if (anti && anti < numberNeeded) numberNeeded = anti;
    if (lance && numberNeeded > 2) numberNeeded -= 1;

    let output = rollTheDice(numberOfDice, numberNeeded);

    if (devastatingWounds) {
      if (anti && anti <= criticalWoundsOn) {
        unsavableWounds = sortedSuccesses(output, woundsOn, anti).criticalOnes;
        output = sortedSuccesses(output, woundsOn, anti).ordinaryOnes;
      } else {
        unsavableWounds = sortedSuccesses(
          output,
          woundsOn,
          criticalWoundsOn
        ).criticalOnes;
        output = sortedSuccesses(
          output,
          woundsOn,
          criticalWoundsOn
        ).ordinaryOnes;
      }
    }

    if (twinLinked) {
      const unsuccessfulRolls = numberOfDice - output;
      let reRollOutput = rollTheDice(unsuccessfulRolls, numberNeeded);

      if (devastatingWounds) {
        if (anti && anti <= criticalWoundsOn) {
          unsavableWounds = sortedSuccesses(
            reRollOutput,
            woundsOn,
            anti
          ).criticalOnes;
          reRollOutput = sortedSuccesses(
            reRollOutput,
            woundsOn,
            anti
          ).ordinaryOnes;
        } else {
          unsavableWounds = sortedSuccesses(
            reRollOutput,
            woundsOn,
            criticalWoundsOn
          ).criticalOnes;
          reRollOutput = sortedSuccesses(
            reRollOutput,
            woundsOn,
            criticalWoundsOn
          ).ordinaryOnes;
        }
      }

      output += reRollOutput;
    }
    output += autoWounds;

    return output;
  };

  const saveRoll = (numberOfDice, numberNeeded) => {
    let saved = 0;

    if (savesOn) saved = rollTheDice(numberOfDice, numberNeeded);

    let output = numberOfDice - saved;

    return output;
  };

  const attackCheckout = (unsavedWounds) => {
    const damageMultiplier = convertToNumber(damage);
    if (damageMultiplier.error) {
      return { error: damageMultiplier.error };
    }

    let woundsInflicted = unsavedWounds * damageMultiplier;

    if (unsavableWounds) woundsInflicted += unsavableWounds * damageMultiplier;

    if (feelNoPain) {
      const saved = rollTheDice(woundsInflicted, feelNoPain);
      woundsInflicted -= saved;
    }

    return woundsInflicted;
  };

  /* start btn - master function */
  const getAttackResult = () => {
    const inputsToCheckValues = [
      convertToNumber(attacks),
      hitsOn,
      woundsOn,
      savesOn,
      convertToNumber(damage),
      criticalHitsOn,
      criticalWoundsOn,
      anti,
      feelNoPain,
      sustainedHits,
    ];
    const inputsToCheckKeys = [
      "attacks",
      "hits on",
      "wounds on",
      "saves on",
      "damage",
      "crit. hits on",
      "crit wounds on",
      "anti",
      "feel no pain",
      "sustained hits",
    ];
    let errors = [];
    let errorAlert = "";

    for (let i = 0; i < inputsToCheckValues.length; i++) {
      if (i === 0 || i === 4) {
        if (!inputsToCheckValues[i] || inputsToCheckValues[i].error) {
          errors.push(inputsToCheckKeys[i]);
        }
      }

      if (i === 1 && !inputsToCheckValues[i] && !torrent) {
        errors.push(inputsToCheckKeys[i]);
      }

      if (i === 2 && !inputsToCheckValues[i]) {
        errors.push(inputsToCheckKeys[i]);
      }

      if (i === 5 || i === 6) {
        if (!inputsToCheckValues[i]) {
          errors.push(inputsToCheckKeys[i]);
        }
      }

      if (i > 0 && i < 9 && i !== 4) {
        if (
          inputsToCheckValues[i] &&
          (Number(inputsToCheckValues[i]) < 2 ||
            Number(inputsToCheckValues[i]) > 6)
        ) {
          errors.push(inputsToCheckKeys[i]);
        }
      }
    }

    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i++) {
        if (i === errors.length - 1) {
          errorAlert += `${errors[i]} `;
        } else {
          errorAlert += `${errors[i]}, `;
        }
      }

      return `${errorAlert} corrupted`;
    }

    let dicePool = convertToNumber(attacks);

    dicePool = hitRoll(dicePool, numberNeeded(hitsOn, criticalHitsOn));
    dicePool = woundRoll(dicePool, numberNeeded(woundsOn, criticalWoundsOn));
    dicePool = saveRoll(dicePool, numberNeeded(savesOn));

    const result = attackCheckout(dicePool);

    return result.toFixed(2);
  };

  /* reset btn - reset */
  const handleReset = () => {
    const defaultEmptyStringStates = [
      setAttacks,
      setHitsOn,
      setWoundsOn,
      setSavesOn,
      setAnti,
      setFeelNoPain,
      setSustainedHits,
      setAttackResult,
    ];
    for (let state of defaultEmptyStringStates) state("");

    const defultFalseStates = [
      setDevastatingWounds,
      setLance,
      setLethalHits,
      setTorrent,
      setTwinLinked,
    ];
    for (let state of defultFalseStates) state(false);

    const defaultSixStates = [setCriticalHitsOn, setCriticalWoundsOn];
    for (let state of defaultSixStates) state("6");

    const defaultOneStates = [setDamage];
    for (let state of defaultOneStates) state("1");
  };

  /* RESULT */
  const [attackResult, setAttackResult] = useState("");
  const hadleAttackResultChange = () => {
    setAttackResult(getAttackResult());
  };

  return (
    <AppContext.Provider
      value={{
        infoOpen,
        handleInfoOpenClick,
        specialRulesOpen,
        handleSpecialRulesOpenClick,
        attacks,
        handleAttacksChange,
        hitsOn,
        handleHitsOnChange,
        woundsOn,
        handleWoundsOnChange,
        savesOn,
        handleSavesOnChange,
        damage,
        handleEraseDefaultDamage,
        handleDamageChange,
        criticalHitsOn,
        handleEraseDefaultCriticalHitsOn,
        handleCriticalHitsOnChange,
        criticalWoundsOn,
        handleEraseDefaultCriticalWoundsOn,
        handleCriticalWoundsOnChange,
        anti,
        handleAntiChange,
        feelNoPain,
        handleFeelNoPainChange,
        sustainedHits,
        handleSustainedHitsChange,
        devastatingWounds,
        handleDevastatingWoundsClick,
        lance,
        handleLanceClick,
        lethalHits,
        handleLethalHitsClick,
        torrent,
        handleTorrentClick,
        twinLinked,
        handleTwinLinkedClick,
        attackResult,
        hadleAttackResultChange,
        handleReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
