import React from 'react'
import { Helmet } from 'react-helmet'
import PlacesToVisitHero from '../components/placestovisit/PlacesToVisitHero'
import NearbyAttractionsSection from '../components/placestovisit/dummy'

const PlacesToVisit = () => {
    return (
        <>
            <Helmet>
                <title>Manfredomus | Eco Retreat with Castle Views in Sicily </title>
                <meta
                    name="description"
                    content="Manfredomus is an eco-retreat in Sicily with stunning castle views and panoramic nature scenes. Perfect for writers, honeymooners, and nature lovers seeking meaningful escapes."
                />
                <meta
                    name="keywords"
                    content="eco retreat Sicily, castle view lodge, eco stay Italy, sustainable travel Sicily, Manfredomus"
                />
                <meta property="og:title" content="Eco Retreat with Castle Views in Sicily | Manfredomus" />
                <meta property="og:description" content="Reconnect with nature at Manfredomus — an eco-friendly stay near a historic Sicilian castle with breathtaking views and rustic charm." />
                <meta property="og:type" content="website" />
            </Helmet>

            <PlacesToVisitHero />
            <NearbyAttractionsSection />
        </>
    )
}

export default PlacesToVisit
