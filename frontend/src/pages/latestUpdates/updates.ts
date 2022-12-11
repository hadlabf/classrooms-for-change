import img2 from "../../assets/latestUpdates/img2.jpg";
import img3 from "../../assets/latestUpdates/img3.jpg";
import img4 from "../../assets/latestUpdates/school-id4.png";

type Swedish = {
  title: string;
  text: string;
  text2?: string;
  text3?: string;
};
type English = {
  title: string;
  text: string;
  text2?: string;
  text3?: string;
};
export interface Update {
  id: number;
  date: string;
  imageUrl?: string;
  english: English;
  swedish: Swedish;
}

export const updates: Update[] = [
  {
    id: 1,
    date: "2022-11-09",
    english: {
      title: "We are officially started",
      text: "Today we are finally starting the work on one of our plots we bought to build our first school on. We are removing the weeds to be able to lay a secure ground to build the school on.",
      text2: "This is a small process but a big step towards our mission. 🌟 ❤️ 🇬🇭",
    },
    swedish: {
      title: "Vi är officiellt igång!",
      text: "Idag startar vi äntligen igång vårt arbete på marken vi köpt i höstas. Vi rensar buskaget på marken för att senare kunna lägga en stabil grund att bygga skolan på.",
      text2:
        "Det må vara en mindre process, men det är ett stort steg närmare vår vission.🌟 ❤️ 🇬🇭",
    },
  },
  {
    id: 2,
    date: "2022-11-22",
    imageUrl: img3,
    english: {
      title: "One step closer!",
      text: "We’ve finally removed the weeds! Now we are currently in the process of removing the roots and flattening the ground so we can achieve a solid ground to build upon.",
    },
    swedish: {
      title: "Ett steg närmare!",
      text: "Vi har äntligen tagit bort ogräset! Nu håller vi på att ta bort rötterna och platta till marken så att vi kan få en fast mark att bygga på.",
    },
  },
  {
    id: 3,
    date: "2022-11-25",
    imageUrl: img2,
    english: {
      title: "The ceremony",
      text: "In Ghanaian culture, this ceremony is essential before starting the building process. Pouring of libation to our ancestors and gods to help us make everything successful.",
      text2: "It’s just so beautiful!",
    },
    swedish: {
      title: "Ceremoni",
      text: "I den Ghananska kulturen är denna ceremoni viktig att fullfölja innan byggprocessen påbörjas. Vi offrar en speciell dricka till våra förfäder och gudar för att hjälpa oss att göra allt framgångsrikt.",
      text2: "Så vackert!.",
    },
  },
  {
    id: 4,
    date: "2022-12-10",
    imageUrl: img4,
    english: {
      title: "First draft of the building plan is ready!",
      text: "The first draft is finally done. Keep in mind that the plan is to take it step by step. We will start with one classroom at a time so that in the future we have a complete school from nursery up to primary 6. ",
      text2:
        "In the plan we have invluded a lunch hall, which is very uncommon for schools in Ghana. We want to make sure that the children have enough nutrition to be able to focus. Otherwise the children struggeling most with poverty wouldn't have the same chance as the rest. Which is what we want to change. ",
      text3:
        "We have also included a soccer field and a playground i the middle. This way its easy for the teachers to look out for the children, while sitting in a shaded area.",
    },
    swedish: {
      title: "Första utkast av ritningen är klar!",
      text: "Det första utkastet är äntligen klart. Ha i åtanke att planen är att bygga skolan steg för steg. Vi börjar med ett klassrum i taget så att vi i framtiden har en komplett skola. Skolan inkluderar förskola upp till klass 6 (lågstadiet).",
      text2:
        "I planen har vi inkluderat en lunchhall, något som är mycket ovanligt för skolor i Ghana. Vi vill se till att barnen får tillräckligt med näring för att kunna fokusera. Annars skulle de barn som kämpar mest med fattigdom inte ha samma chans som de andra. Vilket är något vi vill förändra på.",
      text3:
        "Vi har även inkluderat en fotbollsplan och en lekplats i mitten av skolan. På så sätt är det lätt för lärarna att hålla utkik efter barnen samtidigt som de sitter i ett skuggigt område.",
    },
  },
];

// {
//   id: 0,
//   date: "2022-12-05",
//   imageUrl: img3,
//   title: "ENGLISH",
//   SV_title: "SWEDISH",
//   text: "ENGLISH",
//   SV_text: "SWEDISH",
//   text2: "ENGLISH",
//   SV_text2: "SWEDISH",
// }
