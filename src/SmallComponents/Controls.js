import React, { useEffect, useState } from 'react'

export default function Controls(props) {

    const [like, setlike] = useState(false);
    const [dislike, setDislike] = useState(false);


    


    return (
    <>
        <div className="control-base">
            {/* left controls includes like dislikes, answers , answer button , views ,comments,  */}
            <div className="left-controls">


                {/* like dislike button */}
                {
                    props.showLikesAndDislikes ? <div className="controls like-dislike">
                    <div className="like">
                        {
                            like ? <i className="fas fa-thumbs-up"></i> 
                            : <i className="far fa-thumbs-up"></i>
                        } <span>&ensp;{props.likesDislikes[0].likes}</span>
                    </div>
                    <div className="dislike">
                        {
                            dislike ? <i className="fas fa-thumbs-down"></i>
                            : <i className="far fa-thumbs-down"></i>
                        } <span>&ensp;{props.likesDislikes[0].dislikes}</span>
                    </div>
                </div> : ''
                }
            

                

                {/* show question/blog views  */}
                {
                    props.showViews ? <div className="controls views">
                    <i className="fas fa-eye fa-sm" style={{color:'#ff8800'}}></i><span>&ensp;{props.views} Views</span>
                    </div> : ''
                }
                

                {/* show comments */}
                {
                    props.showComments ? <div className="controls comments">
                    <i class="far fa-comment-alt fa-sm"></i><span>&ensp;{props.comments}</span>
                    </div> : ''
                }
            </div>


            {/* right controls includes share button , 3 dots menu which consist not interested button , save button and other buttons which is going to add in future. */}
            <div className="right-controls">
                

                {/* share button */}
                {
                    props.showSharingButton ? <div className="controls share">
                    <i class="fas fa-share"></i>
                    </div> : ''
                }
                

                {/* show 3 dot menu  */}
                {
                    props.showMenu ? <div className="controls threeDots-menu">
                    <i class="fas fa-ellipsis-v"></i>
                    </div> : ''
                }
            </div>
        </div>


        
        {/* a section for showing number of answers and button for answer the question . */}
        {
            props.answerSection === true ? <div className="answer-section">

            {/* no of answers showing*/}
            
            <div className="answers">
                <div>
                    <strong style={{color:'#ff8800'}}>{props.answers}</strong>
                </div>

                <div>
                    <p>&ensp;Answers</p>
                </div>
            </div>


            {/* line */}
            <div style={{
                width:'0.7px',
                height:'30px',
                backgroundColor:'#DEDEDE'
            }}></div>


            {/* show Answer button */}
        
            <div className="answer-button">
                <input type="text" placeholder="Type your answer here"/>
            </div>
            
        </div> : ''
        }
    </>
    )
}
