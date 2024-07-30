export default function Page({ params }) {
  let language = ["java", "python", "js"];
  return <h1>My Page {params.slug}</h1>;
}
