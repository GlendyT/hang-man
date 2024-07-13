const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyBoardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr) )",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
 //       const isInactive = inactiveLetters.includes(key)
        return (
          <button
          onClick={() => addGuessedLetter(key)}
            className={`w-full border-black border-2 py-2 px-2 text-2xl uppercase font-bold cursor-pointer text-black  ${isActive === true ? "bg-slate-500 cursor-not-allowed " : "bg-green-500 hover:bg-green-300"} `} 
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
