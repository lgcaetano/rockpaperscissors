
const outerBorderShadow = {
    scissors: 'border-yellow-700',
    paper: 'border-blue-700',
    rock: 'border-red-700',
    lizard: 'border-purple-700',
    spock: 'border-blue-600',
}

const positions = {
    scissors: 'left-0 top-2/5 adjust-margin-top adjust-margin-left',
    paper: 'top-0 left-1/2 adjust-margin-top adjust-margin-left',
    rock: 'right-0 top-2/5 adjust-margin-top adjust-margin-right',
    lizard: 'bottom-0 left-1/4 adjust-margin-bottom adjust-margin-left',
    spock: 'bottom-0 right-1/4 adjust-margin-bottom adjust-margin-right',
}

const sizes = {
    small: 'w-28 h-28',
    large: 'w-56 h-56'
}

export default function Option(props){




    return (

        <button onClick={() => props.clickFunction(props.value)} className={`${sizes[props.size]} rounded-full bg-${props.value} flex justify-center bg-blue
         items-center transform hover:scale-105 cursor-pointer transition-all border-b-4 ${outerBorderShadow[props.value]}
            absolute ${props.position ?? positions[props.value]} ${props.winner ? "winner" : ""}`}>
            <div className="rounded-full bg-gray-300 w-5/6 h-5/6 flex justify-center items-center
            border-t-4 border-gray-400">
                <div className="icon-container w-4/6 h-4/6 flex justify-center items-center">
                    <img src={props.value ? `images/icon-${props.value}.svg` : ""} alt="" />
                </div>
            </div>
        </button>
    
    )
}