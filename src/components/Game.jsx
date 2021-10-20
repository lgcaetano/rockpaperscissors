import PlayerOptions from "./PlayerOptions"
import Scoreboard from "./Scoreboard"
import Round from "./Round"
import { useEffect, useState } from "react"


const options = ['scissors', 'paper', 'rock', 'lizard', 'spock']

function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const gameRules = {
    scissors:['paper', 'lizard'], 
    paper:['rock','spock'],
    rock:['scissors', 'lizard'],
    lizard: ['spock', 'paper'],
    spock:['scissors', 'rock'],
}

export default function Game(props){

    const [display, setDisplay] = useState("options")
    const [playerOption, setPlayerOption] = useState("")
    const [computerOption, setComputerOption] = useState("")
    const [roundResult, setRoundResult] = useState("")
    const [score, setScore] = useState(0)

    function getResult(){
        if(playerOption === computerOption)
            return 'draw'
        if(gameRules[playerOption].includes(computerOption))
            return 'win'
        return 'loss'
    }

    function updateScore(result){
        if(result === 'win'){
            localStorage.setItem("rpsScore", score + 1)
            return setScore(score + 1)
        } 
        else if(result ==='loss'){
            localStorage.setItem("rpsScore", score - 1)
            return setScore(score - 1)
        }
}

    useEffect(() => {
        let recordedScore = parseInt(localStorage.getItem("rpsScore") ?? 0)
        setScore(isNaN(recordedScore) ? 0 : recordedScore)
    }, [])



    useEffect(() => {
        if(playerOption && computerOption){
            let newResult = getResult()
            updateScore(newResult)
            setRoundResult(newResult)
        }
    }, [computerOption])


    function toggleDisplay(){
        setDisplay(display === "options" ? "round" : "options")
    }

    function playRound(value){
        toggleDisplay()
        setPlayerOption(value)
        setTimeout(() => {
            setComputerOption(options[randomInteger(0, 4)])
        }, 1000)
    }

    function goBack(){
        toggleDisplay()
        setPlayerOption("")
        setComputerOption("")
        setRoundResult("")
    }

    return (
        <div className="w-10/12 h-full bg-transparent flex flex-col justify-around items-center">
            <Scoreboard scoreValue={score}></Scoreboard>
            <PlayerOptions clickFunction={playRound} display={display === "options"}></PlayerOptions>
            <Round display={display === "round"} goBackFunction={goBack}
            computerOption={computerOption} playerOption={playerOption} result={roundResult}></Round>
        </div>
    )
}