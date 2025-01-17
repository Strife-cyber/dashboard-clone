import React from 'react';
import Flag from 'react-world-flags';

import './user_table.css';

export interface User {
  avatarUrl: string;
  status: 'success' | 'danger';
  name: string;
  type: 'New' | 'Recurring';
  registeredDate: string;
  country: string;
  usage: number;
  usagePeriod: string;
  lastLogin: string;
}

interface UserTableProps {
  tableItems: User[];
}

const colorMap: { [key: number]: string } = {
    0: 'bg-danger',    // 0-10%
    1: 'bg-warning',   // 11-20%
    2: 'bg-info',      // 21-30%
    3: 'bg-primary',   // 31-40%
    4: 'bg-secondary', // 41-50%
    5: 'bg-success',   // 51-60%
    6: 'bg-light',     // 61-70%
    7: 'bg-dark',      // 71-80%
    8: 'bg-blue',      // 81-90%
    9: 'bg-green',     // 91-100%
} as const;

const getProgressBarColor = (usage: number): string => {
  const index = Math.floor(usage / 10); // Determine the color index
  return colorMap[index] || 'bg-success'; // Default to 'bg-success' if usage is above 100
};

const UserTable: React.FC<UserTableProps> = ({ tableItems }) => {
  return (
    <table className="table align-middle table-hover mb-0">
      <thead className="fw-semibold text-body-secondary">
        <tr>
          <th className="text-center table-heading" style={{ width: "50px" }}>
            <i className='fas fa-user'></i>
          </th>
          <th className='text-center table-heading' style={{ width: "150px" }}>User</th>
          <th className="text-center table-heading" style={{ width: "120px" }}>Country</th>
          <th className=' table-heading'>Usage</th>
          <th className=' table-heading' >Activity</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item, index) => (
          <tr key={index}>
            <td className="text-center">
              <div className="avatar avatar-md" >
                <img src={item.avatarUrl} alt={`${item.name}'s avatar`} className="avatar-img" />
                <span className={`avatar-status bg-${item.status}`}></span>
              </div>
            </td>
            <td>
              <div>{item.name}</div>
              <div className="small text-body-secondary text-nowrap">
                <span>{item.type}</span> | Registered: {item.registeredDate}
              </div>
            </td>
            <td className="text-center">
              <span className="text-center"><Flag code={item.country} alt={item.country} style={{ width: "50px" }}/></span>
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-baseline mb-1">
                <div className="fw-semibold">{item.usage}%</div>
                <div className="small text-body-secondary text-nowrap ms-2" style={{ fontSize: "10px" }}>
                  {item.usagePeriod}
                </div>
              </div>
              <div
                className="progress progress-thin"
                role="progressbar"
                aria-valuenow={item.usage}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className={`progress-bar ${getProgressBarColor(item.usage)}`}
                  style={{ width: `${item.usage}%`, boxShadow: 'none' }}
                ></div>
              </div>
            </td>
            <td>
              <div className="small text-body-secondary">Last login</div>
              <div className="fw-semibold text-nowrap">{item.lastLogin}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
