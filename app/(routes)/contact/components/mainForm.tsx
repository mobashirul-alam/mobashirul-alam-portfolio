"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useRef } from "react";

const FormSchema = z.object({
    name: z.string().min(3, {
        message: "Name is required.",
    }),
    email: z.string().min(1, {
        message: "Email is required.",
    }),
    message: z.string().min(5, {
        message: "Message is required.",
    }),
});

interface MainFormProps {
    setName: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
    setMessage: Dispatch<SetStateAction<string>>;
}

const MainForm: React.FC<MainFormProps> = ({
    setName,
    setEmail,
    setMessage,
}) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const emailJsFormRef = useRef<HTMLFormElement>(null);

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // try {
        //     const formData = new FormData(emailJsFormRef.current);
        //     formData.set("name", data.name);
        //     formData.set("email", data.email);
        //     formData.set("message", data.message);
        //     await sendForm(
        //         `${process.env.EMAILJS_SERVICE_ID}`,
        //         `${process.env.EMAILJS_TEMPLATE_ID}`,
        //         formData,
        //         `${process.env.EMAILJS_USER_ID}`
        //     );
        //     toast.success("Email sent successfully");
        // } catch (error: any) {
        //     console.log(error);
        //     toast.error("Error sending email: " + error.message);
        // }
        console.log(data);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-11/12 md:w-3/4 lg:w-4/5 2xl:w-2/3 space-y-3 md:space-y-6 my-5 md:my-0"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel className="text-base font-[450]">
                                _name:
                            </FormLabel>
                            <FormControl className="bg-transparent">
                                <Input
                                    placeholder="Your name"
                                    onChange={setName(field.value)}
                                    {...field}
                                    className="font-[450] bg-transparent border-[#1E2D3D] focus:bg-transparent"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel className="text-base font-[450]">
                                _email:
                            </FormLabel>
                            <FormControl className="bg-transparent">
                                <Input
                                    placeholder="Your email"
                                    onChange={setEmail(field.value)}
                                    {...field}
                                    className="font-[450] bg-transparent border-[#1E2D3D] focus:bg-transparent"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel className="text-base font-[450]">
                                _message:
                            </FormLabel>
                            <FormControl className="bg-transparent">
                                <Textarea
                                    placeholder="Message..."
                                    onChange={setMessage(field.value)}
                                    {...field}
                                    className="min-h-24 md:min-h-36 font-[450] bg-transparent border-[#1E2D3D] focus:bg-transparent"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="border hover:border-white">
                    Submit
                </Button>
            </form>

            {/* <form
                id="emailjs-form"
                style={{ display: "none" }}
                ref={emailJsFormRef}
            ></form> */}
        </Form>
    );
};

export default MainForm;
