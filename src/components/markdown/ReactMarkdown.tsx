'use client';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  markdown: string;
  parentRef: React.RefObject<HTMLDivElement>;
}

export const ReactMarkdown = ({ markdown, parentRef }: Props) => {
  return (
    <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
      {markdown}
    </Markdown>
  );
};
