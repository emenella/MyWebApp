"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react"

import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    fullname: z.string().min(2, { message: "Please enter your full name" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    // falcultatif with message
    compagny: z.string().optional(),
    message: z.string().min(10, { message: "Please enter a message of at least 10 characters" }),
})

export const Form: React.FC = () => {
    const form =useForm({
        resolver: zodResolver(formSchema),
        // mode: "onBlur",
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormItem>
                    <FormLabel htmlFor="fullname">Full name</FormLabel>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="compagny">Compagny</FormLabel>
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="message">Message</FormLabel>
                </FormItem>
                <FormItem>
                    <Button type="submit">Submit</Button>
                </FormItem>
            </form>
        </Form>
    )

}