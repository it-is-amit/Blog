import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import Controls from '../SmallComponents/Controls';
import Answer from '../SmallComponents/Answer';
import Comment from '../SmallComponents/Comment';

export default function QuestionBody() {
    const demo_questions = [ 
        {
            type : "question",
            id : 121,
            author : "Mama Yadav",
            questionId : 1000,
            categories: [
                { category : 'Science' },
                { category : 'Physics' },
                { category : 'CBSE Boards' },
                { category : 'Lights' },
            ],
            questionTitle : "What is the speed of the light ?  What  is  the  speed of the light ",
            likesDislikes : [
                {
                    likes : "109k",
                    dislikes : "1782"
                }
            ],
            views : '467M',
            comments : 1893,
            imageUrl : "https://picsum.photos/200/300",
            content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, unde nobis, cum ab odit rem facilis, deserunt laboriosam debitis ea voluptas. Quaerat nemo magnam eligendi quasi molestias, accusamus error dolor?',
            answers : 5402,
            answers_list: [
                {
                    answered_profile : 'can fetch details with profile id',
                    answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui tempore placeat, ipsa laudantium praesentium nihil veritatis magnam minima repellendus consectetur facilis quae iusto tempora reiciendis id deleniti. Facere placeat, maxime nihil ducimus, temporibus rem dolorem fuga animi perferendis odit repellat debitis odio enim asperiores omnis sapienpturi iusto inventore distinctio nisi harum facilis rem assumenda, molestias sunt quam molestiae ab maxime provident dignissimos. Consequuntur, assumenda.',

                    answer_likesdislikes : [
                        {
                            likes : '38k',
                            dislikes : '223'
                        }
                    ],
                    answer_commemts : '9k',
                },

                {
                    answered_profile : 'can fetch details with profile id',
                    answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui tempore placeat, ipsa laudanventore distinctio nisi harum facilis rem assumenda, molestias sunt quam molestiae ab maxime provident dignissimos. Consequuntur, assumenda.',

                    answer_likesdislikes : [
                        {
                            likes : '67',
                            dislikes : '0'
                        }
                    ],
                    answer_commemts : '94',
                },

                {
                    answered_profile : 'can fetch details with profile id',
                    answer : 'Lorem ipsum doloore distinctio nisi harum facilis rem assumenda, molestias sunt quam molestiae ab maxime provident dignissimos. Consequuntur, assumenda.',

                    answer_likesdislikes : [
                        {
                            likes : '233',
                            dislikes : '23'
                        }
                    ],
                    answer_commemts : '904',
                }
            ]
        },

        {
            type : "blog",
            id : 122,
            author : "Mama Yadav",
            questionId : 1000,
            categories: [
                { category : 'Upsc' },
                { category : 'IIT - JEE' },
                { category : 'Bihar Board' },
                { category : 'hehehe' },
            ],
            questionTitle : "What is the speed of the light ?  What  is  the  speed of the light ",
            likesDislikes : [
                {
                    likes : "105",
                    dislikes : "12"
                }
            ],
            answers : 102,
            views : 455,
            imageUrl : "https://picsum.photos/300/200",
            content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, unde nobis, cum ab odit rem facilis, deserunt laboriosam debitis ea voluptas. Quaerat nemo magnam eligendi quasi molestias, accusamus error dolor?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus id quae dicta voluptatibus doloremque dolorum! Quod, minima earum. Nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit vero tempora itaque unde amet delectus quia rerum commodi laborum voluptatum?',
            comments : 13,
            comments_list : [
                {
                    comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus assumenda laudantium nemo accusantium illor sit amet consectetur adipisicing elit. Ducimus assumenda laudantium nemo accusantium illo under sit amet consectetur adipisicing elit. Ducimus assumenda laudantium nemo accusantium illo unde unde quae amet mollitia quod exercitationem.',
                    comment_likesdislikes : [
                        {
                            likes : '33',
                            dislikes : '3'
                        }
                    ]

                },
                {
                    comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus assumenda laudantium nemo accusantium illo under sit amet consectetur adipisicing elit. Ducimus assumenda laudantium nemo accusantium illo under sit amet consectetur adipisicing elit. Ducimus assumenda laudantium nemo accusantium illo unde quae amet mollitia quod exercitationem.',
                    comment_likesdislikes : [
                        {
                            likes : '3',
                            dislikes : '0'
                        }
                    ]
                },
                {
                    comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus assumenda laudantium nemo accusantium illo unde quae amet mollitia quod exercitationem.',
                    comment_likesdislikes : [
                        {
                            likes : '68',
                            dislikes : '8'
                        }
                    ]
                },
                {
                    comment : 'Lorem ipsum dolor sit',
                    comment_likesdislikes : [
                        {
                            likes : '89',
                            dislikes : '20'
                        }
                    ]
                },
            ]
            
        },
    ]
    const { qid } = useParams();
    const clicked_question = demo_questions.find(item => item.id == qid)
    return (
        <>
        <Navbar/>
        <div className="container base">
            {/* <p>{qid}</p> */}
            <div className="question-body">

                {/* all the details presented in the question body */}
                <div className="question-title">
                    {clicked_question.questionTitle}
                </div>

                <div className="question-tag">
                <span>
                    {
                        clicked_question.type === 'question' ? <p>Author : <strong style={{color: '#00438B'}}>{clicked_question.author}</strong> </p> 
                        : clicked_question.type === 'blog' ? <p>Blog by : <strong style={{color: '#00438B'}}>{clicked_question.author}</strong></p>
                        : <p>Unsupported type, please type question/blog in type variable</p>
                    }
                </span>

                {/* question related tags */}
                <div className="question-category-tag">
                    {clicked_question.categories.map((q) => {
                        return <div className="tag">{q.category}</div>
                    })}
                </div>

                <br/>
                {/* image container , if any post contain any images. */}
                <div className="image-container" style={{background:`url("${clicked_question.imageUrl}") no-repeat center/contain`}}></div>
                </div>

                <br/>
                {/* question content */}
                <div style={{fontSize:'16px' , lineHeight:'30px'}}>
                    {clicked_question.content}
                </div>


                <br />
                {/* controls for the current blog/question */}
                {/* set 'showLikesAndDislikes, showAnswers, showAnswerButton, showViews, showComments, showSharingButton, showMenu' to true for showing it into the page. */}

            {
                clicked_question.type === 'question' ? <Controls
                // showing Controls for a question .
                    showLikesAndDislikes = {true}
                    answerSection = {true}
                    showViews = {true}
                    showSharingButton = {true}
                    showMenu = {true}
                // data to be shown in the controls panel in question tile
                    likesDislikes = {clicked_question.likesDislikes}
                    answers = {clicked_question.answers}
                    views = {clicked_question.views}
                />


                : clicked_question.type === 'blog' ? <Controls
                // showing controls for a blog
                    showLikesAndDislikes = {true}
                    showComments = {true}
                    showViews = {true}
                    showSharingButton = {true}
                    showMenu = {true}
                // data to be shown in the Controls panel in the blog tile
                    likesDislikes = {clicked_question.likesDislikes}
                    views = {clicked_question.views}
                    comments = {clicked_question.comments}
                />
                // if type of the question is not question nor blog
                : <p>unsupported type. question/blog are only supported types.</p>
            }

                <br /><div style={{height:'1px', width:'100%', backgroundColor:'#d6d6d6'}}></div><br />








            {/* all the answers will fetch here */}
            {/* answers body */}
            {
                clicked_question.type === 'question' ? 
                    clicked_question.answers_list.map((e) => {
                        return <Answer
                        
                        answer = {e.answer}
                        likesDislikes = {e.answer_likesdislikes}
                        comments = {e.answer_commemts}
                        
                        />
                    })
                 
                    : clicked_question.comments_list.map((e) => {
                        return <Comment

                        comment = {e.comment}
                        likesDislikes = {e.comment_likesdislikes}

                        />
                    })
            }


            </div>
            <div className="related-questions"></div>
        </div>
        </>
    )
}
