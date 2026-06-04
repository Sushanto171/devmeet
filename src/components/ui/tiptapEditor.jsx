import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

import { FaListOl } from "react-icons/fa";
import {
  FiAlignCenter,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiCode,
  FiImage,
  FiItalic,
  FiLink,
  FiList,
  FiUnderline,
} from "react-icons/fi";
const TiptapEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      BulletList,
      OrderedList,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content || "<p></p>", // default content
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  if (!editor) return null;

  const buttonStyle = "hover:bg-gray-100 p-2 rounded";

  return (
    <div className="p-4 border rounded space-y-3">
      {/* Toolbar */}
      <div className="flex items-center gap-2 flex-wrap border-b pb-2">
        {/* Heading Dropdown */}
        <select
          onChange={(e) => {
            const level = parseInt(e.target.value);
            if (level === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level }).run();
            }
          }}
          className="border text-sm px-2 py-1 rounded"
        >
          <option value="0">Normal</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
        </select>

        {/* Bold */}
        <span
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonStyle}
        >
          <FiBold className="w-5 h-5" />
        </span>

        {/* Italic */}
        <span
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonStyle}
        >
          <FiItalic className="w-5 h-5" />
        </span>

        {/* Underline */}
        <span
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={buttonStyle}
        >
          <FiUnderline className="w-5 h-5" />
        </span>

        {/* Bullet List */}
        <span
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonStyle}
        >
          <FiList className="w-5 h-5" />
        </span>

        {/* Ordered List */}
        <span
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={buttonStyle}
        >
          <FaListOl className="w-5 h-5" />
        </span>

        {/* Align Left */}
        <span
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={buttonStyle}
        >
          <span className="text-sm font-medium">
            <FiAlignLeft />
          </span>
        </span>

        {/* Align Center */}
        <span
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={buttonStyle}
        >
          <span className="text-sm font-medium">
            <FiAlignCenter />
          </span>
        </span>

        {/* Align Right */}
        <span
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={buttonStyle}
        >
          <span className="text-sm font-medium">
            <FiAlignRight />
          </span>
        </span>

        {/* Link */}
        <span
          onClick={() => {
            const url = prompt("Enter URL:");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={buttonStyle}
        >
          <FiLink className="w-5 h-5" />
        </span>

        {/* Code Block */}
        <span
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={buttonStyle}
        >
          <FiCode className="w-5 h-5" />
        </span>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className=" " />
    </div>
  );
};

export default TiptapEditor;
