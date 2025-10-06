export interface IProject {
  id: number;
  name: string;
  desc: string;
  imgpath: string;
}

export const ProjectData: IProject[] = [
  {
    id: 1,
    name: "Guitar Habit Music Hub",
    desc: "Guitar Habit Music Hub's Unofficial Website",
    imgpath: "/images/ProjectImgs/01.png",
  },
  {
    id: 2,
    name: "Tipidicuts",
    desc: "Tipidicuts' Landing Page",
    imgpath: "/images/ProjectImgs/02.png",
  },
  {
    id: 3,
    name: "Erl, The Bird Landing Page",
    desc: "The band's landing page",
    imgpath: "/images/ProjectImgs/03.png",
  },
  {
    id: 4,
    name: "LeSource",
    desc: "Resources (software, etc.) I made for personal use and other peers",
    imgpath: "/images/ProjectImgs/04.png",
  },
];
