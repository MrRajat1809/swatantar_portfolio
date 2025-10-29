import Head from 'next/head';

export default function SEO({
    title = "Dr. Swatantar Kumar - Microbial Biogeochemist | Environmental Microbiology | Research",
    description = "Assistant Professor with PhD from Germany and Postdoc from USA. Research focus on microbial nitrogen cycling, anammox processes, and biogeochemistry in pristine groundwater ecosystems. 10+ peer-reviewed publications in microbial ecology and environmental microbiology.",
    canonical = "https://mrrajat1809.github.io/swatantar_portfolio",
    ogImage = "https://mrrajat1809.github.io/swatantar_portfolio/images/og-image.jpg",
    ogType = "website",
    twitterCard = "summary_large_image",
    structuredData,
}) {
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dr. Swatantar Kumar",
        jobTitle: "Assistant Professor - Microbial Biogeochemist",
        description: description,
        url: canonical,
        image: ogImage,
        sameAs: [
            "https://www.linkedin.com/in/dr-swatantar-kumar-0864251aa",
            "https://orcid.org/0000-0002-9057-9911",
            "https://www.scopus.com/authid/detail.uri?authorId=57196019343",
            "https://mrrajat1809.github.io/swatantar_portfolio"
        ],
        affiliation: {
            "@type": "Organization",
            name: "Chandigarh University",
            url: "https://www.cuchd.in/"
        },
        alumniOf: [
            {
                "@type": "Organization",
                name: "Friedrich Schiller University Jena",
                address: "Jena, Germany"
            },
            {
                "@type": "Organization",
                name: "M.M. University",
                address: "Ambala, India"
            }
        ],
        knowsAbout: [
            "Microbial Biogeochemistry",
            "Environmental Microbiology",
            "Nitrogen Cycle",
            "Anammox Bacteria",
            "Denitrification",
            "Groundwater Microbiology",
            "Stable Isotope Tracing",
            "Rhizosphere Chemistry",
            "Priming Effects",
            "Metabolomics",
            "FTICR-MS",
            "Biogeochemical Cycles"
        ],
        award: [
            "Max Planck Graduate Research Fellow (IMPRS-gBGC)",
            "JSMC fellow (LIFE)"
        ]
    };

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="en" />
            <meta name="author" content="Dr. Swatantar Kumar" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content="Dr. Swatantar Kumar - Portfolio" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:creator" content="@sawi_mpi" />

            {/* Additional Meta Tags */}
            <meta name="keywords" content="microbial biogeochemistry, environmental microbiology, nitrogen cycle, anammox, denitrification, groundwater microbiology, stable isotope tracing, rhizosphere chemistry, priming effects, metabolomics, FTICR-MS, PNNL, Friedrich Schiller University, Max Planck, Dr. Swatantar Kumar, biogeochemical cycles, chemolithoautotrophy" />
            <meta name="theme-color" content="#3b82f6" />
            <meta name="msapplication-TileColor" content="#3b82f6" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData || defaultStructuredData, null, 2)
                }}
            />
        </Head>
    );
}