import { useTranslation } from "react-i18next";

export function TimeSince(date: any) {
  const { t } = useTranslation();

  date = new Date(date);
  const newDate: any = new Date();
  var seconds = Math.floor((newDate - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + t("time.yearsAgo");
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + t("time.monthsAgo");
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + t("time.daysAgo");
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + t("time.hoursAgo");
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + t("time.minutesAgo");
  }
  return Math.floor(seconds) + t("time.secondsAgo");
}
