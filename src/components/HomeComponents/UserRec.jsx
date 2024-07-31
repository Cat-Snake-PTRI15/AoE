import React from 'react';
import React from 'react';
import profPicFiller from '../../Assets/aoelogo3_kyler.png';
// import profPicFiller from '../Assets/aoelogo2.png';
import { useNavigate, Link } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

const UserRec = (props) => {
  const { username, pfp, allgames, bio } = props;
  const navigate = useNavigate();
  const { username, pfp, allgames, bio } = props;
  const navigate = useNavigate();
  // console.log('username: ', username);
  // console.log('allgames: ', allgames);
  const CDNURL = "https://gusnjhjnuugqaqtgwhym.supabase.co/storage/v1/object/public/AoE/";
  return (
    <div className="userRec-wrapper">

      <img className="userRec-prof-pic" src={CDNURL + pfp} alt="" />

      <div className="userRec-userInfo">
        <span className="userRec-username" onClick={(e)=>{
          navigate(`/profile/${username}`,
            {
              state: {
                username: username,
                bio: bio,
                allgames: allgames,
                pfp: pfp,
              }
            }
          );
        }}>{username}</span>
        <span className="userRec-username" onClick={(e)=>{
          navigate(`/profile/${username}`,
            {
              state: {
                username: username,
                bio: bio,
                allgames: allgames,
                pfp: pfp,
              }
            }
          );
        }}>{username}</span>
      </div>

      <div className="userRec-buttons">
        <button className="userRec-Button">Add</button>
        <button className="userRec-Button2">Message</button>
      </div>
      <div className="userRec-favorite-game">
        Favorite Game:
        <button className="userRec-Button2">Message</button>
      </div>
      <div className="userRec-favorite-game">
        Favorite Game:
      </div>
      <div className="userRecBioWrapper">
        <div className="userRecBioTag">Bio:</div>
        <div className="userRec-game-rank-Container">
          {bio}
          {/* Games: {allgames} */}
        </div>
      <div className="userRecBioWrapper">
        <div className="userRecBioTag">Bio:</div>
        <div className="userRec-game-rank-Container">
          {bio}
          {/* Games: {allgames} */}
        </div>
      </div>

    </div>
  )
}

export default UserRec