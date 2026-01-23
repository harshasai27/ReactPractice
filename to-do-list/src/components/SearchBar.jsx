export default function SearchBar ({search, setSearch}){

    return(
            <div className="search-bar-container">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </div>
    )
}