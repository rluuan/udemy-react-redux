import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Rodrigo' />
        <Member name='Karina' />
        <Member name='Genivaldo' />
    </Family>
    ,document.getElementById('app'))