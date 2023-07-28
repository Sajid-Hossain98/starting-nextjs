"use client";
import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import styles from "./dashboard.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const { mode } = useContext(ThemeContext);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading.....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    if (title && desc && img && content) {
      try {
        await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session.data.user.name,
          }),
        });
        mutate();
        e.target.reset();
        toast.success("Post added!");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Fill out all the field");
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={mode === "light" ? styles.lightPosts : styles.posts}>
          {isLoading ? (
            <p>Loading....</p>
          ) : data.length > 0 ? (
            data
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((post) => {
                const { _id, title, img } = post;

                return (
                  <div className={styles.post} key={_id}>
                    <div className={styles.imgAndTitle}>
                      <div className={styles.imgContainer}>
                        <Image
                          src={img}
                          alt={title}
                          height={100}
                          width={200}
                          className={styles.img}
                        />
                      </div>

                      <h2 className={styles.postTitle}>{title}</h2>
                    </div>

                    <span className={styles.delete}>X</span>
                  </div>
                );
              })
          ) : (
            <div className={styles.noPosts}>
              posts that you post will be shown here!
            </div>
          )}
        </div>

        <form className={styles.addPostForm} onSubmit={handleSubmit}>
          <h1 className={styles.headTitle}>Add new post</h1>
          <input
            name="title"
            type="text"
            placeholder="Title"
            className={mode === "light" ? styles.lightInput : styles.input}
          />
          <input
            name="desc"
            type="text"
            placeholder="Description"
            className={mode === "light" ? styles.lightInput : styles.input}
          />
          <input
            name="img"
            type="text"
            placeholder="Image from[https:/images.pexels.com]"
            className={mode === "light" ? styles.lightInput : styles.input}
          />
          <textarea
            name="content"
            placeholder="Content"
            className={
              mode === "light" ? styles.lightTextarea : styles.textarea
            }
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
