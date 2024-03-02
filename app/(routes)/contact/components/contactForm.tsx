"use client";

import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MainForm from "./mainForm";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const currentDate = new Date();

    // Array of abbreviated weekday names (Sun, Mon, Tue, etc.)
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const abbreviatedWeekday = weekdays[currentDate.getDay()];

    // Get the day of the month (1-31)
    const dayOfMonth = currentDate.getDate();

    // Array of abbreviated month names (Jan, Feb, Mar, etc.)
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const abbreviatedMonth = months[currentDate.getMonth()];

    // Format the current date as like "Thu 21 Apr"
    const formattedDate = `${abbreviatedWeekday} ${dayOfMonth} ${abbreviatedMonth}`;

    const codeString = `
 1   const button = document.querySelector('#submitBtn');
 2
 3   const message = {
 4   	 name: "${name}",
 5   	 email: "${email}",
 6   	 message: "${message}",
 7   	 date: "${formattedDate}"
 8   }
 9
10   button.addEventListener('click', () => {
11   	form.send(message);
12   })
  `;

    // setting custom style for codeblock
    const customStyle = { ...arta };
    customStyle.hljs.background = "#011627";
    customStyle.hljs.fontSize = "18px";

    return (
        <div className="h-full w-full">
            <div className="hidden md:block border-b w-full">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>contacts</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100%-48px)]">
                <div className="lg:border-r flex justify-center items-center">
                    {/* ----- MAIN FORM ----- */}
                    <MainForm {...{ setName, setEmail, setMessage }} />
                </div>

                <div className="hidden lg:flex justify-center items-center px-10">
                    <SyntaxHighlighter
                        language="javascript"
                        style={customStyle}
                        wrapLongLines={true}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
