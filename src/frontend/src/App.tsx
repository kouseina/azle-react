import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const location = event.target.elements.location.value;
    fetch(`${import.meta.env.VITE_CANISTER_URL}/greet?name=${name}&location=${location}`)
      .then(response => response.json()).then((json) => {
        setGreeting(json.greeting)
        setLocation(json.location)
      });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <label htmlFor="name">Enter your location: &nbsp;</label>
        <input id="location" alt="Location" type="text" />
        <button type="submit">Submit!</button>
      </form>
      <section id="greeting">{greeting}</section>
      <section id="location">{location}</section>
    </main >
  );
}

export default App;
