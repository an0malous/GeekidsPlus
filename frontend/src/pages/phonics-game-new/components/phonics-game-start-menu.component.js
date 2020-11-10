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
  
  const createGameParams = (gameType, gameLevel, gameMode, ...rest) => {
   
    const gameParams = {gameLevel, gameType, gameMode, ...rest}
    if (gameMode === 'classic'){
      gameParams.initialClock = 600
      gameParams.tick = -1
    }
    return gameParams
  };

  const handleOnGameStart = async () => {
    
    await fetchCurrentWordsAsync();
    
    const gameInfo = createGameParams(gameType, gameLevel, gameMode)
      getGameParams(gameInfo)
      

    setCurrentWords();
    onGameStart();
  };
  return (
    <div>
      {!gameType ? (
        <SelectType setGameType={setGameType} />
        ) : !gameLevel ? (
                <SelectLevel setGameLevel={setGameLevel} />
            ) : (gameLevel && !gameMode) ? (
                    <SelectMode gameType={gameType} setGameMode={setGameMode} />
                ) : (
                        <button onClick={() => handleOnGameStart()}>Start Game</button>
                    )};
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentWordsAsync: () => dispatch(fetchCurrentWordsAsync()),
  onGameStart: () => dispatch(onGameStart()),
  getGameParams: gameInfo => dispatch(getGameParams(gameInfo)),
  setCurrentWords: () => dispatch(setCurrentWords()),
});

export default connect(null, mapDispatchToProps)(PhonicsGameStartMenu);
