import React, { useReducer } from 'react';
import './SignUp.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const SignUpPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state); // You can perform further actions, such as sending the data to an API or performing validation here
  };

  return (
    <div className="signup-page">
      <h1>Create an Account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;



// import React, { useReducer } from 'react';
// import './SignUp.css';

// const initialState = '';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_FIELD':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const SignUpPage = () => {
//   const [firstName, dispatchFirstName] = useReducer(reducer, initialState);
//   const [lastName, dispatchLastName] = useReducer(reducer, initialState);
//   const [email, dispatchEmail] = useReducer(reducer, initialState);
//   const [password, dispatchPassword] = useReducer(reducer, initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'firstName':
//         dispatchFirstName({ type: 'UPDATE_FIELD', payload: value });
//         break;
//       case 'lastName':
//         dispatchLastName({ type: 'UPDATE_FIELD', payload: value });
//         break;
//       case 'email':
//         dispatchEmail({ type: 'UPDATE_FIELD', payload: value });
//         break;
//       case 'password':
//         dispatchPassword({ type: 'UPDATE_FIELD', payload: value });
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       firstName,
//       lastName,
//       email,
//       password,
//     };
//     console.log(formData); // You can perform further actions, such as sending the data to an API or performing validation here
//   };

//   return (
//     <div className="signup-page">
//       <h1>Create an Account</h1>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;
