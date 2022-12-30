import React from 'react'

const Footer = () => {
    const style={
        position:'fixed',
        left:'0',
        bottom:'0',
        width:'100%',
        backgroundColor:'black',
        color:'yellow'
      }  
  return (
    <footer className='footer' style={style}>
        <div className='container'>
           <span className='text-muted'>Defect Tracker @ Aniket Agrawal All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer