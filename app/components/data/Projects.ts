export interface IProject {
  id: number;
  name: string;
  desc: string;
  imgpath: string;
  url: string;
}

export const ProjectData: IProject[] = [
  {
    id: 1,
    name: "Guitar Habit Music Hub",
    desc: "Guitar Habit Music Hub's Unofficial Website",
    imgpath: "/Images/ProjectImgs/01.png",
    url: "https://guitarhabit.vercel.app/",
  },
  {
    id: 2,
    name: "Tipidicuts",
    desc: "Tipidicuts' Landing Page",
    imgpath: "/Images/ProjectImgs/02.png",
    url: "https://tipidicuts.vercel.app/",
  },
  {
    id: 3,
    name: "Erl, The Bird Landing Page",
    desc: "Pop-punk band from Cavite's landing page",
    imgpath: "/Images/ProjectImgs/03.png",
    url: "https://erlthebird.vercel.app/",
  },
  {
    id: 4,
    name: "LeSource",
    desc: "Resources (software, etc.) I made for personal use and other peers",
    imgpath: "/Images/ProjectImgs/04.png",
    url: "https://lesource.netlify.app/",
  },
  {
    id: 5,
    name: "LeOCR",
    desc: "OCR Tool made with Tesseract.js",
    imgpath: "/Images/ProjectImgs/05.png",
    url: "https://leocr.vercel.app/",
  },
  {
    id: 6,
    name: "LeOCR",
    desc: "A simple IP Detection using ip-api",
    imgpath: "/Images/ProjectImgs/06.png",
    url: "https://nasanako.vercel.app/",
  },
];
