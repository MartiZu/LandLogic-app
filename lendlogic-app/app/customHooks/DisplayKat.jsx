import getUserJenny from "@/library/getUserJenny";

export default async function DisplayKat() {

  const userData = await getUserJenny();
  console.log(userData); //displays

  const kat = userData.find(
    (user) => user.email === "kat.johnson@example.com"
  );