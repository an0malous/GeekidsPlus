import React, { useState } from "react";
import { connect } from "react-redux";
import SelectType from "./select-type.component";
import SelectLevel from "./select-level.component";
import SelectMode from "./select-mode.component";
import {
  fetchCurrentWords,
  getGameParams,
  onGameStart,
} from "../../../actions/phonicsGameActions";

const PhonicsGameStartMenu = ({
  onGameStart,
  fetchCurrentWords,
  getGameParams,
}) => {
  const [gameType, setGameType] = useState("");
  const [gameLevel, setGameLevel] = useState('');
  const [gameMode, setGameMode] = useState("");
  
  const createGameParams = (gameType, gameLevel, gameMode, ...rest) => {
   
    const gameParams = {gameLevel, gameType, gameMode, ...rest}
    gameParams.initialClock = 0;
    gameParams.tick = 1
    if (gameMode === 'classic'){
      gameParams.initialClock = 600
      gameParams.tick = -1
    }
    return gameParams
  };

  const handleOnGameStart = async () => {
    
    await fetchCurrentWords();
    
    const gameInfo = createGameParams(gameType, gameLevel, gameMode)
      getGameParams(gameInfo)
      
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
  fetchCurrentWords: () => dispatch(fetchCurrentWords()),
  onGameStart: () => dispatch(onGameStart()),
  getGameParams: gameInfo => dispatch(getGameParams(gameInfo))
});

export default connect(null, mapDispatchToProps)(PhonicsGameStartMenu);
