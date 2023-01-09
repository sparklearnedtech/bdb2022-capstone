import ProgressBar from "react-bootstrap/ProgressBar";

function QuizProgressBar({
  max = 10,
  now = 0,
  variant = "success",
  label = "0 of 10",
}) {
  const cyber = `${now} of ${max}`;
  return <ProgressBar now={now} max={max} variant={variant} label={cyber} />;
}

export default QuizProgressBar;
