import React from 'react'
import Controls from './Controls'

export default function Answer(props) {
    return (
        <div className="answer-body">
            <div className="who-answered">
                <div className="profile-info">
                    <div className="profile-photo">
                        {/* image here */}
                    </div>
                    <div className="who-details">
                        <p style={{ fontSize:'18px', fontWeight:'700'}}>Mama Yadav . <a style={{fontSize:'18px', fontWeight:'400'}} href="#">Follow</a></p>
                        <p style={{fontSize:'14px', color:'#595959'}}>Answered on - 10/10/21</p>
                    </div>
                </div>
                <Controls showMenu={true}/>
            </div>



        {/* answer content here */}
            <div className="answer-content">
                <p>{props.answer}</p>   
            </div>

        {/* controls fro the answers */}
        <Controls
            showLikesAndDislikes = {true}
            showComments = {true}
            showSharingButton = {true}
        // data to be shown in the controls panel in question tile
            likesDislikes = {props.likesDislikes}
            comments = {props.comments}
        />
        <br /><div style={{height:'1px', width:'100%', backgroundColor:'#d6d6d6'}}></div><br />
        </div>
    )
}
