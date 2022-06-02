export default function getPlaceholder(filterType: string): string {
  switch (filterType) {
    case "startDate":
      return "Enter Date Range: Jan 01 2021 - Feb 22 2021";
    case "endDate":
      return "Enter Date Range: Jan 01 2021 - Feb 22 2021";
    case "employee":
      return "Enter an employee name or ID";
    case "client":
      return "Enter a client name or ID";
    case "id":
      return "Enter a project ID";
    default:
      return "Select a filter category";
  }
}
