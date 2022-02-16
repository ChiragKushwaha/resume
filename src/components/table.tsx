import dateformat from 'dateformat';
import React from 'react';
import { YEAR } from '../constants/date';

const Table = () => {
  const education = [
    {
      institution: 'GITAM University Hyderabad',
      url: 'https://www.gitam.edu/hyderabad',
      area: 'B.tech CSE',
      studyType: 'Bachelor',
      startDate: '2016-09-01',
      endDate: '2020-04-20',
      score: '8.73',
      courses: ['Computer Science and Engineering']
    },
    {
      institution: 'Army Public School, Nehru Road',
      url: 'https://www.apsnrlucknow.org/',
      area: 'Class XII',
      studyType: 'Intermediate',
      startDate: '2015-03-20',
      endDate: '2016-03-15',
      score: '91.40',
      courses: ['Physics', 'Chemistry', 'Maths', 'English', 'C++']
    },
    {
      institution: "St. Ann's Convent School",
      url: 'https://www.stannslucknow.org/',
      area: 'Class X',
      studyType: 'Secondary Education',
      startDate: '2013-03-20',
      endDate: '2014-03-15',
      score: '83.40',
      courses: ['Physics', 'Chemistry', 'Maths', 'English', 'C++']
    }
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>Qualification</th>
          <th>University / Board Institution Year of Passing</th>
          <th>Aggregate</th>
        </tr>
      </thead>
      <tbody>
        {education.map((ed) => {
          return (
            <tr key={ed.institution}>
              <td>{ed.area}</td>
              <td>
                <a href={ed.url}>{ed.institution}</a>{' '}
                {`${dateformat(ed.startDate, YEAR)}-${dateformat(ed.endDate, YEAR).substring(2)}`}
              </td>
              <td>{ed.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
