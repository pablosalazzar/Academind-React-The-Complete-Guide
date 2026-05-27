import image from "../assets/investment-calculator-logo.png"

export default function Header(){
    return(
        <div id="header">
            <h1>React Investment Calculator</h1>
            <img src={image} alt="Logo that shows money image" />
        </div>
    )
}