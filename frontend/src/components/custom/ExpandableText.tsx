import { useState } from "react";

export default function ExpandableText({
  text,
  maxLength = 100,
}: {
  text: string;
  maxLength?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > maxLength;

  const toggle = () => setExpanded(!expanded);

  return (
    <p className="text-sm text-gray-500 mb-2">
      {expanded || !isLong ? text : `${text.slice(0, maxLength)}...`}{" "}
      {isLong && (
        <button
          onClick={toggle}
          className="text-blue-600 text-xs underline ml-1"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </p>
  );
}
