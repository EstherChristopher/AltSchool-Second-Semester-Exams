import { useState } from "react";
import { Helmet } from "react-helmet-async";

const TestError = () => {
  const [content, setContent] = useState("Hello World");
  return (
    <>
      <Helmet>
        <title>Counter</title>
        <meta name="description" content="Error Boundary page" />
      </Helmet>

      
      <div>
        <h1>Test Error</h1>
        <p>{content.toLowerCase()}</p>
        <button className="testerror"onClick={() => setContent([])}>Begin test</button>
      </div>
    </>
  );
};
export default TestError;
