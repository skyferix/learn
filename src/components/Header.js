
import React from 'react'
import Button from 'react-bootstrap/Button';


const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button>a</Button>
        </header>
    )
}

export default Header
