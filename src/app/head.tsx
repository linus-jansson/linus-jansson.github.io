export default async function Head() {

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Open graphs tags */}
            <meta name="title" content="Hey! I'm Linus!" />
            <meta name="description" content="Full stack developer from Sweden. Here is my portfolio!" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Hey! I'm Linus!" />
            <meta property="og:description" content="Full stack developer from Sweden. Here is my portfolio!" />
            <meta property="og:url" content="https://limpan.dev/" />
            <meta property="og:image" content="https://limpan.dev/images/background.jpg" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Hey! I'm Linus!" />
            <meta name="twitter:description" content="Full stack developer from Sweden. Here is my portfolio!" />
            <meta name="twitter:image" content="https://limpan.dev/images/background.jpg" />

            {/* IOS Theme */}
            <meta name="theme-color" content="#4285f4"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#4285f4" />

            <title>Hey! I&apos;m Linus! </title>
        </>
    )
}
