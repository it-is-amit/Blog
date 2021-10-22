import React from 'react'
import QuestionTile from '../SmallComponents/QuestionTile'
import Navbar from './Navbar'

export default function Homepage() {

    const demo_questions = [
        {
            type : "question",
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
            imageUrl : "https://picsum.photos/200/300"
        },

        {
            type : "blog",
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
            imageUrl : "https://picsum.photos/300/200"
        },

        {
            type : "blog",
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
            imageUrl : "https://picsum.photos/300/300"
        },

        {
            type : "question",
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
            imageUrl : "https://picsum.photos/200/400"
        },

        {
            type : "blog",
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
            imageUrl : "https://picsum.photos/200/500"
        },

        {
            type : "question",
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
            imageUrl : "https://picsum.photos/200/300"
        },

        {
            type : "blog",
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
            imageUrl : "https://picsum.photos/400/500"
        },

        {
            type : "question",
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
            imageUrl : "https://picsum.photos/200/200"
        }
    ]

    return (
        <>

            <Navbar/>

            <div className="container hompageContainer">

                {/* questions container */}
                <div className="question-container">

                    {/* ask a question section */}
                    <div className="ask-a-question">
                        <p className="ask-greeting"><strong>Hello! Username</strong></p>
                        <p className="ask-greeting">Ask any Question or post a Blog</p>
                    </div>

                    {/* all questions will fetch here */}
                    {demo_questions.map((key)=>{
                        return <QuestionTile
                        
                            type = {key.type}
                            author = {key.author}
                            questionTitle = {key.questionTitle}
                            likesDislikes = {key.likesDislikes}
                            answers = {key.answers}
                            views = {key.views}
                            comments = {key.comments}
                            image = {key.imageUrl}
                            // question content, question images, and more will be added here during development.    
                        />
                    })}


                </div>

    
                {/* related questions */}
                <div className="related-questions"></div>
            </div>
        </>
    )
}
