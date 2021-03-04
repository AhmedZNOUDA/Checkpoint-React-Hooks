
const SearchWithName = (props) => {
    return (
      <div className="search">
          <input className="search-field" type="text" value={props.inputValue} onChange={(event) =>{ props.inputChange(event.target.value)}} placeholder="Search 🔎"/>
      </div>
    )

}


export default SearchWithName;
