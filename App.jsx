import { useState } from 'react';

function App() {
  const [view, setView] = useState('map');

  const mockRestaurant = {
    name: "Joey's Cafe",
    location: 'Fairhope, AL',
    highchair: true,
    booster: true,
    notes: 'Very clean. Had disposable seat covers.',
    photo: null,
    stars: 4,
    kidMenu: true,
    dietary: ['Dye-Free', 'Allergen-Friendly', 'Seed-Oil-Free']
  };

  return (
    <div className="container">
      <h1>CleanSeat</h1>

      <div className="nav">
        <button onClick={() => setView('map')}>🗺 Map</button>
        <button onClick={() => setView('restaurant')}>📄 Restaurant</button>
        <button onClick={() => setView('review')}>✍️ Leave Review</button>
        <button onClick={() => setView('leaderboard')}>🏆 Leaderboard</button>
      </div>

      <div className="card">
        {view === 'map' && (
          <>
            <h2>Map View</h2>
            <p>Interactive map would be here (Fairhope, AL).</p>
          </>
        )}

        {view === 'restaurant' && (
          <>
            <h2>{mockRestaurant.name}</h2>
            <p><strong>Location:</strong> {mockRestaurant.location}</p>
            <p><strong>Highchairs:</strong> {mockRestaurant.highchair ? '✅' : '❌'}</p>
            <p><strong>Booster Seats:</strong> {mockRestaurant.booster ? '✅' : '❌'}</p>
            <p><strong>Rating:</strong> {'⭐'.repeat(mockRestaurant.stars)}</p>
            <p><strong>Notes:</strong> {mockRestaurant.notes}</p>
            <p><strong>Kid Menu:</strong> {mockRestaurant.kidMenu ? '✅' : '❌'}</p>
            <p><strong>Tags:</strong> {mockRestaurant.dietary.join(', ')}</p>
          </>
        )}

        {view === 'review' && (
          <>
            <h2>Leave a Review</h2>
            <p>Submit form for highchair, booster, rating, notes, photo, menu, and dietary tags.</p>
          </>
        )}

        {view === 'leaderboard' && (
          <>
            <h2>Leaderboard</h2>
            <p>Top CleanSeat contributors this month will be listed here.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;