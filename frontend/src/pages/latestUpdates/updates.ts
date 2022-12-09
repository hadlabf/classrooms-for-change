import img2 from "../../assets/latestUpdates/img2.jpg";
import img3 from "../../assets/latestUpdates/img3.jpg";

export interface Update {
  id: number;
  date: string;
  imageUrl?: string;
  title: string;
  text: string;
  text2?: string;
}

export const updates: Update[] = [
  {
    id: 1,
    date: "2022-11-09",
    imageUrl: img2,
    title: "We are officially started",
    text: "Today we are finally starting the work on one of our plots we bought to build our first school on. We are removing the weeds to be able to lay a secure ground to build the school on.",
    text2: "This is a small process but a big step towards our mission. 🌟❤️🇬🇭",
  },
  {
    id: 2,
    date: "2022-11-22",
    imageUrl: img3,
    title: "One step closer!",
    text: "We’ve finally removed the weeds! Now we are currently in the process of removing the roots and flattening the ground so we can achieve a solid ground to build upon.",
  },
  {
    id: 3,
    date: "2022-11-25",
    imageUrl: img2,
    title: "The ceremony",
    text: "In Ghanaian culture, this ceremony is essential before starting the building process. Pouring of libation to our ancestors and gods to help us make everything successful.",
    text2: "It’s just so beautiful!",
  },
  {
    id: 4,
    date: "2022-12-05",
    imageUrl: img3,
    title: "This is a test",
    text: "In Ghanaian culture, this ceremony is essential before starting the building process. Pouring of libation to our ancestors and gods to help us make everything successful.",
    text2: "It’s just so beautiful!",
  },
];
