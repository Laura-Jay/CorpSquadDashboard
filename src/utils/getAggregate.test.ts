import getAggregate from "./getAggregate";

const testProjects1 = [
  {
    id: "f0b83d3a0b77da97ec7eefc4",
    clientId: "2ebfad09bacb0c0cc031b5fa",
    employeeIds: [
      "9fbdd0ddcaaef6f1f21d674b",
      "59bcf5e767dfaab0db908acc",
      "b8ebcc51e0ff7b8ae43cb0fe",
      "c287aad50a87ae6aada1175f",
      "cefd275deaa8fb6c828e53ab",
      "adddaf2c9da09fd9b4d6a0ba",
      "70d76b7afd5c69d91a67a615",
    ],
    contract: {
      startDate: "Thu Jun 20 2019",
      endDate: "Thu Dec 30 2021",
      size: "47362.95",
    },
  },
  {
    id: "3c8a1083d6befcfbbb1cca37",
    clientId: "e729699c1e86e4a760a51f5b",
    employeeIds: [
      "c287aad50a87ae6aada1175f",
      "c115ca615cc3cbeeed142dfa",
      "12beb32b50f1bffe67bcd19e",
      "3f8b6edc708f3cdaf4bdd7ed",
      "d2e1627db9dbdfc72d15bdc2",
      "f7385abd40a5d567fbf72e5c",
    ],
    contract: {
      startDate: "Sat Jan 02 2021",
      endDate: "Mon Jun 21 2021",
      size: "29267.84",
    },
  },
  {
    id: "a6854a347b16abfa4b455aa4",
    clientId: "abfe2a2ede38bdd9fbee70f4",
    employeeIds: [
      "8d2d0bddb91ba4cef080e7ac",
      "eeceadced5b5cb1c0cf247d1",
      "5bb9d3f7bcd57f86eaea9599",
    ],
    contract: {
      startDate: "Fri Apr 01 2022",
      endDate: "Mon Apr 11 2022",
      size: "9497.91",
    },
  },
];

const testProjects2 = [
  {
    id: "f0b83d3a0b77da97ec7eefc4",
    clientId: "2ebfad09bacb0c0cc031b5fa",
    employeeIds: [
      "9fbdd0ddcaaef6f1f21d674b",
      "59bcf5e767dfaab0db908acc",
      "b8ebcc51e0ff7b8ae43cb0fe",
      "c287aad50a87ae6aada1175f",
      "cefd275deaa8fb6c828e53ab",
      "adddaf2c9da09fd9b4d6a0ba",
      "70d76b7afd5c69d91a67a615",
    ],
    contract: {
      startDate: "Thu Jun 20 2019",
      endDate: "Thu Dec 30 2021",
      size: "0",
    },
  },
  {
    id: "3c8a1083d6befcfbbb1cca37",
    clientId: "e729699c1e86e4a760a51f5b",
    employeeIds: [
      "c287aad50a87ae6aada1175f",
      "c115ca615cc3cbeeed142dfa",
      "12beb32b50f1bffe67bcd19e",
      "3f8b6edc708f3cdaf4bdd7ed",
      "d2e1627db9dbdfc72d15bdc2",
      "f7385abd40a5d567fbf72e5c",
    ],
    contract: {
      startDate: "Sat Jan 02 2021",
      endDate: "Mon Jun 21 2021",
      size: "100",
    },
  },
  {
    id: "a6854a347b16abfa4b455aa4",
    clientId: "abfe2a2ede38bdd9fbee70f4",
    employeeIds: [
      "8d2d0bddb91ba4cef080e7ac",
      "eeceadced5b5cb1c0cf247d1",
      "5bb9d3f7bcd57f86eaea9599",
    ],
    contract: {
      startDate: "Fri Apr 01 2022",
      endDate: "Mon Apr 11 2022",
      size: "150.5",
    },
  },
];

const testProjects3 = [
  {
    id: "f0b83d3a0b77da97ec7eefc4",
    clientId: "2ebfad09bacb0c0cc031b5fa",
    employeeIds: [
      "9fbdd0ddcaaef6f1f21d674b",
      "59bcf5e767dfaab0db908acc",
      "b8ebcc51e0ff7b8ae43cb0fe",
      "c287aad50a87ae6aada1175f",
      "cefd275deaa8fb6c828e53ab",
      "adddaf2c9da09fd9b4d6a0ba",
      "70d76b7afd5c69d91a67a615",
    ],
    contract: {
      startDate: "Thu Jun 20 2019",
      endDate: "Thu Dec 30 2021",
      size: "0",
    },
  },
  {
    id: "3c8a1083d6befcfbbb1cca37",
    clientId: "e729699c1e86e4a760a51f5b",
    employeeIds: [
      "c287aad50a87ae6aada1175f",
      "c115ca615cc3cbeeed142dfa",
      "12beb32b50f1bffe67bcd19e",
      "3f8b6edc708f3cdaf4bdd7ed",
      "d2e1627db9dbdfc72d15bdc2",
      "f7385abd40a5d567fbf72e5c",
    ],
    contract: {
      startDate: "Sat Jan 02 2021",
      endDate: "Mon Jun 21 2021",
      size: "0",
    },
  },
  {
    id: "a6854a347b16abfa4b455aa4",
    clientId: "abfe2a2ede38bdd9fbee70f4",
    employeeIds: [
      "8d2d0bddb91ba4cef080e7ac",
      "eeceadced5b5cb1c0cf247d1",
      "5bb9d3f7bcd57f86eaea9599",
    ],
    contract: {
      startDate: "Fri Apr 01 2022",
      endDate: "Mon Apr 11 2022",
      size: "0",
    },
  },
];

const testProjects4 = [
  {
    id: "f0b83d3a0b77da97ec7eefc4",
    clientId: "2ebfad09bacb0c0cc031b5fa",
    employeeIds: [
      "9fbdd0ddcaaef6f1f21d674b",
      "59bcf5e767dfaab0db908acc",
      "b8ebcc51e0ff7b8ae43cb0fe",
      "c287aad50a87ae6aada1175f",
      "cefd275deaa8fb6c828e53ab",
      "adddaf2c9da09fd9b4d6a0ba",
      "70d76b7afd5c69d91a67a615",
    ],
    contract: {
      startDate: "Thu Jun 20 2019",
      endDate: "Thu Dec 30 2021",
      size: "4563.999999999",
    },
  },
  {
    id: "3c8a1083d6befcfbbb1cca37",
    clientId: "e729699c1e86e4a760a51f5b",
    employeeIds: [
      "c287aad50a87ae6aada1175f",
      "c115ca615cc3cbeeed142dfa",
      "12beb32b50f1bffe67bcd19e",
      "3f8b6edc708f3cdaf4bdd7ed",
      "d2e1627db9dbdfc72d15bdc2",
      "f7385abd40a5d567fbf72e5c",
    ],
    contract: {
      startDate: "Sat Jan 02 2021",
      endDate: "Mon Jun 21 2021",
      size: "3859.1111111111",
    },
  },
  {
    id: "a6854a347b16abfa4b455aa4",
    clientId: "abfe2a2ede38bdd9fbee70f4",
    employeeIds: [
      "8d2d0bddb91ba4cef080e7ac",
      "eeceadced5b5cb1c0cf247d1",
      "5bb9d3f7bcd57f86eaea9599",
    ],
    contract: {
      startDate: "Fri Apr 01 2022",
      endDate: "Mon Apr 11 2022",
      size: "1032.0000005",
    },
  },
];

test("returns the sum of all project fee sizes", () => {
  expect(getAggregate(testProjects1)).toBe(86128.7);
  expect(getAggregate(testProjects2)).toBe(250.5);
  expect(getAggregate(testProjects3)).toBe(0.0);
  expect(getAggregate(testProjects4)).toBe(9455.11);
});