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
import { toast } from "sonner";

const FormSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(1, {
        message: "Email is required.",
    }),
    message: z.string(),
});

const MainForm = () => {
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
                                    {...field}
                                    className="min-h-36 font-[450] bg-transparent border-[#1E2D3D] focus:bg-transparent"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default MainForm;
