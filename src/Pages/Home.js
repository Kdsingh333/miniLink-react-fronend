import React from 'react'
import Boost from "../component/Boost";
import Advanced from "../component/Advanced";
import Showcase from "../component/Showcase";
import Shortner from "../component/Shortener";

function Home() {
    return (
        <div>
            <Showcase />
            <Shortner />
            <Advanced />
            <Boost />
        </div>
    )
}

export default Home;