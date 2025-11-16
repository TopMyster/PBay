import { useState } from "react"

export default function Searchbar() {
  const [search, setSearch] = useState("")
  const [magnet, setMagnet] = useState()

  return (
    <>
      {magnet ? <div id="screen" onMouseLeave={() => {document.getElementById("screen").style.visibility = 'hidden'}}>
        <video controls src={magnet} />
        <script src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js" charset="utf-8" async></script>
      </div> : null}
      <div id="searchsection">
        <input id="Searchbar" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Search for a show.."/>
        {search ? <div id="Searchresult">
          <h2>{search}</h2>
          <iframe src={`https://limetorrents.org/search?q=${search}`}/>
          <input value={magnet} onChange={(e) => {setMagnet(e.target.value)}} placeholder="Enter magnet..." onKeyDown={(e) => {if (e.key === "Enter") {document.getElementById("screen").style.visibility = 'visible'}}}/>
        </div> : null}
      </div>
    </>
  )
}