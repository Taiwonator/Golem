import React from 'react'

interface IIcon {
    color?: string
}

export const Eye: React.FC<IIcon> = ({ color }) => {
    color = color || '#fff'

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28.152" height="21.293" viewBox="0 0 28.152 21.293">
            <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0 -4.5)">
                <path id="Path_550" data-name="Path 550" d="M1.5,15.146S6.073,6,14.076,6s12.576,9.146,12.576,9.146-4.573,9.146-12.576,9.146S1.5,15.146,1.5,15.146Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                <path id="Path_551" data-name="Path 551" d="M20.36,16.93a3.43,3.43,0,1,1-3.43-3.43A3.43,3.43,0,0,1,20.36,16.93Z" transform="translate(-2.854 -1.784)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </g>
        </svg>

    )
}

export const Calendar: React.FC<IIcon> = ({ color }) => {
    color = color || '#fff'

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21.448" height="24.512" viewBox="0 0 21.448 24.512">
            <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,22.214a2.3,2.3,0,0,0,2.3,2.3H19.15a2.3,2.3,0,0,0,2.3-2.3V9.192H0Zm15.32-9.384a.576.576,0,0,1,.575-.575H17.81a.576.576,0,0,1,.575.575v1.915a.576.576,0,0,1-.575.575H15.895a.576.576,0,0,1-.575-.575Zm0,6.128a.576.576,0,0,1,.575-.574H17.81a.576.576,0,0,1,.575.574v1.915a.576.576,0,0,1-.575.574H15.895a.576.576,0,0,1-.575-.574ZM9.192,12.831a.576.576,0,0,1,.575-.575h1.915a.576.576,0,0,1,.575.575v1.915a.576.576,0,0,1-.575.575H9.767a.576.576,0,0,1-.575-.575Zm0,6.128a.576.576,0,0,1,.575-.574h1.915a.576.576,0,0,1,.575.574v1.915a.576.576,0,0,1-.575.574H9.767a.576.576,0,0,1-.575-.574ZM3.064,12.831a.576.576,0,0,1,.575-.575H5.554a.576.576,0,0,1,.575.575v1.915a.576.576,0,0,1-.575.575H3.639a.576.576,0,0,1-.575-.575Zm0,6.128a.576.576,0,0,1,.575-.574H5.554a.576.576,0,0,1,.575.574v1.915a.576.576,0,0,1-.575.574H3.639a.576.576,0,0,1-.575-.574ZM19.15,3.064h-2.3V.766A.768.768,0,0,0,16.086,0H14.554a.768.768,0,0,0-.766.766v2.3H7.66V.766A.768.768,0,0,0,6.894,0H5.362A.768.768,0,0,0,4.6.766v2.3H2.3A2.3,2.3,0,0,0,0,5.362v2.3H21.448v-2.3A2.3,2.3,0,0,0,19.15,3.064Z" fill={color} />
        </svg>
    )
}
