import { useState } from "react";
import "./App.css";
import cat from "./assets/cat.png";
import { TypeAhead } from "./components/typeahead/TypeAhead";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // function for fetching data from url declared above
  const fetchData = async (url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  };

  // fetch on every changed key
  const handleChange = async (e) => {
    await fetchData(
      `https://api.github.com/search/users?q=${e.target.value}&per_page=5`
    );
  };

  return (
    <div className="App">
      <header>
        <div className="head-wrapper">
          <h1>
            <img src={cat} alt="cat" />
            typeahead.js
          </h1>
          <p>
            a flexible JavaScript library that provides a strong foundation for
            building robust typeaheads
          </p>
        </div>
      </header>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <main>
          <form>
            <input
              onChange={handleChange}
              placeholder="Username..."
              type="text"
            />
            {/* render result on website if its not undefind */}
            <div className="result">
              {data !== undefined
                ? data.map((item, index) => {
                    return <TypeAhead key={index} item={item} />;
                  })
                : null}
            </div>
          </form>
        </main>
      )}
    </div>
  );
}

export default App;
