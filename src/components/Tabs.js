import React from 'react'

export default function Tabs() {
    return (
        <div id="tabs">
            <ul className='remove_list_style'>
                <li className='active-tab'>Commercial Locksmith</li>
                <li className='non-active-tab'>Residential Lcoksmith</li>
                <li className='non-active-tab'>Automotive Locksmith</li>
                <li className='non-active-tab'>Emergency Lcoksmith</li>
            </ul>
        </div>
    )
}
