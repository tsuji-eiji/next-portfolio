"use client";
import Link from "next/link";
import { usePathname, useSearchParams  } from 'next/navigation';

const search = useSearchParams();
const router = usePathname();

const generateParams = (searchParams, num) => {
  
  let params = [];
  if (searchParams.get('q')) {
    params['q'] = searchParams.get('q')
  }
  if (num !== 1) {
    params['p'] = num;
  }
  return params;
}

export default function StaticPage({list}) {

  if (list.totalCount < list.limit) {
    return (
      <></>
    )
  }

  const numList = [];

  // ページ数を算出
  const totalPageNum = Math.ceil(list.totalCount / list.limit);

  for (let i = 1; i <= totalPageNum; i++) {
    numList.push(i);
  }

  return (
    <div className="area-border flex justify-center">
      {numList.map((num) => {
        if (search.get('p') == num || search.get('p') == null && num == 1) {
          return <span className="mx-4 bg-gray-600 text-gray-100 pagenate-border" key={num}>{num}</span>
        } else {
          return <Link className="mx-4 pagenate-border" key={num} href={{ pathname: router, query: generateParams(search, num) }}>{num}</Link>
        }
        
      })}
    </div>
  );
}
