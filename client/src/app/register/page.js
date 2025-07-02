"use client";

import Topbar from "@/components/Topbar";
import ExpandableAttendance from "@/components/ExpandableAttendance";
import { useState, useEffect } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  fullname: z.string(),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
  gender: z.enum(["Male", "Female"]),
});

export default function Page() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      dob: "",
      gender: "",
    },
  });

  function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

  async function onSubmit(values) {
    const data = {
      fullname: values.fullname,
      age: calculateAge(values.dob),
      gender: values.gender,
    }
    try {
    const response = await axios.post("http://localhost:8000/api/v1/students/register", values);

    if (response.status === 200 || response.status === 201) {
      alert("Student registered successfully!");
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    console.error("POST error:", error);
    alert("Failed to register student.");
  }
  }

  return (
    <div className="flex">
      <div className="flex-1">
        <Topbar />
        <main className="pt-5 px-6 text-sm space-y-6">
          <h1 className="text-2xl font-bold text-yellow-600">
            Register Student
          </h1>
          <p className="text-gray-500">Proposed details of the panel</p>
          <div className="font-bold text-xl">{formattedDate}</div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>This is your full name.</FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between"
                        >
                          {field.value || "Select gender"}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onSelect={() => field.onChange("Male")}
                        >
                          Male
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={() => field.onChange("Female")}
                        >
                          Female
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <br />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </main>
      </div>
    </div>
  );
}
