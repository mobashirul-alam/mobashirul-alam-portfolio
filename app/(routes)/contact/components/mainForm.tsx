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
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

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

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast(data.name);
        toast(data.email);
        toast(data.message);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
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
                                    className="min-h-36 font-[450] bg-transparent border-[#1E2D3D] focus:bg-transparent"
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
        </Form>
    );
};

export default MainForm;
