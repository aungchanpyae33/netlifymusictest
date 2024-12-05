"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Component() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      // Check if the content height exceeds the container height
      const isScrollable =
        scrollContainer.scrollHeight > scrollContainer.clientHeight;

      // Set the scroll state
      setCanScroll(isScrollable);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-background text-foreground">
      <h2 className="text-2xl font-bold mb-4">Conditional Scrolling Content</h2>
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-content">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="scroll-item">
              <h3 className="text-lg font-semibold mb-2">
                Section {index + 1}
              </h3>
              <p>
                This is content for section {index + 1}. The scrolling effect
                will only apply when the content overflows and requires
                scrolling.
              </p>
              <input type="range" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
