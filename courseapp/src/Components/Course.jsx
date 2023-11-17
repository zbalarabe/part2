const Course = ({ courses }) => {
    console.log('this is course', courses)
    return (
      <div>
      <Header course={courses[0].name} />
      <Subheader course={courses[1].name} />
      <Content
      parts={courses[1].parts} />
      <Total
      total={courses[1].parts.reduce((sum, p) => sum + p.exercises, 0)} />
      <Subheader course={courses[2].name} />
      <Content
      parts={courses[2].parts} />
      <Total
      total={courses[2].parts.reduce((sum, p) => sum + p.exercises, 0)} />
      </div>
    )
  }
  
  const Header = ({ course }) => {
    console.log('this is course header', course)
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
  
  const Subheader = ({ course }) => {
    console.log('this is course header', course)
    return (
      <div>
        <h2>{course}</h2>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    console.log('this is parts', parts)
    return (
      <div>
        {/* <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
        <Part part={parts[3]} /> */}


        {parts.map(part => 
        <Part key={parts.id} part={part} />
        )}
        
      </div>
    )
  }
  
  const Part = ({ part }) => {
    console.log('this is part', part)
    console.log(part)
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
  }
  
  const Total = ({ total }) => {
    console.log('this is total', total)
    return (
      <div>
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }
  

export default Course