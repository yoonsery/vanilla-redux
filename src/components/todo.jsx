import React from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Todo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>Del</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
