// WITH MARKDOWN

/* import { customStyled } from "src/assets/utils/stitches";
import MarkdownTestTile from "./test-post.md?raw";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ArticleStyleContainer = customStyled("article", {
  padding: "0 50px 0 20px",

  'h1, h2, h3, h4, h5': {
    marginTop: 10,
  }
});

export default function ArticleRender() {
  return (
    <ArticleStyleContainer>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {MarkdownTestTile}
      </Markdown>
    </ArticleStyleContainer>
  );
} */


/** WITH iframing google doc */
/* import { useEffect, useRef, useState } from "react";
import { customStyled } from "src/assets/utils/stitches";
// import PostHtml from "./post-in-html/ConceitosFundamentaisdoGATCoreApontamentos.html?raw";


export default function ArticleRender() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if(containerRef && containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [containerRef])

  return (
    <ArticleStyleContainer id="article-container" ref={containerRef}>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vRcYtjYW_2Kn5wAa9h0k1GRqIGbIAVJmrTt5618G6OnjwWcJ5hQaPQ0HcV2kguEwcdmjwOBJbicZLxo/pub?embedded=true"
        width={containerWidth ? containerWidth - 300 : 300}
        height={600}
      ></iframe>
    </ArticleStyleContainer>
  );
} */

/* const ArticleStyleContainer = customStyled("article", {
  padding: "0 50px 0 20px",

  "h1, h2, h3, h4, h5": {
    marginTop: 10,
  },
});

export default async function ArticleRender() {

  
  return (
    <ArticleStyleContainer>
      
    </ArticleStyleContainer>
  );
} */

export {}