import "../css/answer-card.component.css";
const choices = ["A", "B", "C", "D"];

function QuestionCards({ answer, index, handleClick, selectedAnswer }) {
  const handleOnClick = () => {
    handleClick(answer);
  };

  return (
    <div
      id="answer-card"
      className={`answer-card-container ${
        selectedAnswer === answer ? "selected" : ""
      }`}
      onClick={handleOnClick}
    >
      <div className="answer">
        {choices[index]}. {answer}
      </div>
    </div>
  );
}

export default QuestionCards;
