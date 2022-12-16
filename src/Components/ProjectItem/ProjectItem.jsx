import React from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination } from "swiper";
import TextContent from "../TextContent/TextContent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProjectItem({ project }) {
  const { ref: ProjectItemRef, inView } = useInView({
    threshold: [0.5],
  });

  return (
    <div
      className="projects__item mandatory-scroll-snapping"
      key={project.id}
      ref={ProjectItemRef}
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
