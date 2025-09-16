export default function Layout(props){

    const { children } = props
    const header = (
        <header>
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )
    const footer = (
        <footer>
            <p>Built by <a target='_blank' href='https://github.com/Alexis99997777?tab=overview&from=2025-08-01&to=2025-08-31'>Alexis</a
            ><br/>Styled with<a target='_blank' href='https://fantacss.smoljames.com'>FantaCSS</a></p>
        </footer>
    )

    return (

        <>
            {header}
            {children}
            {footer}

        </>
        
    )
}