import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../actions/homeActions';
import QuestionList from './QuestionList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      Intitle : ''
    };

    this.searchStackExchange = this.searchStackExchange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  redirectToResultPage(questionId) {
  }

  searchStackExchange(event){
    event.preventDefault();
    this.props.actions.loadQuestions(this.state.Intitle)
      .then(data =>{
        toastr.success("Success");
      } )
      .catch(error => {
        toastr.error(error);
      });
  }

  onChange(event) {
  return this.setState({Intitle: event.target.value});
}

  render() {
    const {questions} = this.props;

    return (
        <div className="row">
          <div className="col-sm-12">
            <div>
              <div>
                <div className="well container">
                  <div className="col-sm-12">
                    <div className="col-sm-12 col-lg-9">
                        <input type="text" name="Intitle" id="Intitle"
                           className="form-control"
                           placeholder="Search Stack exchange"
                           value={this.state.Intitle}
                           onChange={this.onChange} />
                    </div>
                    <div className="col-sm-12 col-lg-3">
                        <input type="submit"
                           value="Search"
                           className="btn btn-primary"
                               disabled={!this.state.Intitle}
                           onClick={this.searchStackExchange}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-12">
            <QuestionList questions={questions} redirectToResult={this.redirectToResultPage}/>
          </div>
        </div>
    );
  }
}

HomePage.contextTypes = {
  router: PropTypes.object
};

HomePage.propTypes = {
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
