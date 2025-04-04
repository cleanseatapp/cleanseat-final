import { useState } from 'react';

function App() {
  const [view, setView] = useState('map');

  const mockRestaurant = {
    name: 'Joey's Cafe',
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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>CleanSeat</h1>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setView('map')}>🗺 Map</button>
        <button onClick={() => setView('restaurant')}>📄 Restaurant</button>
        <button onClick={() => setView('review')}>✍️ Leave Review</button>
        <button onClick={() => setView('leaderboard')}>🏆 Leaderboard</button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {view === 'map' && (
          <div>
            <p>Map would be here. Centered on Fairhope, AL.</p>
            <p>Click on a pin to view restaurant info.</p>
          </div>
        )}

        {view === 'restaurant' && (
          <div>
            <h2>{mockRestaurant.name}</h2>
            <p>{mockRestaurant.location}</p>
            <p>Highchairs: {mockRestaurant.highchair ? '✅' : '❌'}</p>
            <p>Booster Seats: {mockRestaurant.booster ? '✅' : '❌'}</p>
            <p>Rating: {'⭐'.repeat(mockRestaurant.stars)}</p>
            <p>Notes: {mockRestaurant.notes}</p>
            <p>Kid Menu: {mockRestaurant.kidMenu ? '✅' : '❌'}</p>
            <p>Tags: {mockRestaurant.dietary.join(', ')}</p>
          </div>
        )}

        {view === 'review' && (
          <div>
            <h2>Leave a Review</h2>
            <p>Checkboxes for highchair/booster, star rating, notes, photo upload, menu tags, dietary tags.</p>
          </div>
        )}

        {view === 'leaderboard' && (
          <div>
            <h2>Leaderboard</h2>
            <p>Top CleanSeat contributors for the month will show here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;