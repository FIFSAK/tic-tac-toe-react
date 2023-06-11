export default function Winner(props) {
  return (
    <div className="grid place-items-center h-screen">
      <h1 className="text-6xl text-black dark:text-white">{props.winnerName} is the Winner!</h1>
    </div>
  );
}