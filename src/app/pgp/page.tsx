const pgp = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEYwZHxhYJKwYBBAHaRw8BAQdAvQ2cgSLvQU1HuhdfbVGYxwUmpwSqmETR
nY/xmc/SRhLNJ2NvbnRhY3RAbGltcGFuLmRldiA8Y29udGFjdEBsaW1wYW4u
ZGV2PsKPBBAWCgAgBQJjBkfGBgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEA
IQkQGk48biXnQTAWIQRwL9KIGQ05SRbON+AaTjxuJedBMCmfAP9NoXd6wqRE
PNpM2QfKj6isOfQfEUQpo/trI8zzomknNQEAj7lT6w6Ebm2hlSJZAu/V6K4N
e1cuWGACZZlMhaNWhQrOOARjBkfGEgorBgEEAZdVAQUBAQdAd9jSJuV0HBol
RSLEEYpr3DaAWFwni0vZJeJhQaMzBxADAQgHwngEGBYIAAkFAmMGR8YCGwwA
IQkQGk48biXnQTAWIQRwL9KIGQ05SRbON+AaTjxuJedBMLHwAQCpq/JWJDWh
br+Bd4gOpUV5efKwovo1fupoQ1azBj1YUAD/dr0sBbJolukjs8MK6feFeaUP
Td63mjyXmd2J1g9D+Ac=
=QTZg
-----END PGP PUBLIC KEY BLOCK-----
`

export default function Page() {
    return (
        <>
            <pre className="text-white border-2 border-white">{pgp}</pre>
            <p className="text-white">or download it <a href="/publickey.contact+portfolio@limpan.dev-702fd288190d394916ce37e01a4e3c6e25e74130.asc" className='underline'>here</a> as a file</p>
        </>
    )
}