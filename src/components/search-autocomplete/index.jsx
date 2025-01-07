import { useState, useEffect } from "react"
import { Suggestions } from "./suggestion";


export function SearchAutocomplete() {


    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropwdown, setShowDropwdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);


    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : []
            setFilteredUsers(filteredData);
            setShowDropwdown(true);
        } else (
            setShowDropwdown(false)
        )
    }

    function handleClick(event){
        console.log(event.target.innerText);
        setShowDropwdown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }


    async function fetchListOfUsers() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }

        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);

        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    console.log(users, filteredUsers);


    return <div className="search-autocomplete-container">
        {
            loading ?
                (<h1>Loading data! Please wait.</h1>)
                : (<input
                    name="search-users"
                    placeholder="Search users here..."
                    value={searchParam}
                    onChange={handleChange}
                />)
        }

        {
            showDropwdown && <Suggestions handleClick = {handleClick} data={filteredUsers} />
        }

    </div>
}
