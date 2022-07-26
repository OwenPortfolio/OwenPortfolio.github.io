const Navbar = (props) => {

    function click(event){
        props.setPage(event.target.id)
    }

    return (
        <>
        <div className="Navbar">
        <h3 className='NavbarLinks' id='About' onClick={click}>About Me</h3>
        <h3 className='NavbarLinks' id='Samples' onClick={click}>Sample Work</h3>
        <h3 className='NavbarLinks' id='Hire' onClick={click}>Hire Me!</h3>
        </div>
        </>
    )
}

export default Navbar