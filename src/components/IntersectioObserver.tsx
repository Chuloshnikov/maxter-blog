"use client";
import { InView } from "react-intersection-observer";
import { useInViewContext } from "@/context/InViewContext";

const IntersectionObserver = ({
  children,
  threshold = 1.0,
  onInViewChange,
}: {
  children: React.ReactNode;
  threshold?: number;
  onInViewChange?: (inView: boolean, entry: IntersectionObserverEntry) => void;
}) => {
  const { setInView } = useInViewContext();
  return (
    <InView
      as="div"
      threshold={threshold}
      onChange={(inView, entry) => {
        if (onInViewChange) onInViewChange(inView, entry);
        if (setInView) setInView(inView);
      }}
    >
      {children}
    </InView>
  );
};

export default IntersectionObserver;
