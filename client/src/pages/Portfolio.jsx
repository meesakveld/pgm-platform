import React from 'react'
import TopSection from '../components/TopSection'

export default function Portfolio() {
    
    const description = "Ontdek het studentenwerk van het graduaat Programmeren! Benieuwd wat onze programmeurs uitspoken in de cloud? Of wat ze kunnen maken met HTML, CSS, JavaScript Node.js, PHP en veel meer? Je vindt het allemaal op dit portfolio platform."

    return (

        <main className="max-w-200 mx-auto">

            <TopSection title="Portfolio" description={description} />

        </main>

    )
}