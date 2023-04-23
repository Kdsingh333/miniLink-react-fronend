import React from 'react'
import bgMobile from "../images/bg-shorten-mobile.svg";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import { useState} from 'react';

export default function Shortener() {
    const [text, setText] = useState("");
    const [links, setLinks] = useState([]);
    const [buttonText,setButtonText] = useState("Copy");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Input is empty");
        }
        else {
            // Check for whether it's a valid link
            let data = { text };
            console.log(data);

            fetch("https://urs.onrender.com/shorten", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({
                    "longUrl": `${text}`,
                })

            }).then((resp) => {
                resp.json().then((result) => {
                    console.warn("result", result)
                    setLinks(result);
                    setText("");

                })
            })
            // const shortenLink = async () => {
            //     const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
            //     const data = await res.json()

            //     console.log(data.result)
            //     setLinks(data.result);
            //     setText("");
            // }
            // shortenLink();
        }

    }

    const handleCopy = ()=>{
         navigator.clipboard.writeText(links.newUrl);
        setButtonText("Copied");
        }
    return (
        <>
            <section className="max-width shortner relative">
                <picture>
                    <source media="(min-width: 768px)" srcSet={bgDesktop} />
                    <img src={bgMobile} alt="" />
                </picture>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row">
                        <input
                            type="url"
                            placeholder="Shorten a link here"
                            className="w-full py-2 px-5 rounded-lg mb-2 md:mb-0 md:w-2/3"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn-cta rounded-lg w-full md:w-40 md:ml-5"
                            onClick={handleSubmit}
                        >
                            Shorten It!
                        </button>
                    </div>
                </form>
                <div className="flex flex-col items-center justify-center bg-white text-center md:flex-row  md:justify-between p-3 mt-3 rounded-lg shadow">
                    <article>
                        <h6 className="mb-3 md:mb-0">{links.longUrl}</h6>
                    </article>

                    <article>
                        <ul className="md:flex md:items-center">
                            <li className="md:mr-5">
                                <button className="text-cyan-500">
                                    {links.newUrl}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleCopy}
                                    className="btn-cta rounded-lg text-sm focus:bg-slate-800"
                                >
                                    {buttonText}
                                </button>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}

