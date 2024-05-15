import React from 'react'
import TopSection from '../components/TopSection'

export default function Opleiding() {

    const description = "In het Graduaat Programmeren leer je programmeren en staat front-end web development centraal. Jouw lessen worden doorspekt met interactieve oefeningen. Je krijgt opdrachten om nieuwe leerstof snel onder de knie te krijgen. Werkplekleren en jouw stage zijn samen goed voor meer dan 1.200 uur aan praktijkervaring. Hierna ben je meer dan klaar voor de arbeidsmarkt."

    return (

        <main className="max-w-200 mx-auto">

            <TopSection title="Opleiding" description={description} />
            
        </main>

    )
}
