import React from 'react';
import Data from '../data.json';

// type Props = {
//   text: string;
// };

// const users = [
//   {
//     id: 1,
//     email: 'george.bluth@reqres.in',
//     first_name: 'George',
//     last_name: 'Bluth',
//     avatar: 'https://reqres.in/img/faces/1-image.jpg',
//   },
//   {
//     id: 2,
//     email: 'janet.weaver@reqres.in',
//     first_name: 'Janet',
//     last_name: 'Weaver',
//     avatar: 'https://reqres.in/img/faces/2-image.jpg',
//   },
//   {
//     id: 3,
//     email: 'emma.wong@reqres.in',
//     first_name: 'Emma',
//     last_name: 'Wong',
//     avatar: 'https://reqres.in/img/faces/3-image.jpg',
//   },
// ];

const Datas = Data.data;

export default ({}) => (
  <React.Fragment>
    <h2>some magic happen!</h2>
    {/* <div> */}
    {/* <ul> */}
    {Datas.map((user) => (
      <li key={user.id} className="card--list">
        {user.first_name}: {user.email}
        <img src={user.avatar} alt="avatar" />
      </li>
    ))}
    {/* </ul> */}
    {/* </div> */}
  </React.Fragment>
);
