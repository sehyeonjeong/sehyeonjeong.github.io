export default function Header() {
  return (
    <header className="header">
      <div className="shell header__inner">
        <a className="logo" href="#top" aria-label="AfreSH 홈">AfreSH<span>.</span></a>
        <nav className="socials" aria-label="연락처">
          <a href="https://github.com/sehyeonjeong" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:AfreSH@AfreSH.page">Email</a>
        </nav>
      </div>
    </header>
  )
}
