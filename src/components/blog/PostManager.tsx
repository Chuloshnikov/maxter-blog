"use client";

import React, { useState } from "react";
import UploadButton from "../ui/UploadButton";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { createPostClient } from "@/lib/createPostClient";
import toast from "react-hot-toast";
import { validatePostForm } from "@/lib/validation";
import ButtonLoading from "../ui/ButtonLoading";
import { PostInfo } from "@/models/Post";

interface PostSender {
  action: string;
  category: string | string[];
}

const PostManager = ({ action, category }: PostSender) => {
  const [postImg, setPostImg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [descLength, setDescLength] = useState<number>(0);

  const reloadPage = ({ path }: { path: string }) => {
    setTimeout(() => {
      window.location.href = path;
    }, 2000);
  };

  const toastSuccessStyles = {
    style: {
      borderRadius: "0px",
      border: "1px solid #3DB4FF",
      padding: "16px",
      color: "#3DB4FF",
    },
    iconTheme: {
      primary: "#3DB4FF",
      secondary: "#FFFAEE",
    },
  };

  const toastErrorStyles = {
    style: {
      borderRadius: "0px",
      border: "1px solid #EF4444",
      padding: "16px",
      color: "#EF4444",
    },
    iconTheme: {
      primary: "#EF4444",
      secondary: "#FFFAEE",
    },
  };

  type dataObject = {
    title: string;
    desc: string;
    postImg: string;
    slug: string;
  };

  const mutation = useMutation({
    mutationFn: async (dataObject: dataObject) => createPostClient(dataObject),
    onSuccess: (res: any) => {
      toast.success(
        res.message || `Post ${action}d, wait for moderation!`,
        toastSuccessStyles
      );
      reloadPage({ path: `/post/${res._id}` });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create post", toastErrorStyles);
    },
  });

  async function handleFormAction(formData: FormData) {
    setLoading(true);
    const dataObject: any = {};

    formData.forEach((value, key) => {
      dataObject[key] = value;
    });

    const validationErrors = validatePostForm(dataObject);
    if (validationErrors.length > 0) {
      toast.error(validationErrors.join(", "), toastErrorStyles);
      setLoading(false);
      return;
    }

    if (action === "create") {
      mutation.mutate(dataObject);
    }
    setLoading(false);
  }

  return (
    <div className="w-full">
      <div>
        <h2 className="capitalize text-xl font-bold text-accentBg">
          {action} a post
        </h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          handleFormAction(formData);
        }}
        className="w-full flex flex-col"
      >
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <div>
              <label htmlFor="titleInput" className="input-label">
                title:
              </label>
              <input name="title" id="titleInput" type="text" />
            </div>
            <div>
              <label htmlFor="descriptionInput" className="input-label">
                Content:
              </label>
              <div className="relative">
                <textarea
                  name="desc"
                  id="descriptionInput"
                  rows={10}
                  className="w-full resize-none"
                  onChange={(e) => setDescLength(e.target.value.length)}
                />
                <div className="absolute bottom-2 right-2 text-sm">
                  <span className="px-2 py-1 bg-gray-100 rounded-full">
                    {descLength}/2000
                  </span>
                </div>
              </div>
            </div>
            <input type="hidden" name="slug" value={category} />
            <button
              type="submit"
              className="submitButton capitalize mt-4 w-full hidden lg:block"
            >
              {loading ? <ButtonLoading margin="" loading={loading} /> : action}
            </button>
          </div>
          <div className="w-full">
            <label className="input-label mt-4">Image:</label>
            <div className="relative h-[200px] md:h-[400px] border-2 border-accentBg">
              {postImg ? (
                <Image
                  src={postImg || ""}
                  alt="cover image"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src="/no-image.jpg"
                  alt="cover image"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute right-2 bottom-2">
                <UploadButton onUploadComplete={setPostImg} />
                <input type="hidden" name="postImg" value={postImg} />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="submitButton capitalize mt-4 w-full lg:hidden"
        >
          {loading ? <ButtonLoading margin="" loading={loading} /> : action}
        </button>
      </form>
    </div>
  );
};

export default PostManager;
