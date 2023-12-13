import getUsers from "@/library/getUsers";

export default async function DisplayKat() {
  const userData = await getUsers();
  console.log(userData); //displays

  const kat = userData.find((user) => user.email === "kat.johnson@example.com");

  if (kat.email === "kat.johnson@example.com") {
    const salary = kat.salary;
    const property_value = kat.property_value;
    const credit_score = kat.credit_score;
    const userName = kat.name;
    //take only the first part of the postcode
    const postcode = kat.address.postcode.split(" ")[0];

    console.log(salary, property_value, credit_score);

    return { salary, property_value, credit_score, userName, postcode };
  }

  console.log("no user found");
}
