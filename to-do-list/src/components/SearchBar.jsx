export default function SearchBar ({search, setSearch}){

    return(
        <div>
            <div>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}