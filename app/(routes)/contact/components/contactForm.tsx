import { RiCloseLine } from "@remixicon/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MainForm from "./mainForm";

const ContactForm = () => {
    const codeString = `
   1    const button = document.querySelector('#sendBtn');
   2
   3    const message = {
   4    	 name: "Jonathan Davis",
   5    	 email: "",
   6    	 message: "",
   7    	 date: "Thu 21 Apr"
   8    }
   9
  10    button.addEventListener('click', () => {
  11    	form.send(message);
  12    })
  `;

    // setting custom style for codeblock
    const customStyle = { ...rainbow };
    customStyle.hljs.background = "#011627";
    customStyle.hljs.fontSize = "18px";

    return (
        <div className="h-full w-full ">
            <div className="border-b w-full">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>contacts</p>
                    <RiCloseLine />
                </div>
            </div>
            <div className="grid grid-cols-2 h-[calc(100%-48px)]">
                <div className="border-r flex justify-center items-center">
                    {/* ----- MAIN FORM ----- */}
                    <MainForm />
                </div>

                <div className="flex justify-center items-center">
                    <SyntaxHighlighter
                        language="javascript"
                        style={customStyle}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
