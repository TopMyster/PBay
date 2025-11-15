import { useState } from "react"

export default function Searchbar() {
  const [search, setSearch] = useState("")

  function searchTPB() {
    console.log(search)
  }

  return (
    <>
      <div id="searchsection">
        <input id="Searchbar" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Search for a show.." onKeyDown={(e) => {if (e.key === "Enter") {searchTPB()}}}/>
        {search ? <div id="Searchresult">
          <h1>hi</h1>
        </div> : null}
      </div>
    </>
  )
}