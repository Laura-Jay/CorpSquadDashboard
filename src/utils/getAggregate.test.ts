import getAggregate from "./getAggregate";

const testProjects1 = [
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "14th May 2020",
      id: "1dfdggst343tqt",
      size: "5",
      startDate: "2nd March 2018",
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
      endDate: "14th May 2020",
      id: "1dfdggst343tqt",
      size: "20",
      startDate: "2nd March 2018",
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
      endDate: "14th May 2020",
      id: "1dfdggst343tqt",
      size: "10",
      startDate: "2nd March 2018",
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
];

const testProjects2 = [
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "14th May 2020",
      id: "1dfdggst343tqt",
      size: "100",
      startDate: "2nd March 2018",
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
      endDate: "14th May 2020",
      id: "1dfdggst343tqt",
      size: "0",
      startDate: "2nd March 2018",
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
      endDate: "14th May 2020",
      id: "1dfdggst343tqt",
      size: "200",
      startDate: "2nd March 2018",
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
];

test("returns the sum of all project fee sizes", () => {
  expect(getAggregate(testProjects1)).toBe(35);
  expect(getAggregate(testProjects2)).toBe(300);
});
