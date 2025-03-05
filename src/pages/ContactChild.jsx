import { Outlet } from "react-router-dom"

function ContactChild() {
    return (
        <div>
            ContactChild
            <Outlet/>
        </div>
    )
}

export default ContactChild
