import React from 'react'
import { AnswerObject } from '../App'
import { ButtonWrapper,Wrapper } from './Questioncard.style'
type Props={
    question:string;
    answers:string[];
    callback:(e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:AnswerObject|undefined;
    questionNr:number;
    totalQuestions:number;

}

const Questioncard:React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
  return (
    <Wrapper>
    <div>
        <p className='number'>
            Question:{questionNr}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html:question}}/>
        <div>
            {answers.map((answers,index)=>(
                <ButtonWrapper
                correct={userAnswer?.correctAnswer===answers}
                userClicked={userAnswer?.answer===answers}
                 key={index}>
                    <button disabled={!!userAnswer } value={answers}onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answers}}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </div>
    </Wrapper>
  )
}

export default Questioncard