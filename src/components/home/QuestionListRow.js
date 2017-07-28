import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const QuestionListRow = ({question, key}) => {
  return (
    <div id={key}>
      <div className="well container">
      <div className="col-sm-12">
          <h4 className="text-info">
            <u> {question.link.substr(question.link.lastIndexOf('/')+1)} </u>
          </h4>

        <div>
          <div className="col-lg-2 hidden-sm hidden-xs">
            <img className="row" src={question.owner.profile_image} alt="Profile Image"></img>
          </div>
          <div className="col-lg-2 col-sm-12">
            <a href="#" className="btn btn-sm btn-default">Views <span>{question.view_count}</span></a>
          </div>
          <div className="col-lg-2 col-sm-12">

            {question.is_answered ?
              <a href={`/Answer/${question.question_id}`} target="_blank" className="btn btn-sm btn-default">Answers <span>{question.answer_count}  <i className="glyphicon glyphicon-ok btn-success  btn-circle"></i> </span></a>
              :
              <a href={`/Answer/${question.question_id}`} target="_blank" className="btn btn-sm btn-default">Answers <span>{question.answer_count}</span></a>
            }
          </div>
          <div className="col-lg-2 col-sm-12">
            <a href="#" className="btn btn-sm btn-default">Score <span>{question.score}</span></a>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="col-sm-12 col-lg-2">
              <a href="#" className="btn btn-sm">Tags</a>
            </div>
            <hr/>
              {question.tags.map(tag =>
                <div className="col-sm-12 col-lg-10"><a href="#" className="btn btn-sm" key={tag}>{tag}</a></div>
              )}

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

QuestionListRow.propTypes = {
  question: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
};

export default QuestionListRow;
