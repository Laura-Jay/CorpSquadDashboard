import filterProjects from "./filterProjects";
// import sortProjects from "./sortProjects";

// const filterOptions = [
//   { name: "Start Date", value: "startDate" },
//   { name: "Completion Date", value: "endDate" },
//   { name: "Contract Size", value: "size" },
//   { name: "Team Member", value: "employee" },
//   { name: "Client", value: "client" },
//   { name: "Project ID", value: "id" },
// ];

// const sortOptions = [
//   { name: "Start Date (ascending)", value: "startDateAsc" },
//   { name: "Start Date (descending)", value: "startDateDes" },
//   { name: "Completion Date (ascending)", value: "endDateAsc" },
//   { name: "Completion Date (descending)", value: "endDateDes" },
//   { name: "Contract Size (ascending)", value: "sizeAsc" },
//   { name: "Contract Size (descending)", value: "sizeDes" },
// ];

const testProjects1 = [
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "Thu Dec 30 2021",
      id: "1dfdggst343tqt",
      size: "50665",
      startDate: "Thu Jun 20 2019",
    },
    team: [
      {
        name: "Mike Wazowsky",
        id: "b8ebcc51e0ff7b8ae43cb0fe",
        role: "Safety Advisor",
        avatar: "fakeUrl.com",
      },
      {
        name: "Ash Ketchum",
        id: "gsdgesgerg555t54w654b2",
        role: "Lead Trainer",
        avatar: "fakeUrl.com",
      },
      {
        name: "Kate Bush",
        id: "b8efsdkfnsdfsdfsdfksfs",
        role: "Artist",
        avatar: "fakeUrl.com",
      },
    ],
  },
  {
    client: {
      id: "f8dsjfisd84nsdkflkfde84",
      name: "Sauron & Partners",
    },
    project: {
      endDate: "Mon Apr 29 2019",
      id: "1dfdggst343tqt",
      size: "50665",
      startDate: "Mon Mar 11 2019",
    },
    team: [
      {
        name: "Mike Wazowsky",
        id: "b8ebcc51e0ff7b8ae43cb0fe",
        role: "Safety Advisor",
        avatar: "fakeUrl.com",
      },
    ],
  },
  {
    client: {
      id: "e43cb0b5bfdd72c716b9db65",
      name: "Academy",
    },
    project: {
      endDate: "Mon Jan 18 2021",
      id: "1dfdggst343tqt",
      size: "100",
      startDate: "Thu Feb 01 2018",
    },
    team: [
      {
        name: "Kate Bush",
        id: "b8efsdkfnsdfsdfsdfksfs",
        role: "Artist",
        avatar: "fakeUrl.com",
      },
    ],
  },
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "Sun Nov 14 2021",
      id: "ea8a12351620e7869c9cbdc3",
      size: "14658.43",
      startDate: "Wed Jul 18 2018",
    },
    team: [
      {
        name: "Ash Ketchum",
        id: "gsdgesgerg555t54w654b2",
        role: "Lead Trainer",
        avatar: "fakeUrl.com",
      },
      {
        name: "Kate Bush",
        id: "b8efsdkfnsdfsdfsdfksfs",
        role: "Artist",
        avatar: "fakeUrl.com",
      },
    ],
  },
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "Mon Apr 25 2022",
      id: "8b7ce704eafabffc6fd5817e",
      size: "20394.74",
      startDate: "Sat Feb 12 2022",
    },
    team: [
      {
        name: "Mike Wazowsky",
        id: "b8ebcc51e0ff7b8ae43cb0fe",
        role: "Safety Advisor",
        avatar: "fakeUrl.com",
      },
    ],
  },
];

const expectedResults1 = [
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "Thu Dec 30 2021",
      id: "1dfdggst343tqt",
      size: "50665",
      startDate: "Thu Jun 20 2019",
    },
    team: [
      {
        name: "Mike Wazowsky",
        id: "b8ebcc51e0ff7b8ae43cb0fe",
        role: "Safety Advisor",
        avatar: "fakeUrl.com",
      },
      {
        name: "Ash Ketchum",
        id: "gsdgesgerg555t54w654b2",
        role: "Lead Trainer",
        avatar: "fakeUrl.com",
      },
      {
        name: "Kate Bush",
        id: "b8efsdkfnsdfsdfsdfksfs",
        role: "Artist",
        avatar: "fakeUrl.com",
      },
    ],
  },
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "Mon Apr 25 2022",
      id: "8b7ce704eafabffc6fd5817e",
      size: "20394.74",
      startDate: "Sat Feb 12 2022",
    },
    team: [
      {
        name: "Mike Wazowsky",
        id: "b8ebcc51e0ff7b8ae43cb0fe",
        role: "Safety Advisor",
        avatar: "fakeUrl.com",
      },
    ],
  },
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "Sun Nov 14 2021",
      id: "ea8a12351620e7869c9cbdc3",
      size: "14658.43",
      startDate: "Wed Jul 18 2018",
    },
    team: [
      {
        name: "Ash Ketchum",
        id: "gsdgesgerg555t54w654b2",
        role: "Lead Trainer",
        avatar: "fakeUrl.com",
      },
      {
        name: "Kate Bush",
        id: "b8efsdkfnsdfsdfsdfksfs",
        role: "Artist",
        avatar: "fakeUrl.com",
      },
    ],
  },
];

//  ( filterType: string, filterVal:string, sortVal: string, projectsArr: IFullProjectData[])

test("returns project information containing client id", () => {
  expect(filterProjects("client", "Mon-Inc", testProjects1)).toStrictEqual(
    expectedResults1
  );
  expect(filterProjects("", "", testProjects1)).toStrictEqual(testProjects1);
  expect(filterProjects("", "", testProjects1)).toStrictEqual(testProjects1);
});
