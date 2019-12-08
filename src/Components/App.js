import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { exercises, muscles } from '../store.js'

class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {}
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

  handleExercisesSelected = id =>{
    this.setState((prevState) => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const {category, exercise} = this.state;
    console.log(exercise)
    return (
      <>
        <Header />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExercisesSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </>
    );
  }
}






// const getExercisesByMuscles = () => {
//   return Object.entries(
//     exercises.reduce((accum, current) => {
//       const { muscles } = current

//       accum[muscles] = accum[muscles]
//         ? [...accum[muscles], current]
//         : [current]

//       return accum
//     }, {}))
// }

// const App = () => {
//   const [exercises, setExercises] = useState([]);
//   const [category, setCategory] = useState('');
//   const [exercise, setExercise] = useState({});

//   useEffect(() => {
//     setExercises(getExercisesByMuscles())
//   }, [])

//   const handleCategorySelected = category => {
//     setCategory(category)
//   }

//   const handleExercisesSelected = id => {
//     return(
//       console.log(exercises),
//       setExercise(exercises.find(ex => ex.id === id))
//     )
//   }

//   console.log(exercise);

//   return (
//     <>
//       <Header />
//       <Exercises
//         exercise={exercise}
//         category={category}
//         exercises={exercises}
//         onSelect={handleExercisesSelected}
//       />
//       <Footer
//         category={category}
//         muscles={muscles}
//         onSelect={handleCategorySelected}
//       />
//     </>
//   )
// }

export default App;
