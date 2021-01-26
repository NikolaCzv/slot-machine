export const emojiRender = num => {
    if(num === 1) {
        return <div> 🦠 </div>
    } else if (num === 2) {
        return <div> 🎱 </div>
    } else if (num === 3) {
        return <div> 🍻 </div> 
    } else if (num === 4) {
        return <div> 👑 </div> 
    } else if (num === 5) {
        return <div> 🎲 </div>
    } else if (num === 6) {
        return <div> 🍒 </div> 
    } else if (num === 7) {
        return <div> 💰 </div> 
    } else {
        return <div> ➖ </div>
    }
}