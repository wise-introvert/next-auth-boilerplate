import { type MouseEvent, type ChangeEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import axios, { type AxiosResponse } from "axios";
import { Post } from "@prisma/client";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Post | null>(null);

  const createPost = async (): Promise<void> => {
    try {
      setLoading(true);
      const response: AxiosResponse = await axios.post<Post>(
        "/api/posts",
        {
          title,
          content,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      setPost(response.data.post);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form>
          <input
            disabled={loading}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => {
              setTitle(e.target.value);
            }}
            placeholder={"title"}
          />
          <textarea
            disabled={loading}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
              setContent(e.target.value);
            }}
            placeholder={"content"}
          />
          <button
            disabled={loading}
            onClick={async (
              e: MouseEvent<HTMLButtonElement>
            ): Promise<void> => {
              e.preventDefault();
              await createPost();
            }}
            type={"submit"}
          >
            Submit
          </button>
        </form>
        {post && (
          <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        )}
      </main>
    </>
  );
}
