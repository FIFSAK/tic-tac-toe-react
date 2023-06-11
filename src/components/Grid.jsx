export default function Grid(props) {
  return (
    <div className="grid grid-cols-3 gap-x-4 m-auto w-fit">
      {props.grid.map((element) => (
        <div key={element.id} className="relative group">
          <div className="absolute transition duration-500 opacity-75 -inset-1 bg-gradient-to-b from-slate-950 via-r-600 to-stone-700 blur group-hover:opacity-100"></div>
          <button onClick={() => props.handlePlay(element.id)}className="relative w-24 h-24 transition duration-500 bg-black dark:bg-white text-white dark:text-black">
            {element.text}
          </button>
        </div>
      ))}
    </div>
  );
}