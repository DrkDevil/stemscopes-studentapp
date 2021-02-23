/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../../page elements/button/Button'

const Subnav = () => {
    return (
        
            <div className='subnav'>
                <ul>
                <Button className='btn'  text='Overview'/> 
                <Button className='btn'  text='Engage'/> 
                <Button className='btn'  text='Explore'/> 
                <Button className='btn'  text='Explain'/> 
                <Button className='btn'  text='Elaborate'/> 
                <Button className='btn'  text='Evaluate'/> 
                <Button className='btn'  text='Intervention'/> 
                <Button className='btn'  text='Acceleration'/> 
                <Button className='btn'  text='All'/> 
                </ul>
            </div>    
        
    )
}

export default Subnav