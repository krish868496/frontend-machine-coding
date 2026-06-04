import { useEffect, useState } from "react";

interface Match {
  key: string;
  value: string;
}
const preMatchData = [
  { key: "🍎 Apple", value: "Fruit" },
  { key: "🥕 Carrot", value: "Vegetable" },
  { key: "🐶 Dog", value: "Animal" },
  { key: "🚗 Car", value: "Vehicle" },
  { key: "🏏 Cricket", value: "Sport" },
];

const shuffleArray = (array: Match[]) => {
  return array.slice().sort(() => Math.random() - 0.5);
};
const MatchSimilarTiles = () => {
  const [shuffleData, setShuffleData] = useState(preMatchData);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [pairedMatches, setPairedMatches] = useState<Match[]>([]);

  const handleTileClick = (tile: Match) => {
    if (selectedMatch && selectedMatch === tile) {
      const newPairedMatches = [...pairedMatches, tile];
      setPairedMatches(newPairedMatches);
      setSelectedMatch(null);
    }
  };

  const isMatched = (tile: Match) => {
    return pairedMatches.some((match) => match === tile);
  };

  const isGameComplete = pairedMatches.length === preMatchData.length;

  useEffect(() => {
    setShuffleData(shuffleArray(preMatchData));
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-extrabold text-white mb-3">
              Match Similar Tiles
            </h1>

            <p className="text-slate-400">
              Match the item with its correct category
            </p>

            <div className="mt-6 inline-flex items-center gap-2 bg-slate-700 px-5 py-2 rounded-full">
              <span className="text-white font-semibold">
                Progress: {pairedMatches.length}/{preMatchData.length}
              </span>
            </div>
          </div>

          {isGameComplete && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                🎉 Congratulations! All Matches Completed
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-16">
            {/* Left Side */}
            <div className="space-y-4">
              <h2 className="text-center text-xl font-bold text-white mb-4">
                Items
              </h2>

              {preMatchData.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSelectedMatch(item)}
                  disabled={isMatched(item)}
                  className={`
                  w-full py-4 px-5 rounded-2xl
                  font-semibold text-lg
                  transition-all duration-300
                  border   cursor-pointer

                  ${
                    isMatched(item)
                      ? "bg-green-500 border-green-500 text-white"
                      : selectedMatch === item
                        ? "bg-blue-500 border-blue-400 text-white scale-105 shadow-xl"
                        : "bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:scale-105"
                  }
                `}
                >
                  {item.key}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="space-y-4">
              <h2 className="text-center text-xl font-bold text-white mb-4">
                Categories
              </h2>

              {shuffleData.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleTileClick(item)}
                  disabled={isMatched(item)}
                  className={`
                  w-full py-4 px-5 rounded-2xl
                  font-semibold text-lg
                  transition-all duration-300
                  border
                     cursor-pointer
                  ${
                    isMatched(item)
                      ? "bg-green-500 border-green-500 text-white"
                      : "bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:scale-105"
                  }
                `}
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                setPairedMatches([]);
                setSelectedMatch(null);
                setShuffleData(shuffleArray(preMatchData));
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-all cursor-pointer"
            >
              🔄 Restart Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchSimilarTiles;
