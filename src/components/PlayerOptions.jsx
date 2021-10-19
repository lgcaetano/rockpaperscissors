import Option from "./Option"

export default function PlayerOptions(props){
    return <div className={`bg-transparent h-2/5 w-auto flex justify-center items-center
     relative m-14 transition-all ${props.display ? "" : "translate-x-screen"}`}>
        <img src={'images/bg-pentagon.svg'} alt="LOGO" className="w-auto h-full"/>
        <Option clickFunction={props.clickFunction} size="small" value="scissors"></Option>
        <Option clickFunction={props.clickFunction} size="small" value="paper"></Option>
        <Option clickFunction={props.clickFunction} size="small" value="rock"></Option>
        <Option clickFunction={props.clickFunction} size="small" value="lizard"></Option>
        <Option clickFunction={props.clickFunction} size="small" value="spock"></Option>
    </div>
}