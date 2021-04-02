import React, {useEffect} from 'react'

export type questionsAPI = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type sentQuestion = {
    question:string
    answer:string
    option:string[]
}

export const QuestionService = async():Promise<sentQuestion[]> =>{
    const respone = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const {results} = await respone.json()
    const questions:sentQuestion[] = results.map((question:questionsAPI)=>{
        return {
            question:question.question,
            answer:question.correct_answer,
            option:[...question.incorrect_answers,question.correct_answer]
        }
    })
    return questions
}
