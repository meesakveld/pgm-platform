import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="max-w-200 mx-auto mt-24">
            
            <h2 className="font-manuka text-7xl sm:text-9xl uppercase text-center p-6" >Geïnteresseerd?</h2>

            <hr className="my-12 border-t-black" />
            
            <div className="flex flex-col md:flex-row gap-8 p-6">
            
                <section className="basis-4/12">

                    <h3 className="font-shareTechMono mb-3 text-3xl">Meer info</h3>

                    <p>Schrijf je dan nu in of kom eens langs op 1 van onze infodagen. We helpen je graag verder!</p>

                    <Link className="bg-gray-200 p-4 inline-block mt-6 text-[#243542]" to="https://www.arteveldehogeschool.be/nl/bij-ons-studeren/kennismaken/infomomenten#infodagen" target="_blank" rel="noopener noreferrer">Inschrijven</Link>

                </section>

                <section className="basis-4/12">
                    
                    <h3 className="font-shareTechMono mb-3 text-3xl">Locatie</h3>

                    <p>Leeuwstraat 1</p>
                    
                    <p>9000 Gent,</p>
                    
                    <p>België</p>

                </section>

                <section className="basis-4/12">

                    <h3 className="font-shareTechMono mb-3 text-3xl">Contact</h3>
                    
                    <p><a href="tel:092347200">09 234 72 00</a></p>
                    
                    <p><a href="mailto:philippe.depauw@arteveldehs.be?subject=Graduaat Programmern">philippe.depauw@arteveldehs.be</a></p>
                
                </section>
            
            </div>
        </footer>
    )
}
