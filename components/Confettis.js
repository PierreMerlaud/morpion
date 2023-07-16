import Confetti from "react-confetti";

const Confettis = ({ value }) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const colors = ["#ffffff", "#19376D", "#576CBC", "#A5D7E8"];

  return (
    <>
      <Confetti
        width={width}
        height={height}
        colors={colors}
        numberOfPieces={300}
      />
      <div className="Victory">{value} est vainqueur !</div>
    </>
  );
};

export default Confettis;
