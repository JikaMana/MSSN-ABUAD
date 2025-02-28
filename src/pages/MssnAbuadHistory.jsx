import React from "react";

const MssnAbuadHistory = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:pt-24">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          History of MSSN ABUAD
        </h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Introduction
          </h2>
          <p className="text-gray-700">
            The{" "}
            <strong>Muslim Students' Society of Nigeria (MSSN) ABUAD</strong> is
            a branch of MSSN operating at Afe Babalola University, Ado-Ekiti. It
            serves as the main Islamic student body, promoting Islamic
            teachings, unity, and welfare among Muslim students within the
            university.
          </p>
        </section>

        {/* Foundation and Early Years */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Establishment and Growth
          </h2>
          <p className="text-gray-700">
            MSSN ABUAD was established in the early years of the university's
            foundation to cater to the spiritual and social needs of Muslim
            students. Over time, it has grown into an active and well-organized
            body within the campus, recognized by both the university management
            and the national MSSN leadership.
          </p>
        </section>

        {/* Activities and Contributions */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Activities and Contributions
          </h2>
          <p className="text-gray-700">
            MSSN ABUAD plays a crucial role in fostering Islamic awareness and
            unity among students. Some of its key activities include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Jumu'ah prayers and weekly halaqahs for spiritual growth.</li>
            <li>Islamic lectures and seminars featuring guest speakers.</li>
            <li>Ramadan programs, including Iftar sessions.</li>
            <li>Islamic Awareness Week to promote Islamic knowledge.</li>
            <li>Charity and community service initiatives.</li>
          </ul>
        </section>

        {/* Challenges and Future Goals */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Challenges and Future Goals
          </h2>
          <p className="text-gray-700">
            MSSN ABUAD has faced challenges such as securing a permanent mosque
            structure, funding for activities, and ensuring continuous student
            participation. However, the society remains dedicated to expanding
            its reach and enhancing the welfare of Muslim students at ABUAD.
          </p>
        </section>

        <section className="mb-6">
          <p className="text-gray-700">
            MSSN ABUAD continues to be a pillar of Islamic guidance and support
            for Muslim students, fostering a strong Islamic identity within the
            university community.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MssnAbuadHistory;
