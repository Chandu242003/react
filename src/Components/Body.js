import React, { useState } from 'react'
import Image from '../Image/kohli.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }


    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop:'100px'}}>
                <img src={Image} alt="images" height={300} width={600}/> <br />
                <p> Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team<br/>He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket<br/> He is the real goat of ODI cricket .he comlete 50centurays in his ODI crear</p>
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  marginBottom:'100px'}}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=rViLhlx7PjY'} height={200} controls />
                <div>
                    <p>i like this {fruits[index].fruit}</p>
            <button onClick={change}>Change me</button>
                </div>
            </div>
        </div>
    )
}
export default Body