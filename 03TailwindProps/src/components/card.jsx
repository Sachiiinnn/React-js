// import React, { use } from 'react'

function Card({username, button = "Sachin"}) {
    // console.log("props", props);
    console.log(username);
    
    
    return (
        <div className="w-90 h-90 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl">{username}</h1>
          <button>{button }</button>
        </div>
      </div>
    )
}

export default Card;
