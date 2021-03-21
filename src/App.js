import './App.css';


function App() {
  const COMMA_ENTRIES = [ // First name, City, Birth date
     'Mckayla, Atlanta, 5/29/1986',
     'Elliot, New York City, 4/3/1947',
  ]
  const DOLLAR_ENTRIES = [ // City, Birth date, Last name, First name
    'LA $ 10-4-1974 $ Nolan $ Rhiannon',
    'NYC $ 12-1-1962 $ Bruen $ Rigoberto',
  ]
  return (
    <div className="App">
      <h5>without comma</h5>
     {
       COMMA_ENTRIES.map((comma =>
        <p>{comma.replace(/[^A-Z0-9]/ig, " ")}</p>
       ))
     }
     <h5>without dollar</h5>
     {
      DOLLAR_ENTRIES.map((dollar =>
        <p>{dollar.replace(/[^A-Z0-9]/ig, " ")}</p>
        ))
    }
    </div>
  
  );
}

export default App;
