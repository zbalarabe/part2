// import { useState } from 'react'

// const Course = (props) => {
//   return (
//     <div>
//     <Header course={props.course} />
//     <Content
//     part1={props.part1} exercise1={props.exercise1}
//     part2={props.part2} exercise2={props.exercise2}
//     part3={props.part3} exercise3={props.exercise3}
//     part4={props.part4} exercise4={props.exercise4} />
//     <Total
//     total={props.exercise1 + props.exercise2 + props.exercise3 + props.exercise4} />
//     </div>
//   )
// }

// const Header = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part1} exercise={props.exercise1} />
//       <Part part={props.part2} exercise={props.exercise2} />
//       <Part part={props.part3} exercise={props.exercise3} />
//       <Part part={props.part4} exercise={props.exercise4} />
//     </div>
//   )
// }

// const Part = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>{props.part} {props.exercise}</p>
//     </div>
//   )
// }

// const Total = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>total of {props.total} exercises</p>
//     </div>
//   )
// }



// const App = () => {
//   const course = {
//     id: 1,
//     name : 'Half Stack application development',
//     parts : [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10,
//       id: 1
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7,
//       id: 2
//     },
//     {
//       name: 'State of a component',
//       exercises: 14,
//       id: 3
//     },
//     {
//       name: 'Redux',
//       exercises: 11,
//       id: 4
//     }
//   ]
//   }
//   return (
//     <div>
//       <Course 
//       course = {course.name}
//       part1={course.parts[0].name}
//       part2={course.parts[1].name}
//       part3={course.parts[2].name}
//       part4={course.parts[3].name}
//       exercise1={course.parts[0].exercises}
//       exercise2={course.parts[1].exercises}
//       exercise3={course.parts[2].exercises}
//       exercise4={course.parts[3].exercises}
//       />
//     </div>
//   )
// }

import { useState } from 'react'
import Course from './Components/Course'

const App = () => {
  const courses = [
  {name: 'Web development curriculum'},
  {
    name : 'Half Stack application development',
    id: 1,
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name : 'Node.js',
    id: 2,
    parts : [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    <div>
      <Course courses={courses}
      />
    </div>
  )
}
export default App

