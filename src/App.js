import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    // This code will be executed on the server.
    const renderedHtml = ReactDOMServer.renderToString(<h1>Hello, {name}</h1>);
    return () => {
      // This code will be executed on the client.
     // ReactDOM.hydrate(renderedHtml, document.getElementById("root"));
    };
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default App;
