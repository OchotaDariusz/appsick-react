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
