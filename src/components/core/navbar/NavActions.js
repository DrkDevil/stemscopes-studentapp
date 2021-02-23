/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../../page elements/button/Button'
import React from 'react'

const NavActions = () => {
    return (
        <div className='subnav'>
            <Button className='btn'  text='My Assignments'/>               
            <Button className='btn'  text='Student Journal'/>               
            <Button className='btn'  text='Student Resources'/>               
        </div>
        
    )
}

export default NavActions