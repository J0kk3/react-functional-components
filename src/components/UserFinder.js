//hooks
import { useState, useEffect, Component } from "react";
//components
import Users from "./Users";

class UserFinder extends Component
{
    static contextType = UsersContext;

    constructor ()
    {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: "",
        };
    }
    //will not execute when the component reruns
    componentDidMount ()
    {
        //send http request...
        this.setState( { filteredUsers: this.context.users } );
    }

    componentDidUpdate ( prevProps, prevState )
    {
        if ( prevState.searchTerm !== this.state.searchTerm )
        {
            this.setState(
                {
                    filteredUsers: this.context.users.filter( ( user ) =>
                        user.name.includes( this.state.searchTerm ),
                    ),
                } );
        }
    }

    searchChangeHandler ( event )
    {
        this.setState( { searchTerm: event.target.value } );
    }
    render ()
    {
        <>
            <div className={ classes.finder }>
                <input
                    type="search"
                    onChange={ this.searchChangeHandler.bind( this ) }
                />
            </div>
            <Users users={ this.state.filteredUsers } />
        </>;
    }
}

// const UserFinder = () =>
// {
//     const [ filteredUsers, setFilteredUsers ] = useState( DUMMY_USERS );
//     const [ searchTerm, setSearchTerm ] = useState( "" );

//     useEffect( () =>
//     {
//         setFilteredUsers(
//             DUMMY_USERS.filter( ( user ) => user.name.includes( searchTerm ) ),
//         );
//     }, [ searchTerm ] );

//     const searchChangeHandler = ( event ) =>
//     {
//         setSearchTerm( event.target.value );
//     };

//     return (
//         <>
//             <input
//                 type="search"
//                 onChange={ searchChangeHandler }
//             />
//             <Users users={ filteredUsers } />
//         </>
//     );
// };

export default UserFinder;
