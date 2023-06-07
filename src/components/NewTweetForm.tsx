import { useSession } from "next-auth/react";
import { Button } from "./Button";
import { ProfileImage } from "./ProfileImage";
import {
  type FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { Session } from "next-auth";
import { api } from "~/utils/api";

const updateTextareaSize = (textarea?: HTMLTextAreaElement) => {
  if (!textarea) return;
  textarea.style.height = "0";
  textarea.style.height = `${textarea.scrollHeight}px`;
};

export const NewTweetForm = () => {
  const { data: sessionData } = useSession();

  if (!sessionData?.user) return null;

  // to fix the useLayoutEffect warning
  return <Form user={sessionData.user} />;
};

interface Props {
  user: Session["user"];
}
export const Form = ({ user }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>();

  const inputRef = useCallback((textarea: HTMLTextAreaElement) => {
    updateTextareaSize(textarea);
    textareaRef.current = textarea;
  }, []);

  useLayoutEffect(() => {
    updateTextareaSize(textareaRef.current);
  }, [inputValue]);

  const createTweet = api.tweet.create.useMutation({
    onSuccess: (newTweet) => {
      setInputValue("");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTweet.mutate({ content: inputValue });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 border-b px-4 py-2"
    >
      <div className="flex gap-4">
        <ProfileImage src={user.image} />
        <textarea
          ref={inputRef}
          style={{ height: 0 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          placeholder="What's happening?"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
};
