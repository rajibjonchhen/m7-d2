
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
import {incrementAction, decrementAction } from './redux/actions/index.js'

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch) => ({
  incrementCounter : () => {
    dispatch(incrementAction())
  },
  decrementCounter : () => {
    dispatch(decrementAction())
  }
})

function App({count, incrementCounter, decrementCounter}) {
  return (
    <div className="App mt-5">
      <button onClick={incrementCounter} type='button' className='btn  btn-primary'>+</button>
      <span> {count} </span>
      <button onClick={decrementCounter} type='button' className='btn  btn-primary'>-</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
