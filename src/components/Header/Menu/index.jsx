function Menu({children,data}) {
    return (
        <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>{children}</li>
                        <li>{data}</li>
                    </ul>
        </div>
    )
}

export default Menu
