import React from 'react';

const StudentInfo = (props)=>{

  const averageGrade = (gradeArray)=>{
    let totalGrade = gradeArray.reduce((total, num)=>{
      total = parseInt(total);
      num = parseInt(num);
      return ( total + num)
    },0)
    return `${totalGrade / gradeArray.length}%`
  }

  const showAllTest = (grades)=>{
    return(
      grades.map((grade, testNum)=>{
        testNum += 1
        return(
          <li className="student__testGrade" >
            test {testNum}: <span></span>{grade}%
          </li>
        )
      })
    )
  }

  return(
    <li id={props.id} className ="student">
        <img className="student__image" src={props.pic} alt="An avatar of the student"/>
        <div className="student__info">
          <h2 className="student__name">{props.firstName} {props.lastName}</h2>
          <p className="student__email">Email: {props.email}</p>
          <p className="student__company">Company: {props.company}</p>
          <p className="student__skill">Skill: {props.skill}</p>
          <p className="student__average">Average: {averageGrade(props.grades)}</p>
          <div className="student__testInfo">
            <ul className="Student__testGrades">
              {showAllTest(props.grades)}
            </ul>
          </div>
          <div className="student__tagList">
            <p>another tag</p>
            <form onSubmit={props.addTag} id={props.id} >
              <label htmlFor="tags">
                <input type="text" placeholder="Add a Tag" id={props.id} name={props.name} className="student__tag" onChange={props.handleChange} value={props.value} />
              </label>
            </form>
          </div>
        </div>

    </li>
  )
}

export default StudentInfo