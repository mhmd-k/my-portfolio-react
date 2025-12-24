import { memo, useMemo, useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { LuCodepen } from "react-icons/lu";
import type { Project } from "@/types";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { BiInfoCircle } from "react-icons/bi";
import ImageGallery from "./ImageGallery";

function ProjectCard({
  images,
  title,
  desc,
  github,
  link,
  codepen,
  footer,
}: Project) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(-1);

  const wordCount = useMemo(() => {
    return desc.trim().split(/\s+/).length;
  }, [desc]);

  const truncatedDescription = useMemo(() => {
    if (wordCount <= 25) return desc;
    const words = desc.trim().split(/\s+/);
    return `${words.slice(0, 25).join(" ")}...`;
  }, [desc, wordCount]);

  return (
    <>
      {images.length > 0 && (
        <ImageGallery
          index={activeImageIndex}
          slides={images.map((e) => ({ type: "image", src: e }))}
          onClose={() => {
            setIsOpen(true);
            setActiveImageIndex(-1);
          }}
        />
      )}

      <Card className="pt-0 pb-3 overflow-hidden gap-2">
        <CardHeader className="p-0">
          {images.length > 0 && (
            <img
              src={images[0]}
              loading="lazy"
              alt={title}
              className="h-34 w-full object-cover"
            />
          )}
          <CardTitle className="text-lg font-medium flex gap-2 items-center text-primary dark:text-primary px-4">
            <AiFillFolderOpen className="w-5 h-5" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4">
          <p>{truncatedDescription}</p>
        </CardContent>
        <CardFooter className="pt-2 flex gap-4 items-center justify-between mt-auto px-4">
          <p className="text-sm [word-spacing:5px] text-primary dark:text-primary">
            {footer}
          </p>
          <CardAction className="flex gap-2 mt-auto">
            <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
              <DialogTrigger className="cursor-pointer hover:text-primary transition-colors">
                <BiInfoCircle className="w-5 h-5" />
              </DialogTrigger>
              <DialogContent
                showCloseButton={false}
                className="max-h-[80dvh] overflow-auto lg:min-w-[800px]"
              >
                {images.length > 0 && (
                  <DialogHeader className="flex gap-4 md:flex-row">
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={images[0]}
                        alt={title}
                        className="h-full flex-1 rounded-md cursor-pointer object-cover border-primary border-2"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveImageIndex(0);
                        }}
                      />
                    </div>

                    {images.length > 1 && (
                      <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-2 w-full md:w-[100px] md:h-72 overflow-auto">
                        {[...images].slice(1).map((e, index) => (
                          <div
                            key={e}
                            className="h-18 w-auto aspect-4/3 md:w-full rounded-md overflow-hidden border-primary border-2"
                          >
                            <img
                              src={e}
                              alt={`${title}-${index}`}
                              className="w-full h-full object-cover cursor-pointer"
                              loading="lazy"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveImageIndex(index + 1);
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </DialogHeader>
                )}
                <DialogTitle className="text-primary">{title}</DialogTitle>
                <DialogDescription>{desc}</DialogDescription>
                <DialogFooter className="flex flex-row w-full justify-between!">
                  <p className="text-sm [word-spacing:5px] text-primary dark:text-primary">
                    {footer}
                  </p>

                  <div className="flex gap-2 mt-auto">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        title="code"
                        className="text-gray-700 dark:text-white hover:text-primary transition-colors"
                      >
                        <LuGithub className="w-5 h-5" />
                      </a>
                    )}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        title="demo"
                        className="text-gray-700 dark:text-white hover:text-primary transition-colors"
                      >
                        <LuExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {codepen && (
                      <a
                        href={codepen}
                        target="_blank"
                        className="text-gray-700 dark:text-white hover:text-primary transition-colors"
                        title="codepen"
                      >
                        <LuCodepen className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {github && (
              <a
                href={github}
                target="_blank"
                title="code"
                className="hover:text-primary transition-colors"
              >
                <LuGithub className="w-5 h-5" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                title="demo"
                className="hover:text-primary transition-colors"
              >
                <LuExternalLink className="w-5 h-5" />
              </a>
            )}
            {codepen && (
              <a
                href={codepen}
                target="_blank"
                className="hover:text-primary transition-colors"
                title="codepen"
              >
                <LuCodepen className="w-5 h-5" />
              </a>
            )}
          </CardAction>
        </CardFooter>
      </Card>
    </>
  );
}

export default memo(ProjectCard);
