import React from 'react'
import Controls from './Controls'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function QuestionTile(props) {
    return (
        <div className="question-tile">
            <Router>
            <Link className="question-title" to={`/question/${props.id}`} target="_blank">
                {/* title of the question/blog in the current tile */}
                {props.questionTitle}
            </Link>

            <div className="question-tag">
                <span>
                    {
                        props.type === 'question' ? <p>Author : <strong style={{color: '#00438B'}}>{props.author}</strong> </p> 
                        : props.type === 'blog' ? <p>Blog by : <strong style={{color: '#00438B'}}>{props.author}</strong></p>
                        : <p>Unsupported type, please type question/blog in type variable</p>
                    }
                </span>
            </div>

            <div style={{fontSize:'14px'}}>
                {`${props.content.substring(0, 70)}...`}<Link to={`/question/${props.id}`} target="_blank">Read more</Link>
            </div>
            <br/>

            {/* image container , if any post contain any images. */}
            <div className="image-container" style={{background:`url("${props.image}") no-repeat center/cover`}}></div>
            
            {/* set 'showLikesAndDislikes, showAnswers, showAnswerButton, showViews, showComments, showSharingButton, showMenu' to true for showing it into the page. */}

            {
                props.type === 'question' ? <Controls
                // showing Controls for a question .
                    showLikesAndDislikes = {true}
                    answerSection = {true}
                    showViews = {true}
                    showSharingButton = {true}
                    showMenu = {true}
                // data to be shown in the controls panel in question tile
                    likesDislikes = {props.likesDislikes}
                    answers = {props.answers}
                    views = {props.views}
                />


                : props.type === 'blog' ? <Controls
                // showing controls for a blog
                    showLikesAndDislikes = {true}
                    showComments = {true}
                    showViews = {true}
                    showSharingButton = {true}
                    showMenu = {true}
                // data to be shown in the Controls panel in the blog tile
                    likesDislikes = {props.likesDislikes}
                    views = {props.views}
                    comments = {props.comments}
                />
                // if type of the question is not question nor blog
                : <p>unsupported type. question/blog are only supported types.</p>
            }

            {/* 'see blog' button only for blogs */}
            {
                props.type === 'blog' ? <div className="openBlog">See blog</div> : ''
            }
            </Router>
        </div>
    )
}
