import stitchData from "./stitchData";

const projectData1 = [
  {
    id: "f0b83d3a0b77da97ec7eefc4",
    clientId: "2ebfad09bacb0c0cc031b5fa",
    employeeIds: [
      "f7385abd40a5d567fbf72e5c",
      "c0ebabbe2bace5ebca57caba",
      "12beb32b50f1bffe67bcd19e",
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
      "f7385abd40a5d567fbf72e5c",
      "c0ebabbe2bace5ebca57caba",
      "12beb32b50f1bffe67bcd19e",
    ],
    contract: {
      startDate: "Sat Jan 02 2021",
      endDate: "Mon Jun 21 2021",
      size: "29267.84",
    },
  },
];

const employeeData1 = [
  {
    id: "f7385abd40a5d567fbf72e5c",
    name: "Leo Kuhic",
    role: "National Communications Supervisor",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg",
  },
  {
    id: "c0ebabbe2bace5ebca57caba",
    name: "Rosalie Brakus",
    role: "Direct Assurance Engineer",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/595.jpg",
  },
  {
    id: "12beb32b50f1bffe67bcd19e",
    name: "Patsy O'Hara DVM",
    role: "Lead Research Supervisor",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/198.jpg",
  },
];

const clientData1 = [
  {
    id: "dc6461344acaa91ede6bebbe",
    name: "Botsford - Dickens",
  },
  {
    id: "dabe0cd9baac58c46acc908b",
    name: "Kshlerin, Gusikowski and Harris",
  },
  {
    id: "5b640fdd0cbaad75a61dab0a",
    name: "Upton - Lueilwitz",
  },
  {
    id: "e729699c1e86e4a760a51f5b",
    name: "Harris, Dietrich and Kautzer",
  },
  {
    id: "85a3cc98dbdeafabd46db8c2",
    name: "Ullrich, Armstrong and Walker",
  },
];

test("stitch project data", () => {
  expect(stitchData(projectData1, employeeData1, clientData1)).toBe(
    test1Result
  );
});

const test1Result = [
  {
    client: {
      id: "2ebfad09bacb0c0cc031b5fa",
      name: "Botsford - Dickens",
    },
    project: {
      endDate: "Thu Dec 30 2021",
      id: "f0b83d3a0b77da97ec7eefc4",
      size: "47362.95",
      startDate: "Thu Jun 20 2019",
    },
    team: [
      {
        id: "f7385abd40a5d567fbf72e5c",
        name: "Leo Kuhic",
        role: "National Communications Supervisor",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg",
      },
      {
        id: "c0ebabbe2bace5ebca57caba",
        name: "Rosalie Brakus",
        role: "Direct Assurance Engineer",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/595.jpg",
      },
      {
        id: "12beb32b50f1bffe67bcd19e",
        name: "Patsy O'Hara DVM",
        role: "Lead Research Supervisor",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/198.jpg",
      },
    ],
  },
  {
    client: {
      id: "e729699c1e86e4a760a51f5b",
      name: "Botsford - Dickens",
    },
    project: {
      endDate: "Mon Jun 21 2021",
      id: "3c8a1083d6befcfbbb1cca37",
      size: "29267.84",
      startDate: "Sat Jan 02 2021",
    },
    team: [
      {
        id: "f7385abd40a5d567fbf72e5c",
        name: "Leo Kuhic",
        role: "National Communications Supervisor",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg",
      },
      {
        id: "c0ebabbe2bace5ebca57caba",
        name: "Rosalie Brakus",
        role: "Direct Assurance Engineer",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/595.jpg",
      },
      {
        id: "12beb32b50f1bffe67bcd19e",
        name: "Patsy O'Hara DVM",
        role: "Lead Research Supervisor",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/198.jpg",
      },
      {
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg",
        id: "f7385abd40a5d567fbf72e5c",
        name: "Leo Kuhic",
        role: "National Communications Supervisor",
      },
    ],
  },
];
