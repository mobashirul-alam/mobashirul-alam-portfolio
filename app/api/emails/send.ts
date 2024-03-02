import { sendForm } from "@emailjs/browser";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { name, email, message, serviceId, templateId, userId } =
            req.body;

        try {
            const formData = new URLSearchParams({
                name,
                email,
                message,
            }).toString();
            await sendForm(serviceId, templateId, formData, userId);
            return res.status(200).json({ message: "Email sent successfully" });
        } catch (error: any) {
            return res
                .status(error.statusCode || 500)
                .json({ error: error.message });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
