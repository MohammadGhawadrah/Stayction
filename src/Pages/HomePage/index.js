import React from 'react'
import Hero from './../../Component/Hero'
import MostImageGrid from '../../Component/MostImageGrid'
import HappyFamily from '../../Component/HappyFamily'
import HousesBackyard from '../../Component/HousesBackyard'
import HotelsRoom from '../../Component/HotelsRoom'
import ApartmentsSet from '../../Component/ApartmentsSet'
function HomePage() {
    return (
        <div>
            <Hero />
            < MostImageGrid />
            <HousesBackyard />
            <HotelsRoom />
            <ApartmentsSet />
            <HappyFamily />
        </div>
    )
}

export default HomePage
