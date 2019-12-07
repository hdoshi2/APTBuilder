import React, { Component, Fragment } from "react";
import "./App.css";
import {Header, Footer} from './Layouts'
import Exercises from './Exercises'
import {exercises, muscles} from '../store.js'

class App extends Component {
  state = {
    exercises,
    category: 'Legs'
  }

  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((accum, current) => {
        const {muscles} = current

        accum[muscles] = accum[muscles]
          ? [...accum[muscles], current]
          : [current]

          return accum
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const {category} = this.state;
    console.log(exercises)
    return (
      <Fragment>
        <Header />
        <Exercises
          category={category}
          exercises={exercises}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
