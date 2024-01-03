import FixturesList from "../fixtures-list/page";

export default function FixturesContainer() {
  return (
    <div className="flex flex-col items-center w-1/2 h-40 text-white bg-blue-900 rounded shadow-lg">
      <h1>Fixtures List</h1>
      <FixturesList />
    </div>
  );
}
