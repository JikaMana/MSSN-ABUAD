import React from "react";

const ExecutivesTable = () => {
  // Executives data array
  const executives = [
    {
      id: 1,
      name: "ABDALLAH MUHAMMAD",
      position: "AMIR",
      department: "MBBS",
      level: "400",
    },
    {
      id: 2,
      name: "AMINULLAH BIOKU",
      position: "NAIBUL AMIR ADMIN",
      department: "PHARMACY",
      level: "400",
    },
    {
      id: 3,
      name: "MUSLIM RIKIJI",
      position: "NAIBUL AMIR DA'AWAH",
      department: "PETROLEUM ENGINEERING",
      level: "500",
    },
    {
      id: 19,
      name: "RAPHAT ATOYEBI",
      position: "AMIRA",
      department: "PHARMACY",
      level: "500",
    },
    {
      id: 20,
      name: "MISTURAH SADIQ",
      position: "NAIBATUL AMIRA ADMIN",
      department: "NURSING",
      level: "400",
    },
    {
      id: 21,
      name: "SALMA IDRIS",
      position: "NAIBATUL AMIRA DA'AWAH",
      department: "NURSING",
      level: "400",
    },
    {
      id: 4,
      name: "ABDUR-RAHMAN AWOJOBI",
      position: "GENERAL SECETARY",
      department: "LAW",
      level: "400",
    },
    {
      id: 5,
      name: "AKANBI ABDULBAAR",
      position: "ASS. GENERAL SECETARY",
      department: "ARCHITECTURE",
      level: "300",
    },
    {
      id: 22,
      name: "AISHA OROPO",
      position: "GENERAL SECETARY",
      department: "MBBS",
      level: "400",
    },
    {
      id: 6,
      name: "ALIYU IBRAHIM",
      position: "PUBLIC RELATION OFFICER",
      department: "COMPUTER ENGINEERING",
      level: "400",
    },
    {
      id: 23,
      name: "MURDHIYYA ADEYINKA",
      position: "PUBLIC RELATION OFFICER",
      department: "BIOCHEMISTRY",
      level: "300",
    },
    {
      id: 24,
      name: "HIQMA YEKEEN",
      position: "FINANCIAL SECETARY",
      department: "MBBS",
      level: "400",
    },
    {
      id: 7,
      name: "IBRAHIM MULERO",
      position: "FINANCIAL SECETARY",
      department: "ENGINEERING",
      level: "300",
    },
    {
      id: 8,
      name: "IBRAHIM ABUBAKAR",
      position: "ASS. FINANCIAL SECETARY",
      department: "COMPUTER SCIENCE",
      level: "300",
    },
    {
      id: 9,
      name: "WALIYULLAH ADERIBIGBE",
      position: "ASSET MAINTAINACE OFFICER I",
      department: "AERONAUTICAL ENGINEERING",
      level: "300",
    },
    {
      id: 10,
      name: "MUKHTAR HABEEBU",
      position: "ASSET MAINTAINANCE OFFICER II",
      department: "ENGINEERING",
      level: "300",
    },
    {
      id: 11,
      name: "IBRAHIM SANYA",
      position: "WELFARE OFFICER I",
      department: "MECHATRONICS ENGINEERING",
      level: "300",
    },
    {
      id: 12,
      name: "MOHAMMED JAMILU ABUBAKAR",
      position: "WELFARE OFFICER II",
      department: "CHEMICAL ENGINEERING",
      level: "200",
    },
    {
      id: 13,
      name: "IBRAHIM SANUSI",
      position: "DIRECTOR OF STUDIES",
      department: "MBBS",
      level: "300",
    },
    {
      id: 17,
      name: "NAZIR MUHAMMAD",
      position: "DAAWAH COORDINATOR I",
      department: "MBBS",
      level: "200",
    },
    {
      id: 18,
      name: "ABDULHALIM MUSTAPHA",
      position: "DAAWAH COORDINATOR II",
      department: "ENGINEERING",
      level: "200",
    },
    {
      id: 14,
      name: "ABUBAKAR BABABE",
      position: "MUADHIN",
      department: "ECONOMICS",
      level: "200",
    },
    {
      id: 33,
      name: "YAHAYA ABDULLAHI",
      position: "MUADHIN II",
      department: "COMPUTER SCIENCE",
      level: "200",
    },
    {
      id: 15,
      name: "ABDULROQEEB SHITTU",
      position: "EDITOR IN CHIEF I",
      department: "MBBS",
      level: "500",
    },
    {
      id: 16,
      name: "MOGAJI MOHAMMED",
      position: "EDITOR IN CHIEF II",
      department: "COMPUTER SCIENCE",
      level: "400",
    },

    {
      id: 25,
      name: "AZEEZAT SAIDU",
      position: "TREASURER",
      department: "MBBS",
      level: "400",
    },
    {
      id: 26,
      name: "AISHA ADEBAYO",
      position: "ASSET MAINTAINAGE OFFICER I",
      department: "ENGINEERING",
      level: "300",
    },
    {
      id: 27,
      name: "MASIDAT OLALEYE",
      position: "ASSET MAINTAINANCE OFFICER II",
      department: "NURSING",
      level: "200",
    },
    {
      id: 28,
      name: "AISHA DAUDA",
      position: "DIRECTOR OF STUDIES",
      department: "PHARMACY",
      level: "500",
    },
    {
      id: 29,
      name: "ZAYTOON UMAR",
      position: "WELFARE OFFICER I",
      department: "PHARMACY",
      level: "400",
    },
    {
      id: 30,
      name: "IKRAM ABDULSHAKUR",
      position: "WELFARE OFFICER II",
      department: "MBBS",
      level: "200",
    },
    {
      id: 31,
      name: "HALIMA ABDULSALAM",
      position: "SISTERS CIRCLE COORDINATOR I",
      department: "ANATOMY",
      level: "300",
    },
    {
      id: 32,
      name: "KHADIJA BAPPA",
      position: "SISTERS CIRCLE COORDINATOR II",
      department: "MBBS",
      level: "300",
    },
  ];
  const exOfficials = [
    {
      id: 1,
      name: "MUSTAPHA LAWAL OLAMIDE",
      position: "ADVISOR",
      department: "MECHATRONICS ENGINEERING",
      level: "400",
    },
    {
      id: 2,
      name: "ABDULRAUF HANEEF",
      position: "ADVISOR",
      department: "PHARMACY",
      level: "400",
    },
    {
      id: 3,
      name: "SODIQ OJO",
      position: "ADVISOR",
      department: "COMPUTER SCIENCE",
      level: "400",
    },
    {
      id: 4,
      name: "ABIDEEN YASMIN",
      position: "ADVISOR",
      department: "PHARMACY",
      level: "400",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-center mb-6">
          Meet the Executives of{" "}
          <span className="text-primary-dark underline">2025/2026</span>
        </h1>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-primary text-gray-100">
                <th className="py-3 px-4 border text-left">S/N</th>
                <th className="py-3 px-4 border text-left">Portfolio</th>
                <th className="py-3 px-4 border text-left">Executive's name</th>
                <th className="py-3 px-4 border text-left">
                  Department/Faculty
                </th>
                <th className="py-3 px-4 border text-left">Level</th>
              </tr>
            </thead>
            <tbody>
              {executives.map((exec, index) => (
                <tr key={exec.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border">{index + 1}</td>
                  <td className="py-3 px-4 border  whitespace-nowrap">
                    {exec.position}
                  </td>
                  <td className="py-3 px-4 border">{exec.name}</td>
                  <td className="py-3 px-4 border">{exec.department}</td>
                  <td className="py-3 px-4 border">{exec.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Meet the Ex-Officials
        </h1>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-primary text-gray-100">
                <th className="py-3 px-4 border text-left">S/N</th>
                <th className="py-3 px-4 border text-left">Portfolio</th>
                <th className="py-3 px-4 border text-left">Executive's name</th>
                <th className="py-3 px-4 border text-left">
                  Department/Faculty
                </th>
                <th className="py-3 px-4 border text-left">Level</th>
              </tr>
            </thead>
            <tbody>
              {exOfficials.map((exec, index) => (
                <tr key={exec.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border">{index + 1}</td>
                  <td className="py-3 px-4 border  whitespace-nowrap">
                    {exec.position}
                  </td>
                  <td className="py-3 px-4 border">{exec.name}</td>
                  <td className="py-3 px-4 border">{exec.department}</td>
                  <td className="py-3 px-4 border">{exec.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-4 text-sm text-gray-600">
        Showing 1 to 10 of {executives.length} executives
      </div> */}
    </div>
  );
};

export default ExecutivesTable;
