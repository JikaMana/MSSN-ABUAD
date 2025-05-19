import React, { createContext, useEffect, useState } from "react";
import Dashboard from "../components/admin/Dashboard";
import axios from "axios";

export const GlobalAdminDashboardContext = createContext({});

const AdminDashboardContext = () => {
  const [apiData, setApiData] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(null);
  const [numberOfBlogs, setNumberOfBlogs] = useState(null);
  const [numberOfProducts, setNumberOfProducts] = useState(null);
  const [numberOfNews, setNumberOfNews] = useState(null);
  const [numberOfPendingQuestions, setNumberOfPendingQuestions] = useState(0);

  useEffect(() => {
    const fetchAllAPI = async () => {
      try {
        const [eventsRes, blogsRes, productsRes, newsRes] = await Promise.all([
          axios.get("https://mssn.pythonanywhere.com/api/events"),
          axios.get("https://mssn.pythonanywhere.com/api/blogs"),
          axios.get("https://mssn.pythonanywhere.com/api/products"),
          axios.get("https://mssn.pythonanywhere.com/api/news"),
        ]);

        setNumberOfEvents(eventsRes.data?.length);
        setNumberOfBlogs(blogsRes.data?.length);
        setNumberOfProducts(productsRes.data?.length);
        setNumberOfNews(newsRes.data?.length);
        // setNumberOfPendingQuestions(questionsRes.data?.length);
      } catch (error) {
        console.error("Error fetching admin dashboard data:", error);
      }
    };

    fetchAllAPI();
  }, [
    numberOfBlogs,
    numberOfEvents,
    numberOfNews,
    // numberOfPendingQuestions,
    numberOfProducts,
  ]);

  return (
    <GlobalAdminDashboardContext.Provider
      value={{
        numberOfBlogs,
        numberOfEvents,
        numberOfNews,
        numberOfProducts,
        numberOfPendingQuestions,
      }}
    >
      <Dashboard />
    </GlobalAdminDashboardContext.Provider>
  );
};

export default AdminDashboardContext;
