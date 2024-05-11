function formatDate(date, fromFormat, toFormat) {
  let year;
  let month;
  let day;

  const dateUnformated = date.split(fromFormat[3]);
  console.log(dateUnformated);

  for (let i = 0; i < fromFormat.length; i++) {
    if (fromFormat[i] === "YY" || fromFormat[i] === "YYYY") {
      year = dateUnformated[i];
    }

    if (fromFormat[i] === "MM") {
      month = dateUnformated[i];
    }

    if (fromFormat[i] === "DD") {
      day = dateUnformated[i];
    }
  }

  console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
}

module.exports = formatDate;

const date = "2012-12-21";

const fromFormat = ["YYYY", "MM", "DD", "-"];

const toFormat = ["YYYY", "MM", "DD", "."];

formatDate(date, fromFormat, toFormat);
