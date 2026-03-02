import DrivingClassPage from "../components/DrivingClass";

export default async function IndividualDrivingClassPage({ params }) {
  const { classId } = await params;
  return <DrivingClassPage classId={classId} />;
}
