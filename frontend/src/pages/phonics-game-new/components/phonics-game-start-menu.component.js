import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SelectType from "./select-type.component";
import SelectLevel from "./select-level.component";
import SelectMode from "./select-mode.component";
import {
  fetchCurrentWordsAsync,
  getGameParams,
  onGameStart,
  setCurrentWords,
} from "../../../actions/phonicsGameActions";

const PhonicsGameStartMenu = ({
  onGameStart,
  fetchCurrentWordsAsync,
  setCurrentWords,
  getGameParams,
}) => {
  const [gameType, setGameType] = useState("");
  const [gameLevel, setGameLevel] = useState('');
  const [gameMode, setGameMode] = useState("");

  const handleOnGameStart = async () => {
    
    await fetchCurrentWordsAsync();
    const gameInfo = {
        gameLevel,
        gameMode: gameMode || "random",
      };
      console.log(gameInfo)
      getGameParams(gameLevel)
      

    setCurrentWords();
    onGameStart();
  };
  return (
    <div>
      {!gameType ? (
        <SelectType setGameType={setGameType} />
        ) : !gameLevel ? (
                <SelectLevel setGameLevel={setGameLevel} />
            ) : (gameType === 'practice' && !gameMode) ||
                    (gameType === 'pracitce' && gameLevel) ? (
                    <SelectMode setGameMode={setGameMode} />
                ) : (
                        <button onClick={() => handleOnGameStart()}>Start Game</button>
                    )};
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentWordsAsync: () => dispatch(fetchCurrentWordsAsync()),
  onGameStart: () => dispatch(onGameStart()),
  getGameParams: () => dispatch(getGameParams()),
  setCurrentWords: () => dispatch(setCurrentWords()),
});

export default connect(null, mapDispatchToProps)(PhonicsGameStartMenu);
