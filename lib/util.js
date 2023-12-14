import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import * as cheerio from 'cheerio';

dayjs.extend(utc);
dayjs.extend(timezone);

// UTC -> "2022_04" のフォーマットに変換
export const formatDate = (date) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
  return formattedDate;
};

export const groupBy = function (contents) {
  return contents.reduce(function (group, x) {
    const yearMonthString = formatDate(new Date(x["publishedAt"]));
    (group[yearMonthString] = group[yearMonthString] || []).push(x);
    return group;
  }, {});
};

export const renderToc = (body) => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3, h4, h5').toArray();
  const toc = headings.map((data) => {
    
    return {
      text: data.children[0].data,
      id: data.attribs.id,
      name: data.name
    }
  });

  return toc;
};