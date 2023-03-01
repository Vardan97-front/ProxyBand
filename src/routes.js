import React, { Suspense } from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import Users from "./pages/users";
import Posts from "./pages/posts";

function Index() {
    return (
        <Suspense
            fallback={
                <div
                    style={ {
                        color: "#fff",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                    } }
                >
                    Loading...
                </div>
            }
        >
            <Routes>
                <Route path="/" element={ <Users /> } />
                <Route path="/posts/:userId" element={ <Posts /> } />
                <Route path={"*"} element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
}

export default Index;