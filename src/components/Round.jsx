import Option from "./Option"

const messages = {
    win: "YOU WON!",
    loss: "YOU LOST",
    draw: "DRAW"
}

const resultClasses = ['translate-y-screen', '']

export default function Round (props){

    const optionPlaceholder = <div className="w-56 h-56 rounded-full bg-gray-900 flex justify-center items-center">
        <div className="border-8 w-28 h-28 rounded-full border-gray-700 border-t-white animate-spin"></div>
    </div>

    return (
        <div className={` flex w-full absolute justify-around items-center
         mt-28 transition-all ${props.display ? "" : "-translate-x-screen"}`}>


            <div className="w-80 h-80 flex flex-col justify-around items-center">
                <div className="font-semibold text-xl">YOUR CHOICE</div>
                <Option clickFunction={() => {}} size="large" value={props.playerOption} position="relative"
                winner={props.result === "win"}></Option>
            </div>

            <div className={`transition-all w-52 font-extrabold h-52 flex flex-col justify-around items-center
            ${props.result ? resultClasses[1] : resultClasses[0]} text-5xl`}>
                <h1>{messages[props.result]}</h1>
                <button onClick={props.goBackFunction}
             className="bg-gradient-to-br from-gray-50 to-gray-200 px-4 py-2 rounded-lg 
            text-2xl text-blue-900 transition-all transform hover:scale-110 font-bold">PLAY AGAIN</button>
            </div>

            <div className="w-80 h-80 flex flex-col justify-around items-center">
                <div className="font-semibold text-xl">HOUSE CHOICE</div>    
                {props.computerOption ?
                 <Option clickFunction={() => {}} size="large" value={props.computerOption} position="relative"
                 winner={props.result === "loss"}></Option> : 
                 optionPlaceholder}
            </div>

        </div>
    )
}