import { use } from "react"
import { useRouteError } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oopps! An error occurred</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/">
                <button>Go to Home Page</button>

            </NavLink>
        </div>

    )
}