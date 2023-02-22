export const isToday = (visit) => {
  const visitDate = new Date(visit.date);
  const now = new Date();

  return (
    visitDate.getFullYear() === now.getFullYear() &&
    visitDate.getMonth() === now.getMonth() &&
    visitDate.getDate() === now.getDate()
  );
};

export const formatVisitDate = (visit) => {
  visit.date = [
    new Date(visit.date[0]).toLocaleDateString("pl-PL"),
    new Date(visit.date[1]).toLocaleTimeString("pl-PL"),
  ];
  return visit;
};

export const getMedicalDataByVisitId = async (visitId) => {
  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}/api/medical_data/visit/${visitId}`,
    {
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return data.json();
};
