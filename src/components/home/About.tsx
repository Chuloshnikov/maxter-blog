import React from "react";
import AnimationCube from "../animations/AnimationCube";
import IntersectionObserver from "../IntersectioObserver";

const About = () => {
  return (
    <IntersectionObserver>
      <section
        id="about"
        className="flex flex-col-reverse lg:flex-row gap-12 xl:gap-16 pt-12"
      >
        <div className="mx-auto">
          <AnimationCube />
        </div>
        <div className="p-6 flex flex-col gap-4 max-w-[500px] flex-1">
          <p className="text-lg md:text-xl text-accentBg font-bold italic">
            This is a{" "}
            <span className="text-2xl md:text-4xl font-extrabold text-black">
              MCH
            </span>{" "}
            blog, where everyone can share their thoughts or opinions about
            anything, without censorship. Everything that is published in the
            blog is the personal opinion of the authors who published the post,
            responsibility for statements in the address of someone and
            something is borne directly by the author who published the post.
          </p>
          <p className="text-lg md:text-xl text-accentBg font-bold italic">
            Posts can be on any topic, both IT and other topics that you would
            like to discuss or raise on the agenda.
          </p>
          <blockquote className="text-lg md:text-2xl font-bold mt-8">
            And remember: Control your thoughts, they can come true.
          </blockquote>
        </div>
      </section>
    </IntersectionObserver>
  );
};

export default About;
