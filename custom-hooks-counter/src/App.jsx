// App.jsx
/*import SingleCounter from './SingleCounter';  // Import the SingleCounter component
import './App.css';  // Import styles for the app

const App = () => {
  return (
    <div className="app-container">
      <SingleCounter />
      <SingleCounter />
      <SingleCounter />
    </div>
  );
};

export default App;*/


// AppWithCustomHook.jsx
/*import useField from './useField';
import './App.css';  // Add CSS if needed

const AppWithCustomHook = () => {
  const nameInput = useField('text');
  const bornInput = useField('date');
  const heightInput = useField('number');

  const handleSubmit = (event) => {
   

 event.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input {...nameInput} />
        </div>
        <br/>
        <div>
          Birthdate: <input {...bornInput} />
        </div>
        <br/>
        <div>
          Height: <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {nameInput.value} {bornInput.value} {heightInput.value}
      </div>
    </div>
  );
};

export default AppWithCustomHook;*/

/*import useLocalStorage from './useLocalStorage';

const App = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is stored in localStorage: {name}</p>
    </div>
  );
};

export default App;*/
// App.jsx
import SingleCounter from './SingleCounter';  // Import the SingleCounter component
import './App.css';  // Import styles for the app

const App = () => {
  return (
    <div className="app-container">
      <SingleCounter />
      <SingleCounter />
      <SingleCounter />
    </div>
  );
};

export default App;