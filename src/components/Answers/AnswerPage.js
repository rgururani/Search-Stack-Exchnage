import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as resultActions from '../../actions/resultAction';
import toastr from 'toastr';
import AnswerListRow from './AnswerListRow';

class AnswerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.answers),
      errors: {},
      saving: false
    };
  }

  componentWillMount(){
    this.props.actions.loadResults(45319398)
      .then(data =>{
        toastr.success("Success");
      } )
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    const {answers} = this.props.answers;
    if(answers && answers.length > 0) {
      return (
        <div>
          {answers.map(answer =>
            <AnswerListRow key={answer.answers_id} answer={answer}/>
          )}
        </div>
      );
    }
    return (<div><h3>NO answer </h3></div>);

  }
}

AnswerPage.propTypes = {
  answers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    answers: state.answers
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(resultActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPage);
