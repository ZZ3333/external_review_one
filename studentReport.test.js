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
