import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination } from "swiper";
import TextContent from "../TextContent/TextContent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProjectItem({ project }) {
  const [inView, setInView] = useState(false);
  const projectsItemsRef = useRef(null);

  const scrollHandler = (event, ref, rootMargin) => {
    const { top: projectsItemTop, bottom: projectsItemBottom } =
      ref.current.getBoundingClientRect();
    const { clientHeight } = event.srcElement.documentElement;
    if (projectsItemTop <= clientHeight - rootMargin) {
      setInView(true);
    }
    if (
      projectsItemBottom <= clientHeight - rootMargin ||
      projectsItemTop >= clientHeight - rootMargin
    ) {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (event) =>
      scrollHandler(event, projectsItemsRef, 500)
    );
    return window.removeEventListener("scroll", (event) =>
      scrollHandler(event, projectsItemsRef, 500)
    );
  }, []);

  return (
    <div
      className="projects__item mandatory-scroll-snapping"
      key={project.id}
      ref={projectsItemsRef}
    >
      <TextContent projectItem={project} inView={inView} />

      <Swiper
        className="swiper-project"
        modules={[Pagination, Lazy]}
        pagination
        lazy
        effect
        speed={800}
        slidesPerView={1}
        grabCursor
      >
        {project.imgUrls.map((url) => (
          <SwiperSlide className="swiper-project__slide" key={url}>
            <div className="projects__item-img-wrapper">
              <img
                className="projects__item-img"
                src={`${process.env.PUBLIC_URL}/media/${url}.png`}
                alt={project.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectItem;
