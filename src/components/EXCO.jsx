import React from "react";

const ExecutivesTable = () => {
  // Executives data array
  const executives = [
    // Male Excos
    {
      id: 1,
      name: "ABDALLAH MUHAMMAD",
      position: "AMIR",
      department: "MBBS",
      level: "400",
      phone: "09138717168",
    },
    {
      id: 2,
      name: "AMINULLAH BIOKU",
      position: "NAIBUL AMIR ADMIN",
      department: "PHARMACY",
      level: "400",
      phone: "08129244732",
    },
    {
      id: 3,
      name: "MUSLIM RIKIJI",
      position: "NAIBUL AMIR DA'AWAH",
      department: "PETROLEUM ENGINEERING",
      level: "500",
      phone: "08149198889",
    },
    {
      id: 4,
      name: "ABDUR-RAHMAN AWOJOBI",
      position: "GENERAL SECETARY",
      department: "LAW",
      level: "400",
      phone: "08123496667",
    },
    {
      id: 5,
      name: "AKANBI ABDULBAAR",
      position: "ASS. GENERAL SECETARY",
      department: "ARCHITECTURE",
      level: "300",
      phone: "09038322195",
    },
    {
      id: 6,
      name: "ALIYU IBRAHIM",
      position: "PUBLIC RELATION OFFICER",
      department: "COMPUTER ENGINEERING",
      level: "400",
      phone: "08038169434",
    },
    {
      id: 7,
      name: "IBRAHIM MULERO",
      position: "FINANCIAL SECETARY",
      department: "ENGINEERING",
      level: "300",
      phone: "08108660433",
    },
    {
      id: 8,
      name: "IBRAHIM ABUBAKAR",
      position: "ASS. FINANCIAL SECETARY",
      department: "COMPUTER SCIENCE",
      level: "300",
      phone: "08060131363",
    },
    {
      id: 9,
      name: "WALIYULLAH ADERIBIGBE",
      position: "ASSET MAINTAINACE OFFICER I",
      department: "AERONAUTICAL ENGINEERING",
      level: "300",
      phone: "08109058025",
    },
    {
      id: 10,
      name: "MUKHTAR HABEEBU",
      position: "ASSET MAINTAINANCE OFFICER II",
      department: "ENGINEERING",
      level: "300",
      phone: "09136730229",
    },
    {
      id: 11,
      name: "IBRAHIM SANYA",
      position: "WELFARE OFFICER I",
      department: "MECHATRONICS ENGINEERING",
      level: "300",
      phone: "09033602406",
    },
    {
      id: 12,
      name: "MOHAMMED JAMILU ABUBAKAR",
      position: "WELFARE OFFICER II",
      department: "CHEMICAL ENGINEERING",
      level: "200",
      phone: "08129172714",
    },
    {
      id: 13,
      name: "IBRAHIM SANUSI",
      position: "DIRECTOR OF STUDIES",
      department: "MBBS",
      level: "300",
      phone: "09023556328",
    },
    {
      id: 14,
      name: "ABUBAKAR BABABE",
      position: "MUADHIN",
      department: "ECONOMICS",
      level: "200",
      phone: "09168836940",
    },
    {
      id: 14,
      name: "YAHAYA ABDULLAHI",
      position: "MUADHIN II",
      department: "COMPUTER SCIENCE",
      level: "200",
      phone: "09039147388",
    },
    {
      id: 15,
      name: "ABDULROQEEB SHITTU",
      position: "EDITOR IN CHIEF I",
      department: "MBBS",
      level: "500",
      phone: "08152969233",
    },
    {
      id: 16,
      name: "MOGAJI MOHAMMED",
      position: "EDITOR IN CHIEF II",
      department: "COMPUTER SCIENCE",
      level: "400",
      phone: "09078452773",
    },
    {
      id: 17,
      name: "NAZIR MUHAMMAD",
      position: "DAAWAH COORDINATOR I",
      department: "MBBS",
      level: "200",
      phone: "08068334529",
    },
    {
      id: 18,
      name: "ABDULHALIM MUSTAPHA",
      position: "DAAWAH COORDINATOR II",
      department: "ENGINEERING",
      level: "200",
      phone: "07048779936",
    },

    // Female Excos
    {
      id: 19,
      name: "RAPHAT ATOYEBI",
      position: "AMIRA",
      department: "PHARMACY",
      level: "500",
      phone: "09162093785",
    },
    {
      id: 20,
      name: "MISTURAH SADIQ",
      position: "NAIBATUL AMIRA ADMIN",
      department: "NURSING",
      level: "400",
      phone: "08176269358",
    },
    {
      id: 21,
      name: "SALMA IDRIS",
      position: "NAIBATUL AMIRA DA'AWAH",
      department: "NURSING",
      level: "400",
      phone: "08078203019",
    },
    {
      id: 22,
      name: "AISHA OROPO",
      position: "GENERAL SECETARY",
      department: "MBBS",
      level: "400",
      phone: "07089235228",
    },
    {
      id: 23,
      name: "MURDHIYYA ADEYINKA",
      position: "PUBLIC RELATION OFFICER",
      department: "BIOCHEMISTRY",
      level: "300",
      phone: "07034508777",
    },
    {
      id: 24,
      name: "HIQMA YEKEEN",
      position: "FINANCIAL SECETARY",
      department: "MBBS",
      level: "400",
      phone: "07069976630",
    },
    {
      id: 25,
      name: "AZEEZAT SAIDU",
      position: "TREASURER",
      department: "MBBS",
      level: "400",
      phone: "07089455909",
    },
    {
      id: 26,
      name: "AISHA ADEBAYO",
      position: "ASSET MAINTAINAGE OFFICER I",
      department: "ENGINEERING",
      level: "300",
      phone: "08145159661",
    },
    {
      id: 27,
      name: "MASIDAT OLALEYE",
      position: "ASSET MAINTAINANCE OFFICER II",
      department: "NURSING",
      level: "200",
      phone: "09137506206",
    },
    {
      id: 28,
      name: "AISHA DAUDA",
      position: "DIRECTOR OF STUDIES",
      department: "PHARMACY",
      level: "500",
      phone: "08148939758",
    },
    {
      id: 29,
      name: "ZAYTOON UMAR",
      position: "WELFARE OFFICER I",
      department: "PHARMACY",
      level: "400",
      phone: "09063151271",
    },
    {
      id: 30,
      name: "IKRAM ABDULSHAKUR",
      position: "WELFARE OFFICER II",
      department: "MBBS",
      level: "200",
      phone: "08165354789",
    },
    {
      id: 31,
      name: "HALIMA ABDULSALAM",
      position: "SISTERS CIRCLE COORDINATOR I",
      department: "ANATOMY",
      level: "300",
      phone: "08156115111",
    },
    {
      id: 32,
      name: "KHADIJA BAPPA",
      position: "SISTERS CIRCLE COORDINATOR II",
      department: "MBBS",
      level: "300",
      phone: "09162920252",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Meet the Executives of{" "}
        <span className="text-primary-dark underline">2025/2026</span>
      </h1>

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-primary text-gray-100">
              <th className="py-3 px-4 border text-left">S/N</th>
              <th className="py-3 px-4 border text-left whitespace-nowrap">
                Portfolio
              </th>
              <th className="py-3 px-4 border text-left">Executive's name</th>
              <th className="py-3 px-4 border text-left">Department/Faculty</th>
              <th className="py-3 px-4 border text-left">Level</th>
              <th className="py-3 px-4 border text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {executives.map((exec) => (
              <tr key={exec.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border">{exec.id}</td>
                <td className="py-3 px-4 border">{exec.position}</td>
                <td className="py-3 px-4 border">{exec.name}</td>
                <td className="py-3 px-4 border">{exec.department}</td>
                <td className="py-3 px-4 border">{exec.level}</td>
                <td className="py-3 px-4 border">{exec.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="mt-4 text-sm text-gray-600">
        Showing 1 to 10 of {executives.length} executives
      </div> */}
    </div>
  );
};

export default ExecutivesTable;
