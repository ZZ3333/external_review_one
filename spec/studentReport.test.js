// i work for school report compnay
// we help teachers to find out on how students perform on tests
// we get a strng of comma seprated values of test results
// we want to generate a simple report on top of that

describe(SchoolReportCompany, () => {
  it("starts with a blank test", () => {
    const test = SchoolReportCompany([]);
    expect(test.testResults([]));
  });
});


// Input                           | Outut
// Green, Green, Amber, Red, Green | "Green: 3\nAmber: 1\nRed: 1"

it("tests green test vlaues", () => {
  const test = SchoolReportCompany(["Green, Green, Amber, Red, Green"]);
  expect(test.PassResults(["Green: 3"])
});
