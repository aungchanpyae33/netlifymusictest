import Container from "@/ui/albumContainer/Container";

async function page() {
  return (
    <div>
      <Container songs={["hi"]} description="Hit Song of the week" />
      <Container songs={["hi"]} description="Hit Song of the week" />
      <Container songs={["hi"]} description="Hit Song of the week" />
    </div>
  );
}
export default page;
