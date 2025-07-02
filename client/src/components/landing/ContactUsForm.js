"use client";

import React from "react";
import { CheckCircle, CalendarCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  description: z.string(),
});

const ContactUsForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  return (
    <div className="flex flex-row gap-5">
      <div className="rounded-3xl p-14 shadow-xl">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Book a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            30-min
          </span>{" "}
          Introduction Call <span className="inline-block">👋</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mt-4">
          Hop on a quick call and turn half an hour into the start of something
          great.
        </p>

        {/* What we'll be doing */}
        <div className="mt-6">
          <p className="font-medium text-gray-900 mb-3">
            What we'll be doing for ~30 mins:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neutral-400" />A quick intro.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neutral-400" />
              Unpacking your project.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neutral-400" />
              Pinpoint how we can help.
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <Button variant="outline" className="mt-5 w-full">
          <CalendarCheck className="w-5 h-5" />
          Book a Call
        </Button>
      </div>

      <div className="max-w-md w-full rounded-3xl p-8 border flex flex-col">
        <Form {...form}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl className="mb-5">
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Query</FormLabel>
                <FormControl>
                  <Textarea className='h-[120px] resize-none' {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-5">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactUsForm;
