import React, { Component } from 'react';
import axios from 'axios';
import './styling/app.css';
import StudentInfo from './StudentInfo';

const url = "https://www.hatchways.io/api/assessment/students";

class App extends Component {
  constructor(){
    super()
    this.state= {
      studentList: [],
      tagToAdd:"",
      tagList:[]
    }
  }
  componentDidMount(){
    axios.get(`${url}`)
    .then((res)=>{
      let students = res.data.students;
      // console.log(students);
      this.setState({studentList:students})
    })
  }

  handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  
  addTagToList= (e)=>{
    e.preventDefault();
    let copyOfTagList = this.state.tagList;
    let tagger = {
      id:e.target.id,
      tag:copyOfTagList
    }
    copyOfTagList.push(this.state.tagToAdd)
    
    this.setState({tagList:tagger, tagToAdd:""})
  }


  render(){
    return (
      <div className="App">
        <ul>
            {this.state.studentList !== null? 
              this.state.studentList.map((student,counter)=>{
                return(
                  <StudentInfo 
                    key={counter}
                    id={student.firstName}
                    pic={student.pic}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    email={student.email}
                    company={student.company}
                    skill={student.skill}
                    grades={student.grades}
                    handleChange={this.handleChange}
                    addTag={this.addTagToList}
                    name="tagToAdd"
                    tagList={this.state.tagList}
                    value={this.state.tagToAdd}
                    
                  />
                )
              })
              :
              null
            }
        </ul>
      </div>
    );
  }
}

export default App;
