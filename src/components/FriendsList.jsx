import React from 'react';

const FriendsList = () => {

  const friends = [
    {id: 1,
    name: 'Snoopy',
    url: 'https://images.desenio.com/zoom/18197-8snoopylove50x70-79406.jpg?_gl=1*10yjpw*_ga*MTcwOTg2NDY5Ni4xNzIyMzg4Mjk0*_ga_GH3FS7X5TH*MTcyMjM4ODI5My4xLjEuMTcyMjM4ODI5My4wLjAuMA..*_gcl_au*MTkwNzI0OTU5OS4xNzIyMzg4Mjk1'
    },
    {id: 2,
      name: 'Smile',
      url: 'https://images.desenio.com/zoom/18197-8snoopylove50x70-79406.jpg?_gl=1*10yjpw*_ga*MTcwOTg2NDY5Ni4xNzIyMzg4Mjk0*_ga_GH3FS7X5TH*MTcyMjM4ODI5My4xLjEuMTcyMjM4ODI5My4wLjAuMA..*_gcl_au*MTkwNzI0OTU5OS4xNzIyMzg4Mjk1'
      },
    {id: 3,
        name: 'Happy',
        url: 'https://images.desenio.com/zoom/18197-8snoopylove50x70-79406.jpg?_gl=1*10yjpw*_ga*MTcwOTg2NDY5Ni4xNzIyMzg4Mjk0*_ga_GH3FS7X5TH*MTcyMjM4ODI5My4xLjEuMTcyMjM4ODI5My4wLjAuMA..*_gcl_au*MTkwNzI0OTU5OS4xNzIyMzg4Mjk1'
    },
    {id: 4,
      name: 'flower',
      url: 'https://images.desenio.com/zoom/18197-8snoopylove50x70-79406.jpg?_gl=1*10yjpw*_ga*MTcwOTg2NDY5Ni4xNzIyMzg4Mjk0*_ga_GH3FS7X5TH*MTcyMjM4ODI5My4xLjEuMTcyMjM4ODI5My4wLjAuMA..*_gcl_au*MTkwNzI0OTU5OS4xNzIyMzg4Mjk1'
      }
  ]
  return (
    <>    
      <div className ="conversation" style={{width: "400px", display:"flex", flexDirection:"column", justifyContent:"top", padding: "10px", }}>
       <h1>Freinds List</h1>
       <div className="searchBar">
        <input placeholder= "Search for Friends" className="chatMenuInput" />
      </div>
        <ul className="friendsList" style={{color: "yellow", listStyle: "none",justifyContent:"flex-start", alignContent:"center"}}>
         {friends.map((friend) => (
            <li key={friend.id} style = {{fontSize: "15px", cursor:"pointer", border:"solid 1px white"} }>
             <img className = "conversationImg" src={friend.url} style={{height:"50px", width: "50px", background: "white", borderRadius: "50%", marginRight:"20px", objectFit: "cover"}}/>
              <span className="conversationName">{friend.name}</span>
            </li>
         ))}
        </ul>
      </div>
    </>
  );
};

export default FriendsList;
