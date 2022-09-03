//hooks
import { Component } from 'react';
//styles
import classes from './User.module.css';

class User extends Component
{
  componentWillUnmount ()
  {
    console.log( "User will unmount!" );
  }

  render ()
  {
    <li className={ classes.user }>{ this.props.name }</li>;
  }
}

// const User = ( props ) =>
// {
//   return <li className={ classes.user }>{ props.name }</li>;
// };

export default User;