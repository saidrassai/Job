import React, { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

// Create the context
export const AppContext = createContext();

// Context Provider Component
export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    });
    const [isSearched, setIsSearched] = useState(false); 
    
    const [jobs, setJobs] = useState([])
    const [showRecuiterLogin,setShowRecruiterLogin]= useState(false)

    

    // Function to fetch hobs
    const fetchJobs = async ()=> {
        setJobs(jobsData)
    }
    

    useEffect(()=>{
        fetchJobs()

    },[])

    const value = {
        searchFilter,setSearchFilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecuiterLogin,setShowRecruiterLogin,

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
