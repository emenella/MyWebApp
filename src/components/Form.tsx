'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
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

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"

const formSchema = z.object({
    fullname: z.string().min(2, { message: "Please enter your full name" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    phone: z.string().optional(),
    compagny: z.string().optional(),
    message: z.string().min(10, { message: "Please enter a message of at least 10 characters" }),
})

type ValidationSchema = z.infer<typeof formSchema>;

export const FormComposant: React.FC = () => {

    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
      })

    const onSubmit: SubmitHandler<ValidationSchema> = (value) => {
        toast({
            title: "Test Form",
            description :  <>
                <h2 className="font-bold">Full Name :</h2>
                <p>{value.fullname}</p>
                <h2 className="font-bold">Email :</h2>
                <p>{value.email}</p>
                <h2 className="font-bold">Phone :</h2>
                <p>{value.phone}</p>
                <h2 className="font-bold">Compagny :</h2>
                <p>{value.compagny}</p>
                <h2 className="font-bold">Message :</h2>
                <p>{value.message}</p>
            </>
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField control={form.control} name="fullname"
                render={({field}) => {
                    return (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="full name" {...field} />
                            </FormControl>
                            <FormDescription>Enter your full name</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}}/>
                <FormField control={form.control} name="email"
                    render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="email" {...field} />
                                </FormControl>
                                <FormDescription>Enter your email</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}}/>
                <FormField control={form.control} name="phone"
                    render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="phone" {...field} />
                                </FormControl>
                                <FormDescription>Enter your phone</FormDescription>
                                <FormMessage />
                            </FormItem>
                )}}/>
                <FormField control={form.control} name="compagny"
                    render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>Compagny</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="compagny" {...field} />
                                </FormControl>
                                <FormDescription>Enter your compagny</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}}/>
                <FormField control={form.control} name="message"
                    render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="message" {...field} />
                                </FormControl>
                                <FormDescription>Enter your message</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}}/>

                <Button type="submit">Submit</Button>
            </form>
            <Toaster />
        </Form>
    )
}

export const FormCard: React.FC<{className?: string}> = (props) => {
    return (
        <div className={props.className}>
            <Card>
                <CardHeader>
                    <CardTitle>Contact me</CardTitle>
                </CardHeader>
                <CardContent>
                    <FormComposant />
                </CardContent>
            </Card>
        </div>
    )
}