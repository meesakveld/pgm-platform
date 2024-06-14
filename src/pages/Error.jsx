import React from 'react'
import TopSection from '../components/TopSection'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

export default function Error() {

    const description = "Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepagina."

    return (
        <>

            <Header />

            <main className="max-w-200 mx-auto">

                <Helmet>
                    <title>{`Error | Graduaat Programmeren`}</title>
                </Helmet>

                <TopSection title="Error" description={description} />

            </main>

        </>
    )
}
