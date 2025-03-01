import React from "react"
import "./Main.css"

export default function Main(){
    const [StateObj,setStateObj] = React.useState({
        topText: "one does not simply",
        bottomText:"walk into mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const[allMems,setAllMems] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMems(data.data.memes))
    },[])
    function clickHandler(){
        const randomNum = Math.floor(Math.random() * allMems.length)
        const newUrl = allMems[randomNum].url
        setStateObj(prev => ({
            ...prev,
            imgUrl:newUrl
        }))
    }

    function handleChange(event){
        const {value,name} = event.currentTarget
        setStateObj(prev => ({
            ...prev,
            [name]:value
        }))
    }
    return(
        <main>
            <div className="form">
                <label>Top Text: 
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={StateObj.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text: 
                    <input 
                        type="text"
                        placeholder="Walk into mordor"
                        name="bottomText"
                        value={StateObj.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={clickHandler}>Get a new meme Image 🖼</button>
            </div>
            <div className="meme">
                <img src={StateObj.imgUrl} />
                <span className="top">{StateObj.topText}</span>
                <span className="bottom">{StateObj.bottomText}</span>
            </div>

        </main>
    )
}