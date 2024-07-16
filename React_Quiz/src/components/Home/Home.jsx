import React,{useState} from 'react'
import Question from '../Quiz/Question'
import quizData  from '../../staticData/data'



function Home() {
  const [questions, setquestions] = useState(quizData)
  return (
   <main>
   <div className ='container'>
    <h3>My <br/>Quiz app</h3>
    <section >
    {
      questions.map((question)=>{
        return(
          <Question key={question.id} {...question}/>

        )

      })
    }
    


    </section>
    </div>
   </main>
  )
}

export default Home