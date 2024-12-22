import React from "react";
import "../stylesheets/Heroes.css";

const Heroes = () => {
  const leaderboard = [
    { rank: 1, name: "Alice", points: 120, change: "+5" },
    { rank: 2, name: "Bob", points: 110, change: "+3" },
    { rank: 3, name: "Charlie", points: 100, change: "+2" },
    { rank: 4, name: "Diana", points: 95, change: "-1" },
    { rank: 5, name: "Ethan", points: 90, change: "-3" },
  ];

  return (
    <div className="heroes-container">
      <h2 className="heroes-title">Top Heroes</h2>
      <div className="heroes-leaderboard">
        <div className="heroes-podium">
          {leaderboard.slice(0, 3).map((hero) => (
            <div
              key={hero.rank}
              className={`podium-place podium-rank-${hero.rank}`}
            >
              <div className="hero-avatar">
                <span className="hero-rank">#{hero.rank}</span>
              </div>
              <div className="hero-info">
                <p className="hero-name">{hero.name}</p>
                <p className="hero-points">{hero.points} items found</p>
              </div>
            </div>
          ))}
        </div>

        <div className="heroes-list">
          {leaderboard.slice(3).map((hero) => (
            <div key={hero.rank} className="hero-card">
              <span className="hero-card-rank">#{hero.rank}</span>
              <span className="hero-card-name">{hero.name}</span>
              <span className="hero-card-points">{hero.points} items</span>
              <span
                className={`hero-card-change ${
                  hero.change.includes("+") ? "positive" : "negative"
                }`}
              >
                {hero.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroes;
