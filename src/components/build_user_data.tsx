import UserTable, { User } from "./users_table";

const BuildUserData = () => {
    const tableItems: User[] = [
        {
          avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
          status: 'success',
          name: 'John Doe',
          type: 'New',
          registeredDate: 'Jan 15, 2025',
          country: 'US',
          usage: 45,
          usagePeriod: 'Dec 1, 2024 - Dec 31, 2024',
          lastLogin: '2 hours ago',
        },
        {
          avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
          status: 'danger',
          name: 'Jane Smith',
          type: 'Recurring',
          registeredDate: 'Feb 5, 2025',
          country: 'FR',
          usage: 65,
          usagePeriod: 'Jan 1, 2025 - Jan 31, 2025',
          lastLogin: '1 day ago',
        },
        {
          avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
          status: 'success',
          name: 'Carlos Martinez',
          type: 'New',
          registeredDate: 'Mar 10, 2025',
          country: 'MX',
          usage: 78,
          usagePeriod: 'Feb 1, 2025 - Feb 28, 2025',
          lastLogin: '5 minutes ago',
        },
        {
          avatarUrl: 'https://randomuser.me/api/portraits/women/54.jpg',
          status: 'danger',
          name: 'Anna Johnson',
          type: 'Recurring',
          registeredDate: 'Apr 20, 2025',
          country: 'DE',
          usage: 33,
          usagePeriod: 'Mar 1, 2025 - Mar 31, 2025',
          lastLogin: '3 days ago',
        },
        {
          avatarUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
          status: 'success',
          name: 'Liam Brown',
          type: 'New',
          registeredDate: 'May 25, 2025',
          country: 'CA',
          usage: 89,
          usagePeriod: 'Apr 1, 2025 - Apr 30, 2025',
          lastLogin: '1 hour ago',
        },
        {
          avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
          status: 'danger',
          name: 'Sophia Lee',
          type: 'Recurring',
          registeredDate: 'Jun 18, 2025',
          country: 'KR',
          usage: 55,
          usagePeriod: 'May 1, 2025 - May 31, 2025',
          lastLogin: '10 hours ago',
        },
    ];
    return <UserTable tableItems={tableItems}/>
}

export default BuildUserData;
