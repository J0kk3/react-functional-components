//hooks
import { useState, useEffect, Component } from "react";
//components
import Users from "./Users";
import UsersContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";
//styles
import classes from "./UserFinder.module.css";

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
            <ErrorBoundary>
                <Users users={ this.state.filteredUsers } />
            </ErrorBoundary>
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
