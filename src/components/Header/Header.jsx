import "./Header.css"
import TrollFace from "../../assets/troll-face.png"

export default function Header(){
    return(
        <header className="header">
            <img src={TrollFace} alt="troll-face-img"/>
            <span>Meme Generator</span>
        </header>
    )
}