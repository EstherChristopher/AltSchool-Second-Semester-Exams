import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
        <title>Counter</title>
        <meta name="description" content="Error 404 page throws an error!" />
      </Helmet>

    <br></br>
    <br></br>
      <div id= "message">This page does not exist!</div>
      <br></br>
      <button className="page404" onClick={() => navigate("/")}>Go to home</button>
    </>
  );
};
export default Error404Page;
