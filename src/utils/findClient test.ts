import findClient from "./findClient";

const testProjects1 = [
  {
    client: {
      id: "f0b83d3a0b77da97ec7eefc4",
      name: "Mon-Inc",
    },
    project: {
      endDate: "14th May 2020",
      id: "1dfdggst343tqt",
      size: "50,665",
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

test("returns client information from projects array by client id", () => {
  expect(
    findClient(testProjects1, "f0b83d3a0b77da97ec7eefc4")
  ).toStrictEqual({
    id: "f0b83d3a0b77da97ec7eefc4",
    name: "Mon-Inc"
  });
});