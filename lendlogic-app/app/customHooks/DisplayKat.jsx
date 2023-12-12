import getUserJenny from "@/library/getUserJenny";

export default async function DisplayKat() {

  const userData = await getUserJenny();
  console.log(userData); //displays

  const kat = userData.find(
    (user) => user.email === "kat.johnson@example.com"
  );

  if (kat.email === "kat.johnson@example.com") {
    const salary = kat.salary;
    const property_value = kat.property_value;
    const credit_score = kat.credit_score;

    console.log(salary, property_value, credit_score);

    return { salary, property_value, credit_score };
  }

  console.log("no user found");
}