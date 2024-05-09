"use client";
import "tailwindcss/tailwind.css";

import { Input } from "@/pageComponents/input";

import { Flex, Text, Button, TextField } from "@radix-ui/themes";
import { useChat } from "ai/react";

import { useRef, useEffect } from "react";

export const runtime = "experimental-edge";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatParent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  return (
    <main
      className="flex flex-col w-full  bg-background "
      style={{ height: "calc(100vh - 80px)" }}
    >
      <section className="p-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-3xl mx-auto items-center"
        >
          <TextField.Root
            variant="classic"
            className="flex-1 min-h-[40px] margin-2"
            placeholder="Type your question here..."
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <Button
            // highContrast
            variant="solid"
            className="ml-2 p-5"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </section>
      <section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl bg-gray-800">
        <ul
          ref={chatParent}
          className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4"
        >
          {messages.map((m, index) => (
            <>
              {m.role === "user" ? (
                <li key={index} className="flex flex-row">
                  <div className="rounded-xl p-4 bg-background shadow-md flex">
                    <p className="text-primary">{m.content}</p>
                  </div>
                </li>
              ) : (
                <li key={index} className="flex flex-row-reverse">
                  <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4">
                    <p className="text-primary">
                      <span className="font-bold">Answer: </span>
                      {m.content}
                    </p>
                  </div>
                </li>
              )}
            </>
          ))}
        </ul>
      </section>
    </main>
  );
}
