import React, { useState } from 'react'
import QuestionTile from '../SmallComponents/QuestionTile'
import Footer from './Footer'
import Navbar from './Navbar'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, convertFromRaw } from 'draft-js';
import { Markup } from 'interweave';
import draftToHtml from 'draftjs-to-html';
// import {stateToHTML} from 'draft-js-export-html';


export default function Homepage() {

    const demo_questions = [
        {
            type : "question",
            id : 121,
            author : "Mama Yadav",
            questionId : 1000,
            questionTitle : "What is the speed of the light ?  What  is  the  speed of the light ",
            likesDislikes : [
                {
                    likes : "105",
                    dislikes : "12"
                }
            ],
            answers : 102,
            views : 455,
            comments : 13,
            imageUrl : "https://picsum.photos/200/300",
            content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, unde nobis, cum ab odit rem facilis, deserunt laboriosam debitis ea voluptas. Quaerat nemo magnam eligendi quasi molestias, accusamus error dolor?'
        },

        {
            type : "blog",
            id : 122,
            author : "Mama Yadav",
            questionId : 1000,
            questionTitle : "What is the speed of the light ?  What  is  the  speed of the light ",
            likesDislikes : [
                {
                    likes : "105",
                    dislikes : "12"
                }
            ],
            answers : 102,
            views : 455,
            comments : 13,
            imageUrl : "https://picsum.photos/300/200",
            content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, unde nobis, cum ab odit rem facilis, deserunt laboriosam debitis ea voluptas. Quaerat nemo magnam eligendi quasi molestias, accusamus error dolor?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus id quae dicta voluptatibus doloremque dolorum! Quod, minima earum. Nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit vero tempora itaque unde amet delectus quia rerum commodi laborum voluptatum?'

        },
    ]

    const [ASK_QUES_POPUP, setASK_QUES_POPUP] = useState(false);
    const handelAskQuestion_Popup = () => {
        setASK_QUES_POPUP(!ASK_QUES_POPUP);
        setEditorState();
    }

    // this editor state has to be saved in the database as question/blog content
    const [EditorState, setEditorState] = useState();
    const [html, sethtml] = useState(); 
    const hehe = () => {
        console.log(convertToRaw(EditorState.getCurrentContent()));
        console.log(convertFromRaw(convertToRaw(EditorState.getCurrentContent())));
        const rawContentState = convertToRaw(EditorState.getCurrentContent());
        const markup = draftToHtml(rawContentState);
        sethtml(markup)
    }
    
    
    return (
        <>
            <Navbar/>
            <div className="container hompageContainer">

                {/* questions container */}
                <div className="question-container">

                    {/* ask a question section */}
                    <div className="ask-a-question" onClick={handelAskQuestion_Popup}>
                        <p className="ask-greeting"><strong>Hello! Username/Welcome To Grads(for anoynomus user)</strong></p>
                        <p className="ask-greeting">Ask any Question or post a Blog</p>
                    </div>

                    {/* all questions will fetch here */}
                    {demo_questions.map((key)=>{
                        return <QuestionTile
                        
                            key = {key.id}
                            type = {key.type}
                            author = {key.author}
                            questionTitle = {key.questionTitle}
                            likesDislikes = {key.likesDislikes}
                            answers = {key.answers}
                            views = {key.views}
                            comments = {key.comments}
                            image = {key.imageUrl}
                            content = {key.content}
                            id = {key.id}
                            // question content, question images, and more will be added here during development.    
                        />
                    })}


                </div>

    
                {/* related questions */}
                <div className="related-questions"></div>
            </div>
            <br />
            <Footer/>



            {/* ask question popup , if anyone clicked the ask question button */}
            {
                ASK_QUES_POPUP === true ?
                <div className="ask-question-popup">
                    <div className="popup">
                    <button 
                            // className="delete button"
                            onClick={() => {
                                const confirmBox = window.confirm(
                                "close karega to likha hua data udd jayega"
                                )
                                if (confirmBox === true) {
                                handelAskQuestion_Popup()
                                }
                            }}>Close
                    </button>
                        <Editor
                            editorState={EditorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={setEditorState}
                        />;
                    <button onClick={hehe}>hehe</button>
                    <Markup content={html} />
                    </div>
                </div>:''
            }
        </>
    )
}
