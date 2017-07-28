import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AnswerListRow = ({answer, key}) => {
  return (
    <div id={key}>
      <div className="well container">
        <div className="col-sm-12">
          <h4 className="text-info">
            <u> answer {key}</u>
          </h4>

          <div>
            <div className="col-lg-2 hidden-sm hidden-xs">
              <img className="row" src={answer.owner.profile_image} alt="Profile Image"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AnswerListRow.propTypes = {
  answer: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
};

export default AnswerListRow;
