export default function Scoreboard(props){
    return (
        <div className="rounded-xl h-1/4 w-4/6 border-4 border-gray-400 flex justify-between py-4 px-6">
            <div className="font-bold text-2xl leading-none">
                ROCK  <br />
                PAPER <br />
                SCISSORS <br />
                LIZARD <br />
                SPOCK <br />
            </div>
            <div className="h-full w-1/4 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg flex flex-col justify-around items-center p-3">
                <div className="font-semibold text-blue-900 text-sm">S C O R E</div>
                <div className="font-bold text-gray-700 text-5xl">{props.scoreValue}</div>
            </div>
        </div>
    )

}