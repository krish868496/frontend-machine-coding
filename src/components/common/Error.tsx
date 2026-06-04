import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
        const error = useRouteError() as any;
        console.log(error, "error");
  return (
    <div>
        <h1>Something went wrong</h1>
        <p>{error.data || error.message }</p>
        <Link to={"-1"}>Go Back </Link>
    </div>
  )
}

export default Error;