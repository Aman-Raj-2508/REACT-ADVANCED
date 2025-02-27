import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


// Step-1
export const AppContext = createContext();


// Step-2
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // Step-4 data filling

    async function fetchBlogPosts(page) {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            alert('Error')
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    // Step-5

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }



    // Step-2
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };




    // Step-3
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}