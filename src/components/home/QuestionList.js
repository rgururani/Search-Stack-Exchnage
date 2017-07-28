import React, {PropTypes} from 'react';
import QuestionListRow from './QuestionListRow';

const QuestionList = ({questions }) => {
  return (
    <div>
      {questions.map(question =>
        <QuestionListRow key={question.question_id} question={question}/>
      )}
    </div>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired
};

export default QuestionList;
