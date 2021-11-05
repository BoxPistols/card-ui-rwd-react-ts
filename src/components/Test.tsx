import React from 'react';
import Data from '../data.json';
import '../style/card.scss';
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
// ];

const Datas = Data.data;

export default ({}) => (
  <React.Fragment>
    <h2>some magic happen!</h2>
    <ul className="card--layout">
      {Datas.map((user) => (
        <li key={user.id} className="card--list">
          <div className="card--head">
            <div className="card--img">
              <img src={user.avatar} alt="avatar" />
            </div>
          </div>
          <div className="card--content">
            <div className="card--name">{user.first_name}</div>
            <div className="card--email">{user.email}</div>
          </div>
        </li>
      ))}
    </ul>
  </React.Fragment>
);
