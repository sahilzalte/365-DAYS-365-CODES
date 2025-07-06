import { useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('');

  const fetchHello = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setMsg(data.message);
  };

  const sendName = async () => {
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Sahil' })
    });
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold">Next.js API Example</h1>
      <button onClick={fetchHello} className="mt-4 bg-blue-500 px-4 py-2 rounded">Fetch Hello (GET)</button>
      <button onClick={sendName} className="mt-4 ml-4 bg-green-500 px-4 py-2 rounded">Send Name (POST)</button>
      <p className="mt-6 text-xl">{msg}</p>
    </div>
  );
}