'use client';

import { useState } from 'react';

export default function PredictShowroomPage() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!lat || !lng) {
      alert('Please enter both latitude and longitude.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lat: parseFloat(lat),
          lng: parseFloat(lng),
        }),
      });

      const data = await res.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error('Prediction failed:', err);
      alert('Error calling backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">📍 Predict Showroom Location</h1>

      <input
        type="number"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="Enter Latitude"
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="number"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        placeholder="Enter Longitude"
        className="w-full border p-2 mb-4 rounded"
      />
      <button
        onClick={handlePredict}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Predicting...' : 'Get Prediction'}
      </button>

      {prediction && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
          ✅ Prediction: <strong>{prediction}</strong>
        </div>
      )}
    </div>
  );
}
