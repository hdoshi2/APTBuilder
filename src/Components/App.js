import React, { Component, Fragment } from "react";
import "./App.css";
import {Header, Footer} from './Layouts'
import Exercises from './Exercises'
import {exercises, muscles} from '../store.js'

class App extends Component {
  states = {
    exercises
  }

  getExercisesByMuscles(){
    return Object.entries(
      this.states.exercises.reduce((accum, current) => {
        const {muscles} = current

        accum[muscles] = accum[muscles]
          ? [...accum[muscles], current]
          : [current]

          return accum
      }, {})
    )
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    console.log(this.getExercisesByMuscles())
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises}/>
        <Footer muscles={muscles}/>
      </Fragment>
    );
  }
}

export default App;
