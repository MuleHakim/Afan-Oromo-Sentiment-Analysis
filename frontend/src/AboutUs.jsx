import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const teamMembers = [
  { name: 'Abdulkarim Getachew', id: 'UGR/7992/12' },
  { name: 'Muluken Hakim', id: 'UGR/1110/12' },
  { name: 'Segni Dessalegn', id: 'UGR/8961/12' },
  { name: 'Abraham Shimekt', id: 'UGR/0129/12' },
  { name: 'Beniyam Alemu', id: 'UGR/4689/12 ' },
];

const AboutUs = () => {
  return (
    <div className="container my-5 mx-5 col-9">
      <h5 className="my-4">The Team</h5>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col" key={index}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">{member.name}</li>
              <li className="list-group-item border-0">ID: {member.id}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
